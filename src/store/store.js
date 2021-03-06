import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//Reducer = Reduzieren den Aufwand für ka
export const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
});

export default store;
