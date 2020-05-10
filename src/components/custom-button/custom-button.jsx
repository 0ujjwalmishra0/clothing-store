import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {/* {console.log(otherProps)} */}
    {children}
  </button>
);
export default CustomButton;
