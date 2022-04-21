function MachineCode(props) {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Machine Code</th>
          <th scope="col">Instruction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>{props.machineCode}</td>
          <td>{props.instruction}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MachineCode;
