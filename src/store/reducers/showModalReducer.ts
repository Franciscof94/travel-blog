import { Action, ActionType } from "../actionTypes/actionTypes";

export interface State {
  modal: boolean;
  id: number;
}

const initialState = {
  modal: false,
  id: 0,
};

const reducers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ActionType.GET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
