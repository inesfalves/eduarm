import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";
import { BASE_URL } from "./Constants.js";

const axios = require("axios");

function Assembly(props) {
  const [code, setCode] = useState(``);

  useEffect(() => {
    setCode(props.assemblyCode);
  }, [props.assemblyCode]);

  useEffect(() => {
    props.setAssemblyCode(code);
  }, [code]);

  const checkForSyntaxErrors = (instruction) => {
    const validInstructions = [
      "add",
      "sub",
      "and",
      "orr",
      "ldur",
      "stur",
      "cbz",
      "b",
    ];
    const arithmeticInstructions = ["add", "sub", "and", "orr"];
    const memInstructions = ["ldur", "stur"];

    if (instruction.length === 0) {
      return "Please enter a valid instruction.";
    }

    if (!validInstructions.includes(instruction[0].toLowerCase())) {
      return "Please enter a valid instruction.";
    }
    if (arithmeticInstructions.includes(instruction[0].toLowerCase())) {
      for (let i = 1; i < instruction.length; i++) {
        //check if first character is an x
        if (instruction[i][0] === "x") {
          //check if rest of string is number
          if (!Number.isInteger(parseInt(instruction[i].slice(1)))) {
            return (
              "Please make sure the register written in the " +
              instruction[0] +
              " instruction exists."
            );
          }
        } else {
          return (
            "Please make sure the register written in the " +
            instruction[0] +
            " starts with an x."
          );
        }
      }
    }

    if (memInstructions.includes(instruction[0].toLowerCase())) {
      if (instruction[1][0] === "x" && instruction[2][0] === "x") {
        if (
          !Number.isInteger(parseInt(instruction[1].slice(1))) ||
          !Number.isInteger(parseInt(instruction[2].slice(1)))
        ) {
          return (
            "Please make sure the register written in the " +
            instruction[0] +
            " instruction exists."
          );
        }
      } else {
        return (
          "Please make sure the register written in the " +
          instruction[0] +
          " starts with an x."
        );
      }
    }

    if (instruction[0] === "cbz") {
      if (instruction[1][0] === "x") {
        if (!Number.isInteger(parseInt(instruction[1].slice(1)))) {
          return (
            "Please make sure the register written in the " +
            instruction[0] +
            " instruction exists."
          );
        }
      } else {
        return (
          "Please make sure the register written in the " +
          instruction[0] +
          " starts with an x."
        );
      }
    }

    return "";
  };

  useEffect(() => {
    if (props.compiled) {
      if (code === ``) {
        console.log("Please write an instruction!");
        props.setErrorsFound(true);
        props.setCompiled(false);
        return;
      }

      let lines = code.split("\n");
      lines = lines.filter((line) => line.length > 0);
      let jumpMap = new Map();

      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
        if (lines[i].endsWith(":")) {
          if (i !== lines.length - 1) {
            lines[i] = lines[i].concat(" " + lines[i + 1]);
            lines.splice(i + 1, 1);
          }
        }
      }

      setCode(lines.join("\n"));

      lines = code.split("\n");
      lines = lines.filter((line) => line.length > 0);

      let tempIns = lines.map((line) =>
        line
          .replace(/,/g, " ")
          .replace(/\s\[+/gi, " ")
          .replace(/\s#+/g, " ")
          .replace(/]+/g, " ")
          .trim()
          .split(/\s+/)
      );

      for (let i = 0; i < tempIns.length; i++) {
        if (tempIns[i][0].endsWith(":")) {
          jumpMap.set(tempIns[i][0].replace(/:/g, ""), i);
          tempIns[i].splice(0, 1);
          if (tempIns[i].length === 0) {
            tempIns.splice(i, 1);
            i--;
          }
        }

        if (checkForSyntaxErrors(tempIns[i]) !== "") {
          console.log(checkForSyntaxErrors(tempIns[i]));
          props.setErrorsFound(true);
          props.setCompiled(false);
          return;
        }
        for (let j = 1; j < tempIns[i].length; j++) {
          tempIns[i][j] = tempIns[i][j].replace(/x/g, "");
        }
      }

      for (let i = 0; i < tempIns.length; i++) {
        if (tempIns[i][0].toLowerCase() === "b") {
          if (isNaN(tempIns[i][1])) {
            let diff = jumpMap.get(tempIns[i][1]) - i;
            tempIns[i][1] = diff.toString();
          }
        }

        if (tempIns[i][0].toLowerCase() === "cbz") {
          if (isNaN(tempIns[i][2])) {
            let diff = jumpMap.get(tempIns[i][2]) - i;
            tempIns[i][2] = diff.toString();
          }
        }
      }

      props.setInstructions(lines);

      axios
        .post(BASE_URL + ":3001/readInstruction/", {
          instructions: tempIns,
        })
        .then((instructionCodes) => {
          props.setMachineCodes(instructionCodes.data);
        });
    }
  }, [props.compiled]);

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
