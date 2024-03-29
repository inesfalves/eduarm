import { Handle, Position } from "react-flow-renderer";

function ForkNode({ data }) {
  return (
    <div
      className="fork-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="side-node"
        type="target"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="source"
        position={Position.Top}
        id="a"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="side-node"
        type="source"
        position={Position.Right}
        id="b"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function ForkNodeThree({ data }) {
  return (
    <div
      className="fork-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="side-node"
        type="target"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="source"
        position={Position.Bottom}
        id="a"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="side-node"
        type="source"
        position={Position.Right}
        id="b"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="source"
        position={Position.Top}
        id="c"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function PipePCNode({ data }) {
  return (
    <div
      className="alu-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function PCAuxNode({ data }) {
  return (
    <div
      className="aux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="side-node"
        type="source"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="target"
        position={Position.Bottom}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function PCTopAuxNode({ data }) {
  return (
    <div
      className="aux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="top-node"
        type="source"
        position={Position.Bottom}
        style={
          data.borderColor !== undefined
            ? { background: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="side-node"
        type="target"
        position={Position.Right}
        style={
          data.borderColor !== undefined
            ? { background: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function MemAuxNode({ data }) {
  return (
    <div
      className="aux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="side-node"
        type="source"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="target"
        position={Position.Top}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function EXMEMAuxNode({ data }) {
  return (
    <div
      className="aux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="side-node"
        type="target"
        position={Position.Right}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="top-node"
        type="source"
        position={Position.Top}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function MemLeftAuxNode({ data }) {
  return (
    <div
      className="aux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        className="top-node"
        type="source"
        position={Position.Top}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="side-node"
        type="target"
        position={Position.Right}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function ControlMemAuxNode({ data }) {
  return (
    <div className="control-aux-node">
      <Handle
        className="top-node"
        type="target"
        position={Position.Top}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        className="side-node"
        type="source"
        position={Position.Right}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function ForkNodeSecond({ data }) {
  return (
    <div
      className="fork-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        className="top-node"
        position={Position.Bottom}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Top}
        id="a"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        id="b"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function SignExtendDist({ data }) {
  return (
    <div
      className="fork-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        className="side-node"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        id="a"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="b"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function PipeSignExtendDist({ data }) {
  return (
    <div
      className="fork-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle type="target" className="side-node" position={Position.Left} />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        id="a"
      />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        style={{ top: 40 }}
        id="b"
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="c"
      />
    </div>
  );
}

function ALUControlNode({ data }) {
  return (
    <div className="alucontrol-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function ALUNode({ data }) {
  return (
    <div
      className="alu-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 35 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 60 }}
      />
      <Handle type="target" position={Position.Bottom} id="c" />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 30 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 60 }}
      />
    </div>
  );
}

function MuxNode({ data }) {
  return (
    <div
      className="mux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function PipeMuxNode({ data }) {
  return (
    <div
      className="mux-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 30 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 45 }}
      />
      <Handle type="target" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function AndNode({ data }) {
  return (
    <div
      className="alucontrol-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function AddNode({ data }) {
  return (
    <div
      className="add-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function DistributorNode({ data }) {
  return (
    <div
      className="distributor-node"
      style={
        data.borderColor !== undefined ? { background: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        className="side-node"
        position={Position.Left}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Top}
        id="a"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 95 }}
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="e"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function PipeDistNode({ data }) {
  return (
    <div
      className="distributor-node"
      style={
        data.borderColor !== undefined ? { background: data.borderColor } : {}
      }
    >
      <Handle
        type="target"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
        className="side-node"
        position={Position.Left}
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Top}
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
        id="a"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 45 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 75 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 95 }}
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="f"
        style={
          data.borderColor !== undefined
            ? { backgroundColor: data.borderColor }
            : { backgroundColor: "#b1b1b7" }
        }
      />
    </div>
  );
}

function RegBankNode({ data }) {
  return (
    <div
      className="regbank-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 60 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 105 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 140 }}
      />
      <Handle type="target" position={Position.Top} id="f" />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 100 }}
      />
    </div>
  );
}

function DataMemoryNode({ data }) {
  return (
    <div
      className="datamemory-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 30 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 60 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle type="target" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function IFIDNode({ data }) {
  return (
    <div
      className="pipeline-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 120 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 264 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle
        type="source"
        id="a"
        style={{ top: 150 }}
        position={Position.Right}
      />
      <Handle
        type="source"
        id="b"
        style={{ top: 264 }}
        position={Position.Right}
      />
    </div>
  );
}

function IDEXNode({ data }) {
  return (
    <div
      className="pipeline-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 150 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 260 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 340 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 370 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="e"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="f"
        style={{ top: 430 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="g"
        style={{ top: 460 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="h"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 150 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 260 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 340 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 370 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="f"
        style={{ top: 430 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="g"
        style={{ top: 460 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="h"
        style={{ top: 490 }}
      />
    </div>
  );
}

function EXMEMNode({ data }) {
  return (
    <div
      className="pipeline-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 100 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 200 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 300 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="e"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 100 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 200 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 300 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="j"
        style={{ top: 100 }}
      />
    </div>
  );
}

function MEMWBNode({ data }) {
  return (
    <div
      className="pipeline-node"
      style={
        data.borderColor !== undefined ? { borderColor: data.borderColor } : {}
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 300 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 300 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 490 }}
      />
    </div>
  );
}

function ControlNode({ data }) {
  return (
    <div className="control-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 20 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 30 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 50 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="f"
        style={{ top: 60 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="g"
        style={{ top: 70 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="h"
        style={{ top: 80 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="i"
        style={{ top: 90 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="j"
        style={{ top: 100 }}
      />
    </div>
  );
}

function PipeControlNode({ data }) {
  return (
    <div className="pipecontrol-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function HazardDetectionNode({ data }) {
  let styleObject = {};
  if (data.borderColor !== undefined) {
    styleObject.borderColor = data.borderColor;
  }

  if (data.borderWidth !== undefined) {
    styleObject.borderWidth = data.borderWidth;
  }

  return (
    <div className="pipeunit-node" style={styleObject}>
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{ top: 25 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 35 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 45 }}
      />
      <Handle type="target" position={Position.Bottom} id="c" />
      <Handle
        type="target"
        position={Position.Right}
        id="d"
        style={{ top: 20 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 40 }}
      />
    </div>
  );
}

function ForwardingUnitNode({ data }) {
  let styleObject = {};
  if (data.borderColor !== undefined) {
    styleObject.borderColor = data.borderColor;
  }

  if (data.borderWidth !== undefined) {
    styleObject.borderWidth = data.borderWidth;
  }

  return (
    <div className="pipeunit-node" style={styleObject}>
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{ top: 25 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 35 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 45 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="c"
        style={{ top: 15 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="d"
        style={{ top: 25 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="e"
        style={{ top: 35 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="f"
        style={{ top: 45 }}
      />
    </div>
  );
}

export function DiagramUtils() {
  const nodes = [
    {
      id: "PC",
      data: { label: "PC" },
      position: { x: 20, y: 300.5 },
      style: {
        height: 70 + "px",
        width: 70 + "px",
        display: "block",
        textAlign: "center",
        color: "black",
        fontSize: 12 + "px",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "PCAuxNode",
      position: { x: 980, y: 10 },
      data: {},
      type: "pcAuxNode",
    },
    {
      id: "PCTopAuxNode",
      position: { x: 12, y: 10 },
      data: {},
      type: "pcTopAuxNode",
    },
    {
      id: "PCounterFork",
      position: { x: 101, y: 333 },
      data: {},
      type: "forkNode",
    },
    {
      id: "PCAddFork",
      position: { x: 99.5, y: 117.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "PC4",
      data: { label: "4" },
      position: { x: 120, y: 67 },
      style: {
        height: 20 + "px",
        width: 10 + "px",
        padding: 0,
        border: 0,
        paddingRight: 1 + "em",
      },
      type: "input",
      sourcePosition: "right",
    },
    {
      id: "AddPC",
      data: { label: "Add" },
      position: { x: 160, y: 37 },
      type: "addNode",
    },
    {
      id: "ShiftLeft",
      data: { label: "Shift Left" },
      position: { x: 640, y: 160 },
      style: {
        height: 30 + "px",
        width: 40 + "px",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "AddBranch",
      data: { label: "Add" },
      position: { x: 700, y: 135 },
      type: "addNode",
    },
    {
      id: "MuxTop",
      position: { x: 945, y: 105 },
      data: {},
      type: "muxNode",
    },
    {
      id: "And",
      position: { x: 810, y: 70 },
      data: { label: "And" },
      type: "andNode",
    },
    {
      id: "Or",
      position: { x: 880, y: 30 },
      data: { label: "Or" },
      type: "andNode",
    },
    {
      id: "InsMem",
      data: { label: "Instruction Memory" },
      position: { x: 140, y: 273 },
      style: { height: 125 + "px", width: 100 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "InsDistributor",
      position: { x: 276, y: 295 },
      style: { background: "#b1b1b7" },
      data: {},
      type: "distributorNode",
    },
    {
      id: "InsFork",
      position: { x: 352, y: 387.5 },
      data: {},
      type: "forkNode",
    },
    {
      id: "MuxIns",
      position: { x: 401, y: 315 },
      data: {},
      type: "muxNode",
    },
    {
      id: "RegBank",
      data: { label: "Register Bank" },
      position: { x: 450, y: 285 },
      type: "regBankNode",
    },
    {
      id: "SignExtendDist",
      position: { x: 402, y: 467.5 },
      data: {},
      type: "signExtendDist",
    },
    {
      id: "SignExtend",
      data: { label: "Sign Extend" },
      position: { x: 470, y: 445 },
      style: { height: 50 + "px", width: 50 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "RegMuxFork1",
      position: { x: 575, y: 382.5 },
      data: {},
      type: "forkNode",
    },
    {
      id: "RegMuxFork2",
      position: { x: 600, y: 402.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "Control",
      data: { label: "Control" },
      position: { x: 298, y: 151 },
      type: "controlNode",
    },
    {
      id: "MuxReg",
      position: { x: 653, y: 365 },
      data: {},
      type: "muxNode",
    },
    {
      id: "ALUControl",
      data: { label: "ALU Control" },
      position: { x: 660, y: 475 },
      type: "aluControlNode",
    },
    {
      id: "ALU",
      data: { label: "ALU" },
      position: { x: 710, y: 270 },
      type: "aluNode",
    },
    {
      id: "ALUFork",
      position: { x: 790, y: 327.5 },
      data: {},
      type: "signExtendDist",
    },
    {
      id: "DataMemory",
      data: { label: "Data Memory" },
      position: { x: 830, y: 300 },
      type: "dataMemoryNode",
    },
    {
      id: "ControlMemAuxNode",
      position: { x: 810, y: 430 },
      data: {},
      type: "controlMemAuxNode",
    },
    {
      id: "MuxMem",
      position: { x: 943, y: 405 },
      data: {},
      type: "muxNode",
    },
    {
      id: "MemAuxNode",
      position: { x: 970, y: 530 },
      data: {},
      type: "memAuxNode",
    },
    {
      id: "MemLeftAuxNode",
      position: { x: 430, y: 530 },
      data: {},
      type: "memLeftAuxNode",
    },
  ];

  const edges = [
    {
      id: "PC/pcForkInput",
      source: "PC",
      target: "PCounterFork",
      type: "smoothstep",
    },
    {
      id: "pcForkOutput1/pcAddForkInput",
      source: "PCounterFork",
      target: "PCAddFork",
      type: "smoothstep",
      sourceHandle: "a",
    },
    {
      id: "pcForkOutput2/address",
      source: "PCounterFork",
      target: "InsMem",
      type: "smoothstep",
      sourceHandle: "b",
    },
    {
      id: "pcAddForkOutput1/pcValue",
      source: "PCAddFork",
      sourceHandle: "a",
      target: "AddPC",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "ePC4",
      source: "PC4",
      target: "AddPC",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "pcAddForkOutput2/addBranchValue1",
      source: "PCAddFork",
      sourceHandle: "b",
      target: "AddBranch",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "addedPCValue/topMuxValue1",
      source: "AddPC",
      target: "MuxTop",
      targetHandle: "a",
      type: "smoothstep",
    },

    {
      id: "addBranchResult/topMuxValue2",
      source: "AddBranch",
      targetHandle: "b",
      target: "MuxTop",
      type: "smoothstep",
    },
    {
      id: "topMuxResult/updatedPC/Aux1",
      source: "MuxTop",
      target: "PCAuxNode",
      type: "smoothstep",
    },
    {
      id: "topMuxResult/updatedPC/Aux2",
      source: "PCAuxNode",
      target: "PCTopAuxNode",
      type: "smoothstep",
    },
    {
      id: "topMuxResult/updatedPC",
      source: "PCTopAuxNode",
      target: "PC",
      type: "smoothstep",
    },
    {
      id: "dist3121/controlInput",
      source: "InsDistributor",
      sourceHandle: "a",
      target: "Control",
      type: "smoothstep",
    },
    {
      id: "instruction/distributorInput",
      source: "InsMem",
      target: "InsDistributor",
      type: "smoothstep",
    },
    {
      id: "dist95/readReg1",
      source: "InsDistributor",
      sourceHandle: "b",
      targetHandle: "a",
      target: "RegBank",
      type: "smoothstep",
    },
    {
      id: "dist2016/insMuxValue1",
      source: "InsDistributor",
      sourceHandle: "c",
      targetHandle: "a",
      target: "MuxIns",
      type: "smoothstep",
    },
    {
      id: "dist40/insForkInput",
      source: "InsDistributor",
      sourceHandle: "d",
      target: "InsFork",
      type: "smoothstep",
    },
    {
      id: "dist310/signExtendDistInput",
      source: "InsDistributor",
      sourceHandle: "e",
      target: "SignExtendDist",
      type: "smoothstep",
    },
    {
      id: "insForkOutput1/insMuxValue2",
      source: "InsFork",
      sourceHandle: "a",
      targetHandle: "b",
      target: "MuxIns",
      type: "smoothstep",
    },
    {
      id: "insForkOutput2/writeReg",
      source: "InsFork",
      sourceHandle: "b",
      targetHandle: "c",
      target: "RegBank",
      type: "smoothstep",
    },
    {
      id: "signextend310/signExtendIn",
      source: "SignExtendDist",
      sourceHandle: "a",
      target: "SignExtend",
      type: "smoothstep",
    },
    {
      id: "signextend3121/opcode",
      source: "SignExtendDist",
      sourceHandle: "b",
      target: "ALUControl",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "signExtendResult/regMuxFork2Input",
      source: "SignExtend",
      target: "RegMuxFork2",
      type: "smoothstep",
    },
    {
      id: "regMuxFork2Output1/regMuxInput2",
      source: "RegMuxFork2",
      sourceHandle: "b",
      target: "MuxReg",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "regMuxFork1Output1/regMuxInput1",
      source: "RegMuxFork1",
      sourceHandle: "b",
      target: "MuxReg",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "regMuxFork1Output2/writeData",
      source: "RegMuxFork1",
      sourceHandle: "a",
      target: "DataMemory",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "regMuxFork2Output2/shiftLeftInput",
      source: "RegMuxFork2",
      sourceHandle: "a",
      target: "ShiftLeft",
      type: "smoothstep",
    },
    {
      id: "shiftLeftOutput/addBranchValue2",
      source: "ShiftLeft",
      target: "AddBranch",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "readData1/ALUInput1",
      source: "RegBank",
      sourceHandle: "a",
      targetHandle: "a",
      target: "ALU",
      type: "smoothstep",
    },
    {
      id: "readData2/regMuxFork1Input",
      source: "RegBank",
      sourceHandle: "b",
      target: "RegMuxFork1",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "regMuxResult/ALUInput2",
      source: "MuxReg",
      targetHandle: "b",
      target: "ALU",
      type: "smoothstep",
    },
    {
      id: "aluResult/aluForkInput",
      source: "ALU",
      sourceHandle: "b",
      target: "ALUFork",
      type: "smoothstep",
    },
    {
      id: "aluForkOutput1/memoryAddress",
      source: "ALUFork",
      sourceHandle: "a",
      target: "DataMemory",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "aluForkOutput2/muxMemValue2",
      source: "ALUFork",
      sourceHandle: "b",
      target: "MuxMem",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "readData/muxMemValue1",
      source: "DataMemory",
      target: "MuxMem",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "muxMemResult/writeData/Aux1",
      source: "MuxMem",
      target: "MemAuxNode",
      type: "smoothstep",
    },
    {
      id: "muxMemResult/writeData/Aux2",
      source: "MemAuxNode",
      target: "MemLeftAuxNode",
      type: "smoothstep",
    },
    {
      id: "muxMemResult/writeData",
      source: "MemLeftAuxNode",
      target: "RegBank",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e32Control",
      source: "Control",
      sourceHandle: "a",
      targetHandle: "c",
      target: "MuxIns",
      type: "smoothstep",
    },
    {
      id: "insMuxResult/readReg2",
      source: "MuxIns",
      target: "RegBank",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e34Control",
      source: "Control",
      sourceHandle: "c",
      target: "And",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e35Control",
      source: "And",
      targetHandle: "b",
      target: "Or",
      type: "smoothstep",
    },
    {
      id: "e352Control",
      source: "Control",
      sourceHandle: "b",
      target: "Or",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e353Control",
      source: "Or",
      targetHandle: "c",
      target: "MuxTop",
      type: "smoothstep",
    },
    {
      id: "e36ControlAux",
      source: "Control",
      sourceHandle: "d",
      target: "ControlMemAuxNode",
      type: "smoothstep",
    },
    {
      id: "e36Control",
      source: "ControlMemAuxNode",
      target: "DataMemory",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e37Control",
      source: "Control",
      sourceHandle: "e",
      target: "MuxMem",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e38Control",
      source: "Control",
      sourceHandle: "f",
      target: "ALUControl",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e39Control",
      source: "Control",
      sourceHandle: "g",
      target: "ALUControl",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e40Control",
      source: "ALUControl",
      target: "ALU",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e41Control",
      source: "ALU",
      sourceHandle: "a",
      target: "And",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e42Control",
      source: "Control",
      sourceHandle: "h",
      target: "DataMemory",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e43Control",
      source: "Control",
      sourceHandle: "i",
      target: "MuxReg",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e44Control",
      source: "Control",
      sourceHandle: "j",
      targetHandle: "f",
      target: "RegBank",
      type: "smoothstep",
    },
  ];

  const pipelineNodes = [
    {
      id: "IFID",
      data: { label: "IF/ID" },
      position: { x: 279, y: 137 },
      type: "ifidNode",
    },
    {
      id: "IDEX",
      data: { label: "ID/EX" },
      position: { x: 567, y: 137 },
      type: "idexNode",
    },
    {
      id: "EXMEM",
      data: { label: "EX/MEM" },
      position: { x: 871, y: 137 },
      type: "exmemNode",
    },
    {
      id: "MEMWB",
      data: { label: "MEM/WB" },
      position: { x: 1075, y: 137 },
      type: "memwbNode",
    },
    {
      id: "PC",
      data: { label: "PC" },
      position: { x: 49, y: 300.5 },
      type: "pipePCNode",
    },
    {
      id: "PCAuxNode",
      position: { x: 227, y: 115 },
      data: {},
      type: "pcAuxNode",
    },
    {
      id: "PCTopAuxNode",
      position: { x: 8, y: 115 },
      data: {},
      type: "pcTopAuxNode",
    },
    {
      id: "PCounterFork",
      position: { x: 127, y: 332 },
      data: {},
      type: "forkNode",
    },
    {
      id: "PCAddFork",
      position: { x: 128, y: 254.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "HazardIDEXFork",
      position: { x: 606, y: 625 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "ForwardEXMEMFork",
      position: { x: 916, y: 625.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "ForwardMEMWBFork",
      position: { x: 1119, y: 641.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "AddPC",
      data: { label: "Add" },
      position: { x: 150, y: 122 },
      type: "addNode",
    },
    {
      id: "ShiftLeft",
      data: { label: "Shift Left" },
      position: { x: 717, y: 280 },
      style: { height: 30 + "px", width: 30 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "AddBranch",
      data: { label: "Add" },
      position: { x: 793, y: 212 },
      type: "addNode",
    },
    {
      id: "MuxTop",
      position: { x: 19, y: 305 },
      data: {},
      type: "muxNode",
    },
    {
      id: "PipelineAnd",
      position: { x: 953, y: 160 },
      data: { label: "And" },
      type: "andNode",
    },
    {
      id: "PipelineOr",
      position: { x: 1010, y: 120 },
      data: { label: "Or" },
      type: "andNode",
    },
    {
      id: "PCOrAuxNode2",
      position: { x: 1065, y: 100 },
      data: {},
      type: "pcAuxNode",
    },
    {
      id: "PCOrAuxNode",
      position: { x: 28, y: 120 },
      data: {},
      type: "pcTopAuxNode",
    },
    {
      id: "InsMem",
      data: { label: "Instruction Memory" },
      position: { x: 140, y: 271 },
      style: { height: 125 + "px", width: 100 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "InsDistributor",
      position: { x: 332, y: 284 },
      data: {},
      style: { background: "#b1b1b7" },
      type: "pipeDistNode",
    },
    {
      id: "MuxIns",
      position: { x: 370, y: 339 },
      data: {},
      type: "muxNode",
    },
    {
      id: "RmFork",
      position: { x: 396, y: 366 },
      data: {},
      type: "forkNodeThree",
    },
    {
      id: "RnFork",
      position: { x: 360, y: 326.5 },
      data: {},
      type: "forkNodeThree",
    },
    {
      id: "PipelineRegBank",
      data: { label: "Register Bank" },
      position: { x: 440, y: 309 },
      type: "regBankNode",
    },
    {
      id: "PipeSignExtendDist",
      position: { x: 328, y: 488.5 },
      data: {},
      type: "pipesignExtendDist",
    },
    {
      id: "SignExtend",
      data: { label: "Sign Extend" },
      position: { x: 413, y: 466 },
      style: { height: 50 + "px", width: 50 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ReadData2Fork",
      position: { x: 612, y: 490 },
      data: {},
      type: "forkNode",
    },
    {
      id: "RegMemFork1",
      position: { x: 620, y: 462.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "HazardDetection",
      data: { label: "Hazard Detection" },
      position: { x: 405, y: 28 },
      type: "hazardDetectionNode",
    },
    {
      id: "RegMuxFork2",
      position: { x: 700, y: 436.5 },
      data: {},
      type: "forkNodeSecond",
    },
    {
      id: "ForwardingUnit",
      data: { label: "Forwarding Unit" },
      position: { x: 750, y: 559 },
      type: "forwardingUnitNode",
    },
    {
      id: "PipelineMuxReg",
      position: { x: 723, y: 397 },
      data: {},
      type: "muxNode",
    },
    {
      id: "Control",
      data: { label: "Control" },
      position: { x: 373, y: 128.5 },
      type: "pipeControlNode",
    },
    {
      id: "MuxControl",
      position: { x: 514, y: 133.5 },
      data: {},
      type: "muxNode",
    },
    {
      id: "ControlEXIDEX",
      data: { label: "EX" },
      position: { x: 567, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlMIDEX",
      data: { label: "M" },
      position: { x: 567, y: 78 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlWBIDEX",
      data: { label: "WB" },
      position: { x: 567, y: 48 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlMEXMEM",
      data: { label: "M" },
      position: { x: 871, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlWBEXMEM",
      data: { label: "WB" },
      position: { x: 871, y: 78 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlWBMEMWB",
      data: { label: "WB" },
      position: { x: 1075, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlLineFork",
      position: { x: 832, y: 104 },
      data: {},
      type: "forkNode",
    },
    {
      id: "ControlLineFork2",
      position: { x: 937, y: 91 },
      data: {},
      type: "forkNode",
    },
    {
      id: "PipeMux1",
      position: { x: 641, y: 345 },
      data: {},
      type: "pipeMuxNode",
    },
    {
      id: "PipeMux2",
      position: { x: 675, y: 434 },
      data: {},
      type: "pipeMuxNode",
    },
    {
      id: "PipelineALUControl",
      data: { label: "ALU Control" },
      position: { x: 751, y: 476 },
      type: "aluControlNode",
    },
    {
      id: "ALU",
      data: { label: "ALU" },
      position: { x: 784, y: 307 },
      type: "aluNode",
    },
    {
      id: "ALUFork",
      position: { x: 943, y: 435 },
      data: {},
      type: "signExtendDist",
    },
    {
      id: "PipelineDataMemory",
      data: { label: "Data Memory" },
      position: { x: 963, y: 407 },
      type: "dataMemoryNode",
    },
    {
      id: "PipelineMuxMem",
      position: { x: 1150, y: 417 },
      data: {},
      type: "muxNode",
    },
    {
      id: "MemAuxNode",
      position: { x: 1180, y: 651 },
      data: {},
      type: "memAuxNode",
    },
    {
      id: "MemLeftAuxNode",
      position: { x: 376, y: 651 },
      data: {},
      type: "exMemAuxNode",
    },
    {
      id: "MemMiddleAuxNode",
      position: { x: 620, y: 650 },
      data: {},
      type: "forkNode",
    },
    {
      id: "ALUForkAuxNode",
      position: { x: 943, y: 640 },
      data: {},
      type: "memAuxNode",
    },
    {
      id: "ALUForwardMuxFork",
      position: { x: 629, y: 638 },
      data: {},
      type: "forkNode",
    },
    {
      id: "PCEXMEMAuxNode",
      position: { x: 910, y: 24 },
      data: {},
      type: "pcAuxNode",
    },
    {
      id: "PCEXMEMAuxLeftNode",
      position: { x: 3, y: 24 },
      data: {},
      type: "pcTopAuxNode",
    },
    {
      id: "MEMWBAuxLeftNode",
      position: { x: 392, y: 644.5 },
      data: {},
      type: "exMemAuxNode",
    },
    {
      id: "WBAuxNode",
      position: { x: 1124, y: 54 },
      data: {},
      type: "pcAuxNode",
    },
    {
      id: "WBLeftAuxNode",
      position: { x: 505, y: 54 },
      data: {},
      type: "pcTopAuxNode",
    },
    {
      id: "WBControlAuxNode",
      position: { x: 1137, y: 603 },
      data: {},
      type: "memAuxNode",
    },
  ];

  const pipelineEdges = [
    {
      id: "e1",
      source: "PC",
      target: "PCounterFork",
      type: "smoothstep",
    },
    {
      id: "e2",
      source: "PCounterFork",
      target: "PCAddFork",
      type: "smoothstep",
      sourceHandle: "a",
    },
    {
      id: "e3",
      source: "PCounterFork",
      target: "InsMem",
      type: "smoothstep",
      sourceHandle: "b",
    },
    {
      id: "e3Pipe",
      source: "InsMem",
      target: "IFID",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e4",
      source: "PCAddFork",
      sourceHandle: "a",
      target: "AddPC",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e5",
      source: "PCAddFork",
      sourceHandle: "b",
      target: "IFID",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e6",
      source: "AddPC",
      target: "PCAuxNode",
      type: "smoothstep",
    },
    {
      id: "e7",
      source: "AddBranch",
      targetHandle: "a",
      target: "EXMEM",
      type: "smoothstep",
    },
    {
      id: "e8",
      source: "MuxTop",
      target: "PC",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e8Aux",
      source: "PCAuxNode",
      target: "PCTopAuxNode",
      type: "smoothstep",
    },
    {
      id: "e8Aux2",
      source: "PCTopAuxNode",
      target: "MuxTop",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e9Ins",
      source: "IFID",
      sourceHandle: "b",
      target: "InsDistributor",
      type: "smoothstep",
    },
    {
      id: "e9",
      source: "InsDistributor",
      sourceHandle: "a",
      target: "Control",
      type: "smoothstep",
    },
    {
      id: "e93",
      source: "RnFork",
      sourceHandle: "c",
      target: "HazardDetection",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e94",
      source: "RmFork",
      sourceHandle: "c",
      target: "HazardDetection",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e9c",
      source: "Control",
      target: "MuxControl",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e11",
      source: "InsDistributor",
      sourceHandle: "b",
      targetHandle: "c",
      target: "MuxIns",
      type: "smoothstep",
    },
    {
      id: "e10",
      source: "InsDistributor",
      sourceHandle: "c",
      target: "RnFork",
      type: "smoothstep",
    },
    {
      id: "e101",
      source: "RnFork",
      sourceHandle: "b",
      targetHandle: "a",
      target: "PipelineRegBank",
      type: "smoothstep",
    },
    {
      id: "e1015",
      source: "RnFork",
      sourceHandle: "a",
      targetHandle: "f",
      target: "IDEX",
      type: "smoothstep",
    },
    {
      id: "e12",
      source: "InsDistributor",
      sourceHandle: "d",
      target: "MuxIns",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e13P",
      source: "InsDistributor",
      sourceHandle: "e",
      target: "MuxIns",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e13",
      source: "InsDistributor",
      sourceHandle: "f",
      target: "PipeSignExtendDist",
      type: "smoothstep",
    },
    {
      id: "e16",
      source: "PipeSignExtendDist",
      sourceHandle: "a",
      target: "SignExtend",
      type: "smoothstep",
    },
    {
      id: "e17",
      source: "PipeSignExtendDist",
      sourceHandle: "b",
      target: "IDEX",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e172",
      source: "PipeSignExtendDist",
      sourceHandle: "c",
      target: "IDEX",
      targetHandle: "h",
      type: "smoothstep",
    },
    {
      id: "e18",
      source: "SignExtend",
      target: "IDEX",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e20",
      source: "PipeMux2",
      target: "PipelineMuxReg",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e21",
      source: "EXMEM",
      sourceHandle: "d",
      target: "PipelineDataMemory",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e22",
      source: "RegMuxFork2",
      sourceHandle: "a",
      target: "ShiftLeft",
      type: "smoothstep",
    },
    {
      id: "e19",
      source: "RegMuxFork2",
      sourceHandle: "b",
      target: "PipelineMuxReg",
      targetHandle: "b",
      type: "smoothstep",
    },

    {
      id: "e23",
      source: "ShiftLeft",
      target: "AddBranch",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e24",
      source: "PipelineRegBank",
      sourceHandle: "a",
      targetHandle: "b",
      target: "IDEX",
      type: "smoothstep",
    },
    {
      id: "e25",
      source: "PipelineRegBank",
      sourceHandle: "b",
      target: "IDEX",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e22P2",
      source: "IDEX",
      sourceHandle: "b",
      targetHandle: "a",
      target: "PipeMux1",
      type: "smoothstep",
    },
    {
      id: "e22P",
      source: "PipeMux1",
      targetHandle: "a",
      target: "ALU",
      type: "smoothstep",
    },
    {
      id: "e26",
      source: "PipelineMuxReg",
      targetHandle: "b",
      target: "ALU",
      type: "smoothstep",
    },
    {
      id: "e27",
      source: "ALU",
      sourceHandle: "b",
      target: "EXMEM",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e23P",
      source: "EXMEM",
      sourceHandle: "c",
      target: "ALUFork",
      type: "smoothstep",
    },
    {
      id: "e28",
      source: "ALUFork",
      sourceHandle: "a",
      target: "PipelineDataMemory",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e29",
      source: "ALUFork",
      sourceHandle: "b",
      target: "MEMWB",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e291",
      source: "ALUFork",
      sourceHandle: "b",
      target: "ALUForkAuxNode",
      type: "smoothstep",
    },
    {
      id: "e292",
      source: "ALUForkAuxNode",
      target: "ALUForwardMuxFork",
      type: "smoothstep",
    },
    {
      id: "e293",
      source: "ALUForwardMuxFork",
      sourceHandle: "a",
      target: "PipeMux1",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e294",
      source: "ALUForwardMuxFork",
      sourceHandle: "b",
      target: "PipeMux2",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e30",
      source: "PipelineDataMemory",
      target: "MEMWB",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e30P",
      source: "MEMWB",
      sourceHandle: "a",
      target: "PipelineMuxMem",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e31P",
      source: "MEMWB",
      sourceHandle: "b",
      target: "PipelineMuxMem",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e31Aux",
      source: "PipelineMuxMem",
      target: "MemAuxNode",
      type: "smoothstep",
    },
    {
      id: "e31Aux1",
      source: "MemAuxNode",
      target: "MemMiddleAuxNode",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e311",
      source: "MemMiddleAuxNode",
      sourceHandle: "a",
      target: "RegMemFork1",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e312",
      source: "RegMemFork1",
      sourceHandle: "a",
      target: "PipeMux1",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e313",
      source: "RegMemFork1",
      sourceHandle: "b",
      target: "PipeMux2",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e31Aux2",
      source: "MemMiddleAuxNode",
      sourceHandle: "b",
      target: "MemLeftAuxNode",
      type: "smoothstep",
    },
    {
      id: "e31",
      source: "MemLeftAuxNode",
      target: "PipelineRegBank",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e33",
      source: "MuxIns",
      target: "RmFork",
      type: "smoothstep",
    },
    {
      id: "e331",
      source: "RmFork",
      sourceHandle: "b",
      target: "PipelineRegBank",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e332",
      source: "RmFork",
      sourceHandle: "a",
      target: "IDEX",
      targetHandle: "g",
      type: "smoothstep",
    },
    {
      id: "e35",
      source: "PipelineAnd",
      targetHandle: "c",
      target: "PipelineOr",
      targetHandle: "b",
      style: { stroke: "#00ADEE" },
      type: "smoothstep",
    },
    {
      id: "e352Aux",
      source: "PipelineOr",
      target: "PCOrAuxNode2",
      style: { stroke: "#00ADEE" },
      type: "smoothstep",
    },
    {
      id: "e352Aux2",
      source: "PCOrAuxNode2",
      targetHandle: "c",
      target: "MuxTop",
      style: { stroke: "#00ADEE" },
      type: "smoothstep",
    },
    {
      id: "e40",
      source: "PipelineALUControl",
      target: "ALU",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e41P",
      source: "ALU",
      sourceHandle: "a",
      target: "EXMEM",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e41",
      source: "EXMEM",
      sourceHandle: "b",
      target: "PipelineAnd",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e42Aux",
      source: "EXMEM",
      sourceHandle: "a",
      target: "PCEXMEMAuxNode",
      type: "smoothstep",
    },
    {
      id: "e42Aux2",
      source: "PCEXMEMAuxNode",
      target: "PCEXMEMAuxLeftNode",
      type: "smoothstep",
    },
    {
      id: "e42Aux3",
      source: "PCEXMEMAuxLeftNode",
      target: "MuxTop",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e43",
      source: "IFID",
      sourceHandle: "a",
      target: "IDEX",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e44",
      source: "IDEX",
      sourceHandle: "a",
      targetHandle: "a",
      target: "AddBranch",
      type: "smoothstep",
    },
    {
      id: "e45",
      source: "IDEX",
      sourceHandle: "d",
      target: "RegMuxFork2",
      type: "smoothstep",
    },
    {
      id: "e453",
      source: "IDEX",
      sourceHandle: "f",
      target: "ForwardingUnit",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e46P",
      source: "IDEX",
      sourceHandle: "c",
      target: "ReadData2Fork",
      type: "smoothstep",
    },
    {
      id: "e461",
      source: "ReadData2Fork",
      sourceHandle: "a",
      target: "PipeMux2",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e462",
      source: "ReadData2Fork",
      sourceHandle: "b",
      target: "EXMEM",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e47",
      source: "IDEX",
      sourceHandle: "e",
      target: "PipelineALUControl",
      type: "smoothstep",
    },
    {
      id: "e473",
      source: "IDEX",
      sourceHandle: "g",
      target: "ForwardingUnit",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e481",
      source: "IDEX",
      sourceHandle: "h",
      target: "HazardIDEXFork",
      type: "smoothstep",
    },
    {
      id: "e482",
      source: "HazardIDEXFork",
      sourceHandle: "a",
      target: "HazardDetection",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e48",
      source: "HazardIDEXFork",
      sourceHandle: "b",
      target: "EXMEM",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e49",
      source: "EXMEM",
      sourceHandle: "e",
      target: "ForwardEXMEMFork",
      type: "smoothstep",
    },

    {
      id: "e491",
      source: "ForwardEXMEMFork",
      sourceHandle: "b",
      target: "MEMWB",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e50",
      source: "HazardDetection",
      sourceHandle: "a",
      target: "PC",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e51",
      source: "HazardDetection",
      sourceHandle: "b",
      target: "IFID",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e52",
      source: "HazardDetection",
      sourceHandle: "c",
      target: "MuxControl",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e53",
      source: "ControlLineFork",
      sourceHandle: "a",
      target: "HazardDetection",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e54",
      source: "ControlLineFork",
      sourceHandle: "b",
      target: "ControlMEXMEM",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e55",
      source: "ControlMIDEX",
      target: "ControlLineFork",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e56",
      source: "ControlWBIDEX",
      target: "ControlWBEXMEM",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e57",
      source: "MuxControl",
      target: "ControlWBIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e58",
      source: "MuxControl",
      target: "ControlMIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e59",
      source: "MuxControl",
      target: "ControlEXIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e591",
      source: "ControlEXIDEX",
      target: "PipelineMuxReg",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e592",
      source: "ControlEXIDEX",
      target: "PipelineALUControl",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e60",
      source: "ControlWBEXMEM",
      target: "ControlLineFork2",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e601",
      source: "ControlMEXMEM",
      target: "PipelineAnd",
      targetHandle: "a",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e6015",
      source: "ControlMEXMEM",
      target: "PipelineOr",
      targetHandle: "a",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e602",
      source: "ControlMEXMEM",
      target: "PipelineDataMemory",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e603",
      source: "ControlMEXMEM",
      target: "PipelineDataMemory",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e61",
      source: "ControlLineFork2",
      sourceHandle: "b",
      target: "ControlWBMEMWB",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e62",
      source: "ControlLineFork2",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e492",
      source: "ForwardEXMEMFork",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e63",
      source: "ForwardingUnit",
      sourceHandle: "a",
      target: "PipeMux1",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e64",
      source: "ForwardingUnit",
      sourceHandle: "b",
      target: "PipeMux2",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e65aux",
      source: "ForwardMEMWBFork",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e65aux2",
      source: "ForwardMEMWBFork",
      sourceHandle: "b",
      target: "MEMWBAuxLeftNode",
      type: "smoothstep",
    },
    {
      id: "e65aux3",
      source: "MEMWBAuxLeftNode",
      target: "PipelineRegBank",
      targetHandle: "c",
      type: "smoothstep",
    },

    {
      id: "e65",
      source: "MEMWB",
      sourceHandle: "c",
      target: "ForwardMEMWBFork",
      type: "smoothstep",
    },
    {
      id: "e66Aux",
      source: "ControlWBMEMWB",
      target: "WBControlAuxNode",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e66",
      source: "WBControlAuxNode",
      target: "ForwardingUnit",
      targetHandle: "f",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e67Aux",
      source: "ControlWBMEMWB",
      target: "WBAuxNode",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e67Aux2",
      source: "WBAuxNode",
      target: "WBLeftAuxNode",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e67",
      source: "WBLeftAuxNode",
      target: "PipelineRegBank",
      targetHandle: "f",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e68",
      source: "ControlWBMEMWB",
      target: "PipelineMuxMem",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
  ];

  const customNodeTypes = {
    forkNode: ForkNode,
    forkNodeSecond: ForkNodeSecond,
    distributorNode: DistributorNode,
    muxNode: MuxNode,
    regBankNode: RegBankNode,
    signExtendDist: SignExtendDist,
    pipesignExtendDist: PipeSignExtendDist,
    aluControlNode: ALUControlNode,
    controlNode: ControlNode,
    aluNode: ALUNode,
    andNode: AndNode,
    addNode: AddNode,
    dataMemoryNode: DataMemoryNode,
    pcAuxNode: PCAuxNode,
    pcTopAuxNode: PCTopAuxNode,
    memAuxNode: MemAuxNode,
    memLeftAuxNode: MemLeftAuxNode,
    controlMemAuxNode: ControlMemAuxNode,
    ifidNode: IFIDNode,
    idexNode: IDEXNode,
    exmemNode: EXMEMNode,
    memwbNode: MEMWBNode,
    pipeDistNode: PipeDistNode,
    pipeControlNode: PipeControlNode,
    hazardDetectionNode: HazardDetectionNode,
    forwardingUnitNode: ForwardingUnitNode,
    pipeMuxNode: PipeMuxNode,
    pipePCNode: PipePCNode,
    exMemAuxNode: EXMEMAuxNode,
    forkNodeThree: ForkNodeThree,
  };

  return { nodes, edges, pipelineNodes, pipelineEdges, customNodeTypes };
}

export default DiagramUtils;
