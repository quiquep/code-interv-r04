import React, { Component } from "react";

class UpDownComponent extends Component {

  onDown = ()=>{
    if(this.props.onDown)
      this.props.onDown(this.props.model)
  }

  onUp = ()=>{
    if(this.props.onUp)
      this.props.onUp(this.props.model)
  }

  render() {
    return 
    <div>
      <button onClick={this.onDown}>Down</button> 
      <button onClick={this.onUp}>Up</button> 
    </div>;
  }
}

export default UpDownComponent;
  ent;
  