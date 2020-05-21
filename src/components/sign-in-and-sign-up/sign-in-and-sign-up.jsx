import React from "react";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import "./sign-in-and-sign-up.scss";
const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn className="sign-in" />
    <SignUp className="sign-up" />
  </div>
);

export default SignInSignUpPage;
