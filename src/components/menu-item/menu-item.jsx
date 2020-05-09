import React from "react";
import "./menu-item.scss";
import {withRouter} from 'react-router-dom'

//destructure
const MenuItem = ({ title, imageUrl, size ,history,  linkUrl,match}) => (
  <div className={`${size} menu-item`} onClick= {()=> history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      //if size is present add it to class name using string interpolation
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
