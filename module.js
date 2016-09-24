import React from "react";

class HMU extends React.Component {
  render() {
    let decorator = "";
    if (this.props.special) {
        decorator = "!!!";
    }
    return (
      <div> 
      {
        this.props.name.map( (name) => {
          return <div>Hello {name}{decorator}</div>
        })
      }
      </div>
    );
  }
}

export default HMU;