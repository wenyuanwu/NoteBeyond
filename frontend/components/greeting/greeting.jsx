import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


render(){

  let {currentUser, login, logout, location} = this.props;

  if (!location) { return null }
  let formType = location.pathname.slice(1);

  let login_prop; 

  if (formType === "login"){
    login_prop = <Link to="/signup">Create Account</Link>;
  } else {
    login_prop = <Link to="/login">Sign In</Link>;
  }

  const sessionLinks = () => (
    <nav className="login-signup">
      {login_prop}
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
      {console.log(formType)}
      {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
    </div>  
    );
  }
}

export default Greeting;