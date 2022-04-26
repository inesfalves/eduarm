import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";

const axios = require("axios");

function Assembly(props) {
  const [code, setCode] = useState(``);

  useEffect(() => {
    if (props.compiling) {
      let lines = code.split("\n");
      let tempIns = [];
      for (let line of lines) {
        tempIns.push(
          line
            .replace(/,/g, " ")
            .replace(/\s\[?x+/gi, " ")
            .replace(/\s#+/g, " ")
            .replace(/]+/g, " ")
            .trim()
            .split(/\s+/)
        );
      }
      props.setInstructions(lines);

      let tempValues = [];
      let promises = [];
      for (let ins in tempIns) {
        console.log(tempIns);
        let instruction = tempIns[ins];
        switch (instruction[0]) {
          case "add":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleALInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "sub":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleALInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "and":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleALInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "orr":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleALInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "ldur":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleMemInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "stur":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleMemInstruction/" +
                  instruction[0] +
                  "/" +
                  instruction[1] +
                  "/" +
                  instruction[2] +
                  "/" +
                  instruction[3]
              )
            );
            break;
          case "b":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleJumpBInstruction/" +
                  instruction[1]
              )
            );
            break;
          case "cbz":
            promises.push(
              axios.get(
                "http://localhost:3001/assembleJumpCondInstruction/" +
                  instruction[1] +
                  "/" +
                  instruction[2]
              )
            );
            break;
        }
      }

      Promise.all(promises).then((values) =>
        props.setMachineCodes(values.map((value) => value.data))
      );
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
