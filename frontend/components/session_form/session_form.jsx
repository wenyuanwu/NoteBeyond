import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.demoUser = {"user": {"username":"Guest", "password":"guestpassword"}};
  }
  
  componentDidUpdate(prevProps,prevState){
    if (prevProps.errors.length !== 0 && this.state !== prevState){
      this.props.clearErrors();}
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

  handleDemoSubmit(e){
    e.preventDefault();
    this.props.login(this.demoUser);
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
    let {formType} = this.props;
    let value;
    let login_prop;
    let loginPropWord;

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

  if (formType === "login"){
    loginPropWord = "Don't have an account?";
                
  } else {
    loginPropWord = "Already have an account?";
  }


    return (
      <div className="login-form-container">
        <div className="header">
          <div className="left-side">
            <div className="logo">
              <img src="https://res.cloudinary.com/dltydzsmu/image/upload/v1500915656/folder_icon_snyvtd.png" />
            </div>  
            <div className="logo-name">
              NoteBeyond
            </div>
          </div>
          <div className="right-side">
            <a className="github" href="https://github.com/wenyuanwu/NoteBeyond">
              <img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1503945724/github_awpd8m.png"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/wenyuanlydiawu/">
              <img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1503950423/linkedin-grey_we1uee.png"/>
            </a>
          </div>
        </div>   
        
        <div className= "login-form">
          <video playsInline autoPlay muted loop poster="http://res.cloudinary.com/dltydzsmu/image/upload/v1503958901/I_Just_Wanted_k5ihje.jpg" id="hello-jpg">
            <source src="http://res.cloudinary.com/dltydzsmu/video/upload/v1503958895/I_Just_Wanted_ktq7pr.webm" type="video/webm"/>
            <source src="http://res.cloudinary.com/dltydzsmu/video/upload/v1503958891/I_Just_Wanted_fvci22.mp4" type="video/mp4"/>
            <source src="http://res.cloudinary.com/dltydzsmu/video/upload/v1503958893/I_Just_Wanted_dnu8qu.ogv" type="video/ogv"/>
          </video>

          <h3 className="status">{value}</h3>

          <form onSubmit={this.handleSubmit} className="login-form-box">
          
            <div className="login-form">
              
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="login-input"
              />
            
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder ="Password"
                className="login-input"
              />

              <div className="error_msg">
                {this.renderErrors()}
              </div>

              <input className="submit-button" type="submit" value={value} />
              <button className="demo-button" onClick={this.handleDemoSubmit}> Demo Login</button>
            </div>
          </form>

          <div className="login-prop-words">{loginPropWord}</div>
          <div className ="login-signup">{login_prop}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);