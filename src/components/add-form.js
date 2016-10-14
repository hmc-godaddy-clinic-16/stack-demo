import React from 'react';

class AddForm extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      text: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange (event) {
    this.setState({text: event.target.value});
  }

  onClick () {
    if (this.state.text.length > 0) {
      this.props.onAdd(this.state.text);
      this.setState({text: ""});
    }
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange}/>
        <input type="submit" value="add" onClick={this.onClick}/>
      </div>
    )
  }
}

export default AddForm;
