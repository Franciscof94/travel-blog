import React from "react";
import Box from "@mui/material/Box";
import BannerImage from "../assets/banner.jpg";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { useResize } from "../Hooks/useResize";

const Banner = () => {
  const classes = useStyles();
  const { isPhone } = useResize();

  return (
    <Box
      sx={{
        padding: 0,
        minHeight: isPhone ? "45vh" : "65vh",
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
      <Typography variant="h2" className={classes.title}>
        LOS VIAJES DE LA CHINITA
      </Typography>
      <div className={classes.fadeBottom}></div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    zIndex: 555,
    fontSize: "4rem",
    letterSpacing: "0.4rem",
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
