const express = require("express");
const app = express();
const sessions = require("express-session");
const cors = require("cors");
const port = 3001;

const userSessions = {};
const UserSession = require("./UserSession.js");
const RedisStore = require("connect-redis")(sessions);
const { createClient } = require("redis");
const CPU = require("./CPU.js");
let redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);
app.use(
  cors({
    credentials: true,
    origin:
      (process.env.NODE_ENV === "production"
        ? "http://eduarm.fe.up.pt"
        : "http://localhost") + ":3000",
  })
);
let store = new RedisStore({
  client: redisClient,
});
app.use(express.json());
app.use(
  sessions({
    secret: "gaming",
    name: "gaming",
    cookie: { maxAge: 3600 * 1000 * 4 },
    saveUninitialized: true,
    resave: true,
    store: store,
  })
);

setInterval(() => {
  store.all((err, sessions) => {
    if (err) {
      console.error(err);
    } else {
      let activeSessions = [];
      for (let cookie of sessions) {
        activeSessions.push(cookie.id);
      }

      for (let sessionID in userSessions) {
        if (!activeSessions.includes(sessionID)) {
          delete userSessions[sessionID];
        }
      }
    }
  });
}, 1000 * 60 * 15);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Origin",
    (process.env.NODE_ENV === "production"
      ? "http://eduarm.fe.up.pt"
      : "http://localhost") + ":3000"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Origin"
  );
  next();
});

app.use((req, res, next) => {
  let userSession = userSessions[req.session.id];
  if (userSession === undefined) {
    userSession = new UserSession();
    userSessions[req.session.id] = userSession;
  }
  next();
});

app.get("/execute", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.cpu.initializeCPU(userSession.registers, userSession.memory);
  userSession.cpu.setInsMemInstructions(userSession.instructionGroup);
  let instructionFlow = [];
  let maxPC =
    userSession.instructionGroup.length +
    (userSession.cpu.cpuVersion === "Pipeline" ? 4 : 0);
  for (let i = 0; i < maxPC && instructionFlow.length <= 200; ) {
    instructionFlow.push(i);
    let state = userSession.cpu.executeCPU(userSession.instructionTypeGroup[i]);
    userSession.relevantLines.push(
      userSession.cpu.returnCPURelevantLines(
        userSession.instructionTypeGroup[i]
      )
    );
    userSession.criticalPath.push(
      userSession.cpu.returnCriticalPath(userSession.instructionTypeGroup[i])
    );
    i = state[0].updatedPC.data.value / 4;
    userSession.cpuStates.push(JSON.parse(JSON.stringify(state)));
  }
  userSessions[req.session.id] = userSession;

  res.send({
    cpuStates: userSession.cpuStates,
    instructionFlow: instructionFlow,
    relevantLines: userSession.relevantLines,
    criticalPath: userSession.criticalPath,
  });
});

app.get("/reset", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.reset();
  req.session.save();
  userSessions[req.session.id] = userSession;
  res.send(userSession.cpuStates);
});

app.post("/sendRegisters", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.registers = req.body;
  userSessions[req.session.id] = userSession;
  res.send("Registers");
});

app.post("/changeCPUVersion", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.reset();
  userSession.cpu.cpuVersion = req.body.cpuVer;
  res.send("CPU Version");
});

