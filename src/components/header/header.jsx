import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-util";
import CartIcon from '../cart-icon/cart-icon';

import {connect} from 'react-redux';
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser,hidden,photoURL }) => (
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
        <CartIcon />
     
      
        <img className= 'image' alt= 'profile'
      src= 
      'https://lh3.googleusercontent.com/a-/AOh14GhXRGpO2oMbGX0vANrhYOzwwVtJ5I1PWVtIOiNZ'
      />
      
      {console.log(currentUser)}
      {/* {console.log(currentUser.photoURL)} */}
      
    </div>
     
   { hidden ? null :<CartDropdown />}
  </div>
);

// from state we want user , and from user we want current user

// const mapStateToProps = (state)=> ({
//   currentUser: state.user.currentUser
// });

const mapStateToProps = ({user: {currentUser},cart: {hidden},})=> ({
  currentUser,
  hidden,
  // photoURL: currentUser.photoURL,
  //now pull hidden value of
});
export default connect (mapStateToProps)(Header);
