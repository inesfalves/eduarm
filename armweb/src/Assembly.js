import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";

const axios = require("axios");

function Assembly(props) {
  const [code, setCode] = useState(``);

  useEffect(() => {
    setCode(props.assemblyCode);
  }, [props.assemblyCode]);

  useEffect(() => {
    props.setAssemblyCode(code);
  }, [code]);

  useEffect(() => {
    if (!props.executed && code.length > 0) {
      setCode(``);
    }
    if (props.executed) {
      let lines = code.split("\n");
      let tempIns = [];
      let jumpMap = new Map();
      for (let i = 0; i < lines.length; i++) {
        tempIns.push(
          lines[i]
            .replace(/,/g, " ")
            .replace(/\s\[?x+/gi, " ")
            .replace(/\s#+/g, " ")
            .replace(/]+/g, " ")
            .trim()
            .split(/\s+/)
        );
        if (tempIns[i][0].endsWith(":")) {
          jumpMap.set(tempIns[i][0].replace(/:/g, ""), i);
          tempIns[i].splice(0, 1);
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
        .post("http://localhost:3001/readInstruction/", {
          instructions: tempIns,
        })
        .then((instructionCodes) => {
          props.setMachineCodes(instructionCodes.data);
        });
    }
  }, [props.executed]);

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
