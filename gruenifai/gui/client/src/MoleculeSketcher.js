import React, { Component } from "react";

class MoleculeSketcher extends Component {
  constructor(props) {
    super(props);
  }

  changeCallback = () => {
    console.log(this.jsmeApplet);
    const molFile = this.jsmeApplet.molFile(); //atom that are colored are numbered
    this.props.onStructureChange(molFile);
  };
  componentDidMount() {
    const interval = setInterval(() => {
      const { JSApplet } = window;
      if (JSApplet) {
        clearInterval(interval);
        this.jsmeApplet = new JSApplet.JSME(
          this.props.divId,
          `${this.props.width}px`,
          "600px"
        );
        window.jsmeChange = this.changeCallback.bind(this);
        this.jsmeApplet.setNotifyStructuralChangeJSfunction("jsmeChange");
      }
    }, 500);
  }

  render() {
    return <div id={this.props.divId}></div>;
  }
}

export default MoleculeSketcher;
