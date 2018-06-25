import axios from "axios";

const GET_INSTRUCTORS = "GET_INSTRUCTORS";
const GET_INSTR = "GET_INSTR";
const ADD_NEW_INSTRUCTOR = "ADD_NEW_INSTRUCTOR";
const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR";

const initialState = {
  instructors: [],
  teacher: {}
};
export function getInstructors() {
  return {
    type: GET_INSTRUCTORS,
    payload: axios.get("/api/instructors")
  };
}
export function getInstr(instructorid) {
  return {
    type: GET_INSTR,
    payload: axios.get(`/api/instructor/${instructorid}`)
  };
}
export function addNewInstr(name, title, pic, intro) {
  console.log(name);
  return {
    type: ADD_NEW_INSTRUCTOR,
    payload: axios.post("/api/addinstructor", { name, title, pic, intro })
  };
}
export function deleteInstructor(instructorid) {
  return {
    type: DELETE_INSTRUCTOR,
    payload: axios.delete(`/api/instructor/${instructorid}`)
  };
}

export default function instrReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_INSTRUCTORS}_FULFILLED`:
    case `${ADD_NEW_INSTRUCTOR}_FULFILLED`:
    case `${DELETE_INSTRUCTOR}_FULFILLED`:
      return {
        ...state,
        instructors: action.payload.data
      };
    case `${GET_INSTR}_FULFILLED`:
      return {
        ...state,
        teacher: action.payload.data[0]
      };

    default:
      return state;
  }
}
