import { useEffect, useState } from "react";

function DataMemoryDisplay(props) {
  const [memoryLines, setMemoryLines] = useState([]);
  let dataMemValues = [];

  useEffect(() => {
    if (props.executed) {
      dataMemValues = props.cpuState.find((x) => x.id === "DataMemory").memory;
      let tempMem = [];
      for (var i = 0; i < 5; i++) {
        tempMem.push(
          <tr key={i}>
            <td>{i * 4}</td>
            <td>{dataMemValues[i]}</td>
          </tr>
        );
      }
      setMemoryLines(tempMem);
    }
  }, [props.execute, props.cpuState]);

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
