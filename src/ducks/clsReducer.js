import axios from "axios";

const GET_CLASSES = "GET_CLASSES";
const ADD_CLASS = "ADD_CLASS";
const DELETE_CLASS = "DELETE_CLASS";

const initialState = {
  classes: []
};
export function getClasses() {
  return {
    type: GET_CLASSES,
    payload: axios.get("/api/classes")
  };
}

export function addCls(type, start, endtime, level, instructorid) {
  return {
    type: ADD_CLASS,
    payload: axios.post("/api/addclass", {
      type,
      start,
      endtime,
      level,
      instructorid
    })
  };
}

export function deleteClass(id) {
  return {
    type: DELETE_CLASS,
    payload: axios.delete(`/api/classes/${id}`)
  };
}

export default function clsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CLASSES}_FULFILLED`:
    case `${ADD_CLASS}_FULFILLED`:
    case `${DELETE_CLASS}_FULFILLED`:
      return {
        ...state,
        classes: action.payload.data
      };
    default:
      return state;
  }
}
