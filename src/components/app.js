import React from 'react';
import {connect} from 'react-redux';
import Hello from "./hello.js";

class App extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      special: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.setState({special: !this.state.special});
  }

  render () {
    return <Hello name={this.props.name} special={this.state.special} onClick={this.onClick}/>
  }

}

function mapStateToProps (state) {
  return {
    name: state.friends
  }
}

export default connect(mapStateToProps)(App);
