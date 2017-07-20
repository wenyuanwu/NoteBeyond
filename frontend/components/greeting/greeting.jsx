import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


render(){

  let {currentUser, login, logout} = this.props;

  const personalGreeting = (currentUser, logout) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return(

    <div>
       {currentUser && personalGreeting(currentUser, logout)}
    </div>  
    );
  }
}

export default Greeting;