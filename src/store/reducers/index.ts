import { combineReducers } from "redux";
import modal from "./showModalReducer";

const reducers = combineReducers({
  modal,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
