function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav me-auto">
          <li className="ms-1 nav-item active">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="ms-1 nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="ms-1 nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">
          simulator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <li className="me-1 nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="me-1 nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="me-1 nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
