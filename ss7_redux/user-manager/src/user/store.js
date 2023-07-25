import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/reducer/UserReducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
});


export const store = createStore(rootReducer);
