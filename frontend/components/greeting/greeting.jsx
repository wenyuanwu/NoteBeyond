import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

render(){

  let {currentUser, login, logout} = this.props;

  let demoUser = {"user": {"username":"Guest", "password":"guestpassword"}};

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
      <button className="demo-button" onClick={()=>login(demoUser)}> Demo Login</button>;
    </nav>
  );

  const personalGreeting = (currentUser, logout) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return(
    <div>
      {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
    </div>  
    );
  }
}

export default Greeting;