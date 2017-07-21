import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    let login_prop;

    if(formType === 'login'){
      value = "Sign In";
    } else {
      value = "Create Account";
    }

    if (formType === "login"){
    login_prop = <Link to="/signup">Create Account</Link>;
  } else {
    login_prop = <Link to="/login">Sign In</Link>;
  }


    return (
      <div className="login-form-container">
        <div className="logo">
          <img src="/assets/folder_icon.png" />
        </div>

        <h3 className="status">{value}</h3>

        <form onSubmit={this.handleSubmit} className="login-form-box">
        
          <div className="login-form">
            
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="login-input"
              />
            </label>
            
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder ="Password"
                className="login-input"
              />
            </label>
            <div className="error_msg"/>
              {this.renderErrors()}
            <div/>
            <input className="submit-button" type="submit" value={value} />
            <button className="demo-button" onClick={()=>login(this.demoUser)}> Demo Login</button>
          </div>
        </form>
        <div className ="login-signup">{login_prop}</div>
      </div>
    );
  }
}

export default withRouter(SessionForm);