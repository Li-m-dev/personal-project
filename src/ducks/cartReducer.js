import axios from "axios";

//actions
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";

const initalState = {
  cart: [],
  totalQuantity: 0
  //loading:false
};

//action creator
export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get("/api/cart")
  };
}
export function addToCart(pass) {
  return {
    type: ADD_TO_CART,
    payload: axios.post("/api/cart", pass)
  };
}
export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: axios.delete(`/api/cart/${id}`)
  };
}
export function changeQuantity(id, qty) {
  return {
    type: CHANGE_QUANTITY,
    payload: axios.put(`/api/cart`, { id, qty })
  };
}

export default function cartReducer(state = initalState, action) {
  switch (action.type) {
    case `${GET_CART}_FULFILLED`:
    case `${ADD_TO_CART}_FULFILLED`:
    case `${DELETE_FROM_CART}_FULFILLED`:
    case `${CHANGE_QUANTITY}_FULFILLED`:
      return {
        ...state,
        cart: action.payload.data
      };
    default:
      return state;
  }
}
