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
  toolBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  navlinks: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
 logo: {
    marginLeft: 70,
    paddingTop: 10,
    cursor: "pointer",
  },
  logoImage: {
    width: 200
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    flex: 1,
    "&:hover": {
      color: "yellow",
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
        <Typography variant="h4" className={classes.logo}>
          <img className={classes.logoImage} src={require("../../images/healthraLogo.png")} />
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/notification" className={classes.link}>
              <img className={classes.image} src={require("../../images/notification.png")}/>
            </Link>
            <Link to="/message" className={classes.link}>
              <img className={classes.image} src={require("../../images/message.png")}/>
            </Link>
            <Link to="/profile" className={classes.link}>
              <img className={classes.image} src={require("../../images/profile.png")}/>
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;