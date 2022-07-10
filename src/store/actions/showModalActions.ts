import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes/actionTypes";

export const showModal = (value: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_MODAL,
      payload: value,
    });
  };
};

export const getId = (value: number) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.GET_ID,
        payload: value,
      });
    };
  };
  
