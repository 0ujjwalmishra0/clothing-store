import React from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase-util";

//for sign-in use class bcz we need to store what user type in

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async(event) => {
    //preventing default behaviour to gain more control
    event.preventDefault();
    const{email,password}= this.state;
    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''})
    } catch (error) {
      console.log(error);
      
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    //pull value and name of the event
    const { value, name } = event.target;
    console.log(event.target);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className='buttons'>
            <CustomButton type="button">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
