import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Avatar from "../assets/avatar.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useResize } from "../Hooks/useResize";

const AboutMe = () => {
  const classes = useStyles();
  const isPhone =  useResize();
  console.log(isPhone)

  return (
    <Box>
      <Typography className={classes.title} variant="h2" component="h4">
        Sobre mí
      </Typography>
      <Grid
        container
        sx={{
          padding: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isPhone ? "column" : "row",
        }}
        spacing={2}
        columns={isPhone ? 2 : 16}
      >
        <Grid item xs={isPhone ? 2 : 4}>
          <img className={classes.avatar} src={Avatar} alt="profile" />
        </Grid>
        <Grid item xs={9} m={3} sx={{ textAlign: 'center'}}>
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
            <Link className={classes.link} to="/misviajes">
              Conoce mis viajes
            </Link>
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
    color: "white",
    textDecoration: "none",
  },
  title: {
    margin: "2.2rem 0",
    textAlign: "center",
  },
}));

export default AboutMe;
