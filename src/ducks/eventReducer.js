import axios from "axios";

const GET_EVENTS = "GET_EVENTS";
const ADD_EVENT = "ADD_EVENT";
const DELETE_EVENT = "DELETE_EVENT";

const initialState = {
  events: [],
  isLoading: false,
  error: []
};

export function getEvents() {
  return {
    type: GET_EVENTS,
    payload: axios.get("/api/events")
  };
}

export function addEvent(event_name, date, time, price, about, img) {
  return {
    type: ADD_EVENT,
    payload: axios.post("/api/addevent", {
      event_name,
      date,
      time,
      price,
      about,
      img
    })
  };
}

export function deleteEvent(id) {
  return {
    type: DELETE_EVENT,
    payload: axios.delete(`/api/event/${id}`)
  };
}

//Reducer
export default function eventReducer(state = initialState, action) {
  //   console.log(action.type);
  switch (action.type) {
    // get events
    case `${GET_EVENTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        events: action.payload.data
      };
    case `${GET_EVENTS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    // add event
    case `${ADD_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${ADD_EVENT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        events: action.payload.data
      };
    case `${ADD_EVENT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //delete event
    case `${DELETE_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${DELETE_EVENT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        events: action.payload.data
      };
    case `${DELETE_EVENT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
