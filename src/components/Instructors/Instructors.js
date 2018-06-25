import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getInstructors, deleteInstructor } from "../../ducks/instrReducer";
// import Instr from "./Instructor/Instructor";
import Button from "../Button/Button";

class Instructors extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.getInstructors().then(res => console.log(res));
  }
  render() {
    // console.log(this.props);
    const instructors = this.props.instructors.map(instructor => {
      return (
        <div className="teacher" key={instructor.instructorid}>
          {/* <Instructor instr={instructor} /> */}
          <p className="teacher__name">{instructor.name}</p>
          <Link to={`/instructor/${instructor.instructorid}`}>
            <img
              className="teacher__pic"
              src={instructor.pic}
              alt={instructor.name}
            />
          </Link>
          <Button
            clicked={() => {
              console.log(this.props);
              this.props
                .deleteInstructor(instructor.instructorid)
                .then(() => this.props.getInstructors());
            }}
          >
            Delete
          </Button>
        </div>
      );
    });
    return (
      <div>
        <div className="page_title"> INSTRUCTORS </div>
        <div className="add_btn">
          <Button clicked={() => this.props.history.push("/addinstructor")}>
            Add Instructors
          </Button>
        </div>
        <div className="teachers">{instructors}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state.instructors;

export default connect(
  mapStateToProps,
  { getInstructors, deleteInstructor }
)(Instructors);
