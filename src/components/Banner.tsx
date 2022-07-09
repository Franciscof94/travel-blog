import React from "react";
import Box from "@mui/material/Box";
import BannerImage from "../assets/banner.jpg";
import { makeStyles, Typography } from "@material-ui/core";

const Banner = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: 0,
        minHeight: "75vh",
        margin: 0,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(" + BannerImage + ")",
        elevation: 0,
      }}
    >
      <Typography className={classes.title} variant="h1">
        Los viajes de la chinita
      </Typography>
      <div className={classes.fadeBottom}></div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
  fadeBottom: {
    position: "absolute",
    top: "3vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #1111)",
  },
}));

export default Banner;
