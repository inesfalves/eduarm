import { useEffect, useState } from "react";

function DataMemoryDisplay(props) {
  const [memoryLines, setMemoryLines] = useState([]);

  useEffect(() => {
    if (props.executed) {
      let dataMemValues = props.cpuState.find((x) => x.id === "DataMemory")
        .memory;
      let tempMem = [];
      for (var i = 0; i < dataMemValues.length; i++) {
        tempMem.push(
          <tr key={i}>
            <td>{i * 4}</td>
            <td>{dataMemValues[i]}</td>
          </tr>
        );
      }
      setMemoryLines(tempMem);
    }
  }, [props.cpuState]);

  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Memory</th>
        </tr>
      </thead>
      <tbody>{memoryLines}</tbody>
    </table>
  );
}

export default DataMemoryDisplay;
