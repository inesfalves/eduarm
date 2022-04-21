import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";

function Assembly(props) {
  const [code, setCode] = useState(``);

  const assembleALInstruction = (op, dest, first, second) => {
    let opcode = "";
    let shamt = "000000";
    let rm = (second >>> 0).toString(2).padStart(5, "0");
    let rn = (first >>> 0).toString(2).padStart(5, "0");
    let rd = (dest >>> 0).toString(2).padStart(5, "0");
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
    props.setMachineCode(opcode + rm + shamt + rn + rd);
  };

  useEffect(() => {
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
      assembleALInstruction(parts[0], parts[1], parts[2], parts[3]);
      props.setInstruction(lines[0]);
    }
  }, [code]);

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
