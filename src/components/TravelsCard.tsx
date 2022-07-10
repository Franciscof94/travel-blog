import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../store/actions/showModalActions";
import { bindActionCreators } from "redux";
import { RootState } from "../store/reducers";
import { actionCreators } from "../store";

interface PropTypes {
  info: {
    id: number,
    title: string;
    img: string;
    description: string;
  };
}

export default function TravelsCard({ info }: PropTypes) {
  const dispatch = useDispatch();
  

  const { showModal, getId } = bindActionCreators(actionCreators, dispatch);


  return (
    <Card sx={{ maxWidth: 345, margin: "1rem" }}>
      <CardActionArea onClick={() => { showModal(true); getId(info.id)}}>
        <CardMedia component="img" height="140" image={info.img} alt="travel" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
