import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";

const axios = require("axios");

function Assembly(props) {
  const [code, setCode] = useState(``);

  const setMachineCodeValues = (op, dest, first, second) => {
    if (op === "ldur" || op === "stur") {
      axios
        .get(
          "http://localhost:3001/assembleMemInstruction/" +
            op +
            "/" +
            dest +
            "/" +
            first +
            "/" +
            second
        )
        .then(function (res) {
          props.setMachineCode(res.data);
        });
    } else {
      axios
        .get(
          "http://localhost:3001/assembleALInstruction/" +
            op +
            "/" +
            dest +
            "/" +
            first +
            "/" +
            second
        )
        .then(function (res) {
          props.setMachineCode(res.data);
        });
    }
  };

  const setJumpBMachineCodeValues = (label) => {
    axios
      .get("http://localhost:3001/assembleJumpBInstruction/" + label)
      .then(function (res) {
        props.setMachineCode(res.data);
      });
  };

  const setJumpCondMachineCodeValues = (cond, label) => {
    axios
      .get(
        "http://localhost:3001/assembleJumpCondInstruction/" +
          cond +
          "/" +
          label
      )
      .then(function (res) {
        props.setMachineCode(res.data);
      });
  };

  useEffect(() => {
    if (props.compiling) {
      props.setCompiling(false);
      let lines = code.split("\n");
      let instructions = [];

      for (let line of lines) {
        instructions.push(
          line
            .replace(/,/g, " ")
            .replace(/\s\[?x+/gi, " ")
            .replace(/\s#+/g, " ")
            .replace(/]+/g, " ")
            .trim()
            .split(/\s+/)
        );
      }

      console.log(instructions);

      for (let ins in instructions) {
        let instruction = instructions[ins];
        switch (instruction[0]) {
          case "add":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "sub":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "and":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "orr":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "ldur":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "stur":
            setMachineCodeValues(
              instruction[0],
              instruction[1],
              instruction[2],
              instruction[3]
            );
            break;
          case "b":
            setJumpBMachineCodeValues(instruction[1]);
            break;
          case "cbz":
            setJumpCondMachineCodeValues(instruction[1], instruction[2]);
            break;
        }
        props.setInstruction(lines[ins]);
      }
    }
  }, [props.compiling]);

  return (
    <CodeEditor
      className="h-100"
      value={code}
      language="mips"
      placeholder="Please enter ARM code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
}

export default Assembly;
