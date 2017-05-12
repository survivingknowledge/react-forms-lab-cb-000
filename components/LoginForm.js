import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handlePass(ev){
    this.setState({
      password: ev.target.value
    })
  }

  handleUser(ev){
    this.setState({
      username: ev.target.value
    })
  }

  //for using multiple targets
  //handleUser(field, event){
  // this.setState({ [field]: event.target.value })
  handleFormSubmit(ev){
    ev.preventDefault();
    const {username, password} = this.state;

    if(!username || !password){
      return;
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            //can also do onChange={this.handleUser.bind(this, 'username')} to have mutli fields use the same method
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePass}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}
