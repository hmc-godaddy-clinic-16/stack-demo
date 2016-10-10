import React from "react";

class Hello extends React.Component {
  render () {
    let decorator = "";
    if (this.props.special) {
      decorator = "!!!";
    }

    let children = this.props.name.map(
      (name) => {
        return <div>Hello {name}{decorator}</div>
      });

    return (
      <div>
        { children }
      </div>
    );
  }
}

export default Hello;
