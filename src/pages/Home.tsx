import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";

const Home = () => {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <AboutMe />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
}));

export default Home;
