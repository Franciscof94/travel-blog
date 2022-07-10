import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import TravelsCard from "../components/TravelsCard";
import data from "../data/data";
import ModalInfo from "../components/ModalInfo";
import { RootState } from "../store/reducers";
import { useSelector } from "react-redux";

const Travels = () => {
  const classes = useStyles();
  const { modal } = useSelector((state: RootState) => state.modal);

  return (
    <Box
      sx={{
        color: "red",
      }}
    >
      <Typography className={classes.title} variant="h2">
        Mis viajes
      </Typography>
      <Grid
        container
        rowSpacing={1}
        sx={{ display: "flex", justifyContent: "center" }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {data.map((info, index) => (
          <TravelsCard info={info} key={index} />
        ))}
        {modal && <ModalInfo />}
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "2.2rem 0",
  },
}));

export default Travels;
