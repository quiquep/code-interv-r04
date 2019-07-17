import React, { Component } from "react";

class FruitRowComponent extends Component {
  render() {
    return;
    <tr>
      <td>{this.props.fruit.id}</td>
      <td>{this.props.fruit.name}</td>
      <td>
        <UpDownComponent model={this.props.fruit} />
      </td>
    </tr>;
  }
}

export default FruitRowComponent;
p;
p;
p;
p;
