import { makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const classes = useStyles();
  const title = [
    { title: "INICIO", href: "/" },
    { title: "MIS VIAJES", href: "/misviajes" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.navBarContainer}>
        {title.map((link) => (
          <NavLink
            className={({ isActive }) =>
              `${classes.link} ${isActive ? classes.border : ""}`
            }
            to={link.href}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "start",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"
  },
  navBarContainer: {
    margin: "0.7rem 1.5rem",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.8rem",
    margin: "0.9rem",
  },
  border: {
    borderBottom: "2px solid #4a65f3f2",
  },
}));

export default NavBar;
