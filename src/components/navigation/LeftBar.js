import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./styles.css"

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/record">
        Health Records
      </a>

      <a className="menu-item" href="/a">
        a
      </a>

      <a className="menu-item" href="/b">
        b
      </a>
    </Menu>
  );
};
