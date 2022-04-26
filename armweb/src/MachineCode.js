import { useEffect, useState } from "react";

function MachineCode(props) {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (props.compiling) {
      let tempIns = [];
      for (var i = 0; i < props.instructions.length; i++) {
        tempIns.push(
          <tr key={i}>
            <td>{i * 4}</td>
            <td>{props.machineCodes[i]}</td>
            <td>{props.instructions[i]}</td>
          </tr>
        );
      }
      setInstructions(tempIns);
    }
  }, [props.machineCodes]);

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
