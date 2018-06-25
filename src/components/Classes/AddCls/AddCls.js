import React, { Component } from "react";
import { connect } from "react-redux";

import { addCls } from "../../../ducks/clsReducer";
import { getInstructors } from "../../../ducks/instrReducer";
import { getUser } from "../../../ducks/userReducer";

class AddCls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      start: "",
      endtime: "",
      level: "Level 1-2",
      instructorid: 0
    };
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.getInstructors().then(res => console.log(res));
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log("classes:", this.props.classes);
    // console.log("instructors:", this.props.instructors);
    console.log("props:", this.props);

    const instructorOptions = this.props.instructors.map(instructor => {
      return (
        <option key={instructor.instructorid} value={instructor.instructorid}>
          {instructor.name}
        </option>
      );
    });
    const { type, start, endtime, level, instructorid } = this.state;
    return this.props.user[0] !== undefined ? (
      this.props.user[0].isadmin === false ? (
        <h3> Only authorized users can access this page</h3>
      ) : (
        <div className="addCls_page">
          <div className="addCls_form">
            <div className="addCls_row">
              <p>Class Type</p>
              <input
                onChange={this.handleChange}
                type="text"
                value={this.state.name}
                name="type"
              />
            </div>
            <div className="addCls_row">
              <p>Start Time</p>
              <input
                onChange={this.handleChange}
                type="datetime-local"
                value={this.state.title}
                name="start"
              />
            </div>
            <div className="addCls_row">
              <p>End Time</p>
              <input
                onChange={this.handleChange}
                type="datetime-local"
                value={this.state.title}
                name="endtime"
              />
            </div>

            <div className="addCls_row">
              <p>Level</p>
              <select onChange={this.handleChange} name="level">
                <option value="Level 1-2">Level 1-2</option>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
              </select>
            </div>

            <div className="addCls_row">
              <p>Instructor</p>
              <select onChange={this.handleChange} name="instructorid">
                <option value="">Select an instructor</option>
                {instructorOptions}
              </select>
            </div>
          </div>
          <div>
            <button
              className="admin_btn"
              onClick={() =>
                this.props
                  .addCls(type, start, endtime, level, instructorid)
                  .then(() => this.props.history.push("/classes"))
              }
            >
              Add
            </button>
          </div>
        </div>
      )
    ) : (
      <h3
        style={{
          fontWeight: "800",
          fontSize: "1.5em",
          padding: "20px"
        }}
      >
        Only authorized users can access this page.
      </h3>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.classes,
    ...state.instructors,
    ...state.user
  };
};

export default connect(
  mapStateToProps,
  { addCls, getInstructors, getUser }
)(AddCls);
