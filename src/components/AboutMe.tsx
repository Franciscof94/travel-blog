import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Avatar from "../assets/avatar.png";
import Grid from '@mui/material/Grid';




const AboutMe = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h2" component="h4">
        Sobre mí
      </Typography>
      <Grid container rowSpacing={1} columnSpacing ={{ xs: 1, sm: 2, md: 3 }}>
        <img className={classes.avatar} src={Avatar} alt="profile" />
        <p>
          asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds asdasd
          asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas a sdsadas asdasdas
          aasd asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds
          asdasd asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas a sdsadas
          asdasdas aasd asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd
          sd sds asdasd asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas a
          sdsadas asdasdas aasd asdasdasd asdasdasda asdasdasdas ddsdsdsdsds
          dsdsdsd sd sd sds asdasd asdsadsa asdasdasdas assaddasd asdasdasdas
          asdasdas a sdsadas asdasdas aasd asdasdasd asdasdasda asdasdasdas
          ddsdsdsdsds dsdsdsd sd sd sds asdasd asdsadsa asdasdasdas assaddasd
          asdasdasdas asdasdas a sdsadas asdasdas aasd asdasdasd asdasdasda
          asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds asdasd asdsadsa asdasdasdas
          assaddasd asdasdasdas asdasdas a sdsadas asdasdas aasd asdasdasd
          asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds asdasd asdsadsa
          asdasdasdas assaddasd asdasdasdas asdasdas a sdsadas asdasdas aasd
          asdasdasd asdasdasda asdasdasdas ddsdsdsdsds dsdsdsd sd sd sds asdasd
          asdsadsa asdasdasdas assaddasd asdasdasdas asdasdas a sdsadas asdasdas
          aasd
        </p>
      </Grid>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: "50%",
  },
}));

export default AboutMe;
