function ViewTab() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          CPU
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          ASSEMBLY
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          MACHINE CODE
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          DATA MEMORY
        </a>
      </li>
    </ul>
  );
}

export default ViewTab;
