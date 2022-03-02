import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./styles.css"

export default props => {
  return (
    <Menu {...props}>
      <div>
        <img style={{ width: 200, paddingBottom: 20 }} src={require("../../images/healthraLogo.png")} />
      </div>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/record">
        Health Records
      </a>

      <a className="menu-item" href="/appointment">
        Appointments
      </a>

      <a className="menu-item" href="/careplan">
        Care Plan
      </a>
    </Menu>
  );
};
