import { useEffect } from "react";

function MachineCode(props) {
  let instructions = [];

  useEffect(() => {
    if (props.compiling) {
      for (var i = 0; i < props.instructions.length; i++) {
        console.log("hi");
        instructions.push(
          <tr key={i}>
            <td>{i * 4}</td>
            <td>{props.machineCodes[i]}</td>
            <td>{props.instructions[i]}</td>
          </tr>
        );
      }
      props.setCompiling(false);
    }
  }, [props.compiling, props.instructions]);

  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Machine Code</th>
          <th scope="col">Instruction</th>
        </tr>
      </thead>
      <tbody>{instructions}</tbody>
    </table>
  );
}

export default MachineCode;
