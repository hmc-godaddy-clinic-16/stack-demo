import React from 'react';
import {connect} from 'react-redux';
import Hello from "./hello";
import AddForm  from "./add-form";
import {addFriend} from "../actions/friends";

export class App extends React.Component {
  constructor () {
    super();
    this.state = {
      special: false
    };

    this.onClick = this.onClick.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onClick () {
    this.setState({special: !this.state.special});
  }

  onAdd (text) {
    this.props.add(text);
  }

  render () {
    return (
      <div>
        <Hello name={this.props.name} special={this.state.special} onClick={this.onClick}/>
        <AddForm onAdd={this.onAdd}/>
      </div>
    )
  }
}

App.propTypes = {
  add: React.PropTypes.func.isRequired,
  name: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

function mapStateToProps (state) {
  return {
    name: state.friends
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add: (text) => {
      return dispatch(addFriend(text))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
