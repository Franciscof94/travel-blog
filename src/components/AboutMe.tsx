import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Avatar from "../assets/avatar.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h2" component="h4">
        Sobre mí
      </Typography>
      <Grid
        container
        sx={{ padding: "1.5rem", display: "flex", justifyContent: "center" }}
        spacing={2}
        columns={16}
      >
        <Grid item xs={4}>
          <img className={classes.avatar} src={Avatar} alt="profile" />
        </Grid>
        <Grid item xs={9}>
          <p>
            asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds
            asdasd asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas a sdsadas
            asdasdas aasd asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd
            sd sd sds asdasd asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas
            a sdsadas asdasdas aasd asdasdasd asdasdasda asdasdasdas ddsdsdsdsds
            dsdsdsd sd sd sds asdasd asdsadsa asdasdasdas assaddasd asdasdasdas
            asdasdas a sdsadas asdasdas aasd asdasdasd asdasdasda asdasdasdas
          </p>
          <Button variant="contained">
            <Link className={classes.link} to="/misviajes">Conoce mis viajes</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: "50%",
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export default AboutMe;
