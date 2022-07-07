function Navbar(props) {
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      props.setAssemblyCode(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([props.assemblyCode], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "assemblyCode.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div style={{ visibility: props.assembly ? "visible" : "hidden" }}>
        <button type="button" className="btn btn-light">
          <label htmlFor="file-upload">Load</label>
        </button>
        <input id="file-upload" type="file" onChange={showFile} />
        <button
          type="button"
          className="btn btn-light"
          onClick={downloadTxtFile}
        >
          Save
        </button>
      </div>

      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">
          EduARM
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
