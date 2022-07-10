import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";
import { RootState } from "../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { actionCreators } from "../store";
import { bindActionCreators } from "redux";
import data from "../data/data";
import { numberOfLetters } from "../Helpers/helpers";
import { useResize } from "../Hooks/useResize";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  minWidth: 310,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 1.3,
};

const ModalInfo = () => {
  const dispatch = useDispatch();

  const { isPhone } = useResize();

  const { modal, id } = useSelector((state: RootState) => state.modal);
  const { showModal } = bindActionCreators(actionCreators, dispatch);

  const card = data.filter((card) => card.id === id);

  return (
    <>
      {card.map((cardInfo) => (
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CloseIcon
              onClick={() => showModal(false)}
              sx={{
                fontSize: "40px",
                color: "black",
                float: "right",
                cursor: "pointer",
                margin: "0.7rem 0",
              }}
            />
            <CardMedia
              component="img"
              height="320"
              image={cardInfo.img}
              alt="green iguana"
            />
            <Box m={4}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                {cardInfo.title}
              </Typography>
              <Box
                sx={{
                  maxHeight: isPhone ? "17vh" : null,
                  overflowY: isPhone ? "scroll" : "hidden",
                }}
              >
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {cardInfo.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
      ))}
    </>
  );
};

export default ModalInfo;
