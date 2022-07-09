import React from "react";
import Box from "@mui/material/Box";
import BannerImage from "../assets/banner.jpg";
import { makeStyles } from "@material-ui/core";

const Banner = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: 0,
        minHeight: "65vh",
        margin: 0,
        zIndex: -1,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(" + BannerImage + ")",
        elevation: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className={classes.title}>LOS VIAJES DE LA CHINITA</h1>
      <div className={classes.fadeBottom}></div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#4a65f3f2",
    zIndex: 555,
    fontSize: "5rem",
    letterSpacing: "0.5rem",
    fontfamily: "'Koulen', cursive",
    position: "relative",
  },
  fadeBottom: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  },
}));

export default Banner;
