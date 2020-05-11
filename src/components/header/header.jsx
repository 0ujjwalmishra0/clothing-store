import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-util";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {/* <Link className="option bttn" to="/shop"> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">SIGN IN
          </Link>
        )}
     
      <img className= 'image' alt= 'profile'src='https://lh3.googleusercontent.com/a-/AOh14GhXRGpO2oMbGX0vANrhYOzwwVtJ5I1PWVtIOiNZ'/>
    </div>
  </div>
);
export default Header;