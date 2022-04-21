import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";

const axios = require("axios");

function Assembly(props) {
  const [code, setCode] = useState(``);

  const setMachineCodeValues = (op, dest, first, second) => {
    axios
      .get(
        "http://localhost:3001/assembleInstruction/" +
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
  };

  useEffect(() => {
    if (props.compiling) {
      let lines = code.split("\n");

      let parts = lines[0]
        .replace(/,/g, " ")
        .replace(/\sx+/g, " ")
        .trim()
        .split(/\s+/);

      if (
        parts[0] === "add" ||
        parts[0] === "sub" ||
        parts[0] === "and" ||
        parts[0] === "orr"
      ) {
        setMachineCodeValues(parts[0], parts[1], parts[2], parts[3]);
        props.setInstruction(lines[0]);
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
