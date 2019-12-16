import React from 'react';
import loginImg from "../assets/img/loginImg.jpg";
import {getUser}  from  "../actions/UserActions";
import{connect} from'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor()
    {
    super();
    
    this.state={
          userName:"",
          password: "",
          error :""
       };
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.error) {
        this.setState({ error: nextProps.error });
      }
    }

  onChange(event)
  {
    this.setState({[event.target.name]:event.target.value});
  }


  onSubmit(event)
    {
      event.preventDefault();

      const loginUser={
        loginName:this.state.userName,
        password:this.state.password
        
         };
         this.props.getUser(loginUser,this.props.history);
      
     this.state.userName="";
     this.state.password="";
    
    }

    render() { 
      const { error } = this.state;
        return (
            <div>
            <form  onSubmit={this.onSubmit} className="form">
            <div className="imgcontainer">
              <img src={loginImg} alt="Avatar" className="avatar"/>
            </div>
          
            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username"
              name="userName" 
              value={this.state.userName}
              onChange={this.onChange}
               required />
          
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" 
              value={this.state.password}
              onChange={this.onChange}
              name="password" required />
                  
              <button type="submit" >Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
              </label>
              <p>{this.state.error}</p>
            </div>
          
            <div className="container" >
              <button type="button" className="cancelbtn" >Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
          </div>
          );
    }
}

Login.propTypes = {
    getUser: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
  
  };

  const mapStateToProps = (state) => ({
       error: state.error,
    });
    
export default connect(mapStateToProps,{getUser} ) (Login);

