import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LeftBar from "./LeftBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "white",
  },
  navlinks: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },
  logoImage: {
    width: 200,
    marginLeft: 70,
    padding: 10,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    margin: 5,
    "&:hover": {
      backgroundColor: "gray",
      borderBottom: "1px solid white",
    },
  },
  image: {
    width: 40,
    top: 10,
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBar} position="fixed">
      <CssBaseline />
      <Toolbar className={classes.toolBar}>
        <LeftBar />
        <Link to="/dashboard">
          <img className={classes.logoImage} src={require("../../images/healthraLogo.png")} />
        </Link>
        <div className={classes.navlinks}>
          <Link to="/notifications" className={classes.link}>
            <img className={classes.image} src={require("../../images/notification.png")} />
          </Link>
          <Link to="/messages" className={classes.link}>
            <img className={classes.image} src={require("../../images/message.png")} />
          </Link>
          <Link to="/settings" className={classes.link}>
            {/* pop up of settings, reset password,signout should come up */}
            <img className={classes.image} src={require("../../images/profile.png")} />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;