const express = require("express");
const app = express();
const sessions = require("express-session");
const cors = require("cors");
const port = 3001;

const userSessions = {};
const UserSession = require("./UserSession.js");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  sessions({
    secret: "gaming",
    name: "gaming",
    cookie: { maxAge: 3600 * 1000 * 4 },
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
  console.log(userSession);
  userSession.cpu.initializeCPU(userSession.registers, userSession.memory);
  userSession.cpu.setInsMemInstructions(userSession.instructionGroup);
  let instructionFlow = [];
  for (let i = 0; i < userSession.instructionGroup.length; ) {
    instructionFlow.push(i);
    let state = userSession.cpu.executeCPU(userSession.instructionTypeGroup[i]);
    userSession.relevantLines.push(
      cpu.returnCPURelevantLines(userSession.instructionTypeGroup[i])
    );
    userSession.criticalPath.push(
      cpu.returnCriticalPath(userSession.instructionTypeGroup[i])
    );
    i = state[0].updatedPC.data.value / 4;
    userSession.cpuStates.push(JSON.parse(JSON.stringify(state)));
  }
  userSessions[req.session.id] = userSession;

  res.send({
    cpuStates: userSession.cpuStates,
    instructionFlow: userSession.instructionFlow,
    relevantLines: userSession.relevantLines,
    criticalPath: userSession.criticalPath,
  });
});

app.get("/reset", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.reset();
  userSessions[req.session.id] = userSession;
  req.session.save();
  res.send(userSession.cpuStates);
});

app.get("/recalculateLatency/:newLatency/:componentID", (req, res) => {
  let newCpuState = req.session.userSession.cpu.recalculateComponentLatency(
    req.params.newLatency,
    req.params.componentID
  );
  req.session.save();
  res.send(newCpuState);
});

app.post("/sendRegisters", (req, res) => {
  let userSession = userSessions[req.session.id];
  userSession.registers = req.body;
  userSessions[req.session.id] = userSession;
  console.log(userSession);
  res.send("Registers");
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
      case "stur":
        if (instruction[3] === undefined) instruction[3] = 0;
        let offset = (instruction[3] >>> 0).toString(2).padStart(9, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        instructionCodes.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        break;
      case "b":
        address = (instruction[1] >>> 0).toString(2).padStart(26, "0");
        address = address.substring(address.length - 26);
        instructionCodes.push(assembleJumpBInstruction(address));
        break;
      case "cbz":
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        address = (instruction[2] >>> 0).toString(2).padStart(19, "0");
        address = address.substring(address.length - 19);
        instructionCodes.push(assembleJumpCondInstruction(address, rd));
        break;
    }
  }

  userSessions[req.session.id] = userSession;
  console.log(userSession);
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
      instructionTypeGroup.push("loadType");
      break;
    case "stur":
      opcode = "11111000000";
      instructionTypeGroup.push("storeType");
      break;
  }
  instructionCode = opcode + offset + op2 + rn + rd;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.get("/assembleJumpBInstruction/:label", (req, res) => {
  let address = (req.params.label >>> 0).toString(2).padStart(26, "0");
  let instructionCode = assembleJumpBInstruction(address);
  res.send(JSON.stringify(instructionCode));
});

const assembleJumpBInstruction = (address) => {
  let opcode = "000101";
  instructionTypeGroup.push("uncondBranchType");
  instructionCode = opcode + address;
  instructionGroup.push(instructionCode);
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
  instructionTypeGroup.push("cBranchType");
  instructionCode = opcode + address + rd;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
