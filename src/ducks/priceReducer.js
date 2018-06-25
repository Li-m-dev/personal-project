import axios from "axios";

const GET_PRICES = "GET_PRICES";

const initialState = {
  prices: []
};
export function getPrices() {
  return {
    type: GET_PRICES,
    payload: axios.get("/api/prices")
  };
}

export default function priceReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PRICES}_FULFILLED`:
      return {
        ...state,
        prices: action.payload.data
      };
    default:
      return state;
  }
}
