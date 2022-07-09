import { Box, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import TravelsCard from "../components/TravelsCard";
import data from "../data/data";

const Travels = () => {
  return (
    <Box
      sx={{
        color: "red",
      }}
    >
      <Typography variant="h1">Mis viajes</Typography>
      <Grid
        container
        rowSpacing={1}
        sx={{ display: "flex", justifyContent: "center" }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {data.map((info, index) => (
          <TravelsCard info={info} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Travels;