app.post("/readInstruction", (req, res) => {
  let userSession = userSessions[req.session.id];

  let instructions = req.body.instructions;
  let instructionCodes = [];
  let address,
    rd,
    rn = null;
  for (let instruction of instructions) {
    switch (instruction[0]) {
      case "add":
      case "sub":
      case "and":
      case "orr":
        let rm = (instruction[3] >>> 0).toString(2).padStart(5, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        instructionCodes.push(
          assembleALInstruction(instruction[0], rm, rn, rd)
        );
        userSession.instructionTypeGroup.push("rType");
        userSession.instructionGroup.push(
          assembleALInstruction(instruction[0], rm, rn, rd)
        );
        break;
      case "ldur":
        if (instruction[3] === undefined) instruction[3] = 0;
        offset = (instruction[3] >>> 0).toString(2).padStart(9, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        userSession.instructionTypeGroup.push("loadType");
        instructionCodes.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        userSession.instructionGroup.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        break;
      case "stur":
        if (instruction[3] === undefined) instruction[3] = 0;
        offset = (instruction[3] >>> 0).toString(2).padStart(9, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        userSession.instructionTypeGroup.push("storeType");
        instructionCodes.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        userSession.instructionGroup.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        break;
      case "b":
        address = (instruction[1] >>> 0).toString(2).padStart(26, "0");
        address = address.substring(address.length - 26);
        instructionCodes.push(assembleJumpBInstruction(address));
        userSession.instructionTypeGroup.push("uncondBranchType");
        userSession.instructionGroup.push(assembleJumpBInstruction(address));
        break;
      case "cbz":
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        address = (instruction[2] >>> 0).toString(2).padStart(19, "0");
        address = address.substring(address.length - 19);
        instructionCodes.push(assembleJumpCondInstruction(address, rd));
        userSession.instructionTypeGroup.push("cBranchType");
        userSession.instructionGroup.push(
          assembleJumpCondInstruction(address, rd)
        );
        break;
    }
  }

  userSessions[req.session.id] = userSession;
  res.send(JSON.stringify(instructionCodes));
});

app.get("/assembleALInstruction/:op/:dest/:first/:second", (req, res) => {
  let op = req.params.op;
  let rm = (req.params.second >>> 0).toString(2).padStart(5, "0");
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");

  let instructionCode = assembleALInstruction(op, rm, rn, rd);
  let userSession = userSessions[req.session.id];
  userSession.instructionTypeGroup.push("rType");
  userSession.instructionGroup.push(instructionCode);
  userSessions[req.session.id] = userSession;
  res.send(JSON.stringify(instructionCode));
});

const assembleALInstruction = (op, rm, rn, rd) => {
  let opcode = "";
  let shamt = "000000";
  switch (op) {
    case "add":
      opcode = "10001011000";
      break;
    case "sub":
      opcode = "11001011000";
      break;
    case "and":
      opcode = "10001010000";
      break;
    case "orr":
      opcode = "10101010000";
      break;
  }
  let instructionCode = opcode + rm + shamt + rn + rd;
  return instructionCode;
};

app.get("/assembleMemInstruction/:op/:dest/:first/:second", (req, res) => {
  let op = req.params.op;
  let offset = (req.params.second >>> 0).toString(2).padStart(9, "0");
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");
  let instructionCode = assembleMemInstruction(op, offset, rn, rd);
  res.send(JSON.stringify(instructionCode));
});

const assembleMemInstruction = (op, offset, rn, rd) => {
  let opcode = "";
  let op2 = "00";
  switch (op) {
    case "ldur":
      opcode = "11111000010";
      break;
    case "stur":
      opcode = "11111000000";
      break;
  }
  instructionCode = opcode + offset + op2 + rn + rd;
  return instructionCode;
};

app.get("/assembleJumpBInstruction/:label", (req, res) => {
  let address = (req.params.label >>> 0).toString(2).padStart(26, "0");
  let instructionCode = assembleJumpBInstruction(address);
  res.send(JSON.stringify(instructionCode));
});

const assembleJumpBInstruction = (address) => {
  let opcode = "000101";
  instructionCode = opcode + address;
  return instructionCode;
};

app.get("/assembleJumpCondInstruction/:cond/:label", (req, res) => {
  let rd = (req.params.cond >>> 0).toString(2).padStart(5, "0");
  let address = (req.params.label >>> 0).toString(2).padStart(19, "0");
  let instructionCode = assembleJumpCondInstruction(address, rd);
  res.send(JSON.stringify(instructionCode));
});

const assembleJumpCondInstruction = (address, rd) => {
  let opcode = "10110100";
  instructionCode = opcode + address + rd;
  return instructionCode;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
