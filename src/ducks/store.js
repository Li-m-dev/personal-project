import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import instrReducer from "./instrReducer";
import clsReducer from "./clsReducer";
import priceReducer from "./priceReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";

const store = createStore(
  combineReducers({
    instructors: instrReducer,
    classes: clsReducer,
    prices: priceReducer,
    cart: cartReducer,
    user: userReducer,
    events: eventReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
