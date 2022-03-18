import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./styles.css"

export default props => {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  return (
    <Menu {...props}>
      <Link to="/">
        <img alt="logo" style={{ width: 200, paddingBottom: 20 }} src={require("../../images/healthraLogo.png")} />
      </Link>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link to="/record">Health Records
        {/* <i className="fa fa-caret-down"></i> */}
      </Link>
      {/* <div className="dropdown-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
      <Link className="menu-item" to="/appointments">
        Appointments
      </Link>
      <Link className="menu-item" to="/careplan">
        Care Plan
      </Link>
    </Menu>
  );
};
