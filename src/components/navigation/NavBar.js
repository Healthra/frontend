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
// import "./styles.css"

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    marginLeft: 100,
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <LeftBar />
        <Typography variant="h4" className={classes.logo}>
          Healthra
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Dashboard
            </Link>
            <Link to="/notification" className={classes.link}>
              Notifications
            </Link>
            <Link to="/message" className={classes.link}>
              Messages
            </Link>
            <Link to="/profile" className={classes.link}>
              Profile
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;