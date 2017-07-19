import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = {"user": {"username":"Guest", "password":"guestpassword"}};
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


render() {
    let {formType, login} = this.props;
    let value;

    if(formType === 'login'){
      value = "Sign In";
    } else {
      value = "Create Account";
    }


    return (
      <div className="login-form-container">
        <GreetingContainer location={this.props.location}/>
        <h3>{value}</h3>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value={value} />
          </div>
        </form>
        <button className="demo-button" onClick={()=>login(this.demoUser)}> Demo Login</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);