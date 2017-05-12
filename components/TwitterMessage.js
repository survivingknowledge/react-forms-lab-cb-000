import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.maxChars = this.maxChars.bind(this);
  }

  maxChars(event){
      this.setState({
        value: event.target.value,
      });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.maxChars}/>
        <strong>{this.props.maxChars - this.state.value.length} characters remaining</strong>
      </div>
    );
  }
}
