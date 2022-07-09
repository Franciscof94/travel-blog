import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface PropTypes {
  info: {
    title: string;
    img: string;
    description: string
  };
}

export default function TravelsCard({ info }: PropTypes) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
                info.title
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
                info.description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
