const Component = require("./Component.js");
const Data = require("./Data.js");

class PipelineRegister extends Component {
  constructor(id, json) {
    super(id, json);

    super.isSynchronous = true;

    //Inputs

    //Outputs
  }

  execute() {
    // do something
  }

  executeClockTransition() {
    // do something
  }
}

module.exports = PipelineRegister;
