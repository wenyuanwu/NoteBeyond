import React from 'react';

class HomePage extends React.Component {

	render(){

		let {currentUser, logout} = this.props;

		const personalGreeting = (currentUser, logout) => (
		    <hgroup className="header-group">
		      <h2 className="header-name">Hi, {currentUser.username}!</h2>
		      <button className="header-button" onClick={logout}>Log Out</button>
		    </hgroup>);

		return(
				<div>
	       			{personalGreeting(currentUser, logout)}
	    		</div>  
			);
	}
}

export default HomePage; 

