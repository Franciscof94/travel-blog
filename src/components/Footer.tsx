import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundColor: "#d7ddff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/losviajesdelachinita"
        className={classes.icon}
      >
        <InstagramIcon sx={{ fontSize: "80px", color: "black" }} />
      </a>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "1rem 0",
    cursor: "pointer",
  },
}));

export default Footer;
