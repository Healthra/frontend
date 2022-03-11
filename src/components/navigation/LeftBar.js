import React from "react";
import { slide as Menu } from "react-burger-menu";
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
      <a href="/dashboard">
        <img style={{ width: 200, paddingBottom: 20 }} src={require("../../images/healthraLogo.png")} />
      </a>
      <a className="menu-item" href="/dashboard">
        Home
      </a>
      {/* <a className="menu-item" href="/record">
        Health Records
      </a> */}
      <a class="dropdown-btn" href="/record">Health Records
        <i class="fa fa-caret-down"></i>
      </a>
      {/* <div class="dropdown-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
      <a className="menu-item" href="/appointments">
        Appointments
      </a>
      <a className="menu-item" href="/careplan">
        Care Plan
      </a>
    </Menu>
  );
};
