import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getInstr } from "../../../ducks/instrReducer";
// import Button from "../../Button/Button";

class Instr extends Component {
  componentDidMount() {
    this.props.getInstr(this.props.match.params.id);
  }

  render() {
    // console.log(this.props);
    const { name, title, pic, intro } = this.props.teacher;
    //------------------using filter is another way to get individual teacher rendered, but
    //each time when I refresh instructor/id page, it won't render, because there was no componentDidMount. -----------
    // const instrDisplay = this.props.instructors
    // .filter(
    //   instr =>
    //     this.props.location.pathname === `/instructor/${instr.instructorid}`
    // )
    // .map(instr => {
    //   return (
    //     <div key={instr.instructorid}>
    //       <h2>{instr.name}</h2>
    //       <h3>{instr.title}</h3>
    //       <img src={instr.pic} alt={instr.name} />
    //       <p>{instr.intro}</p>
    //     </div>
    //   );
    // });
    return (
      <div className="instr_page">
        {/* {instrDisplay} */}
        <div className="instr">
          <img className="instr_pic" src={pic} alt={name} />
          <div className="instr_bio">
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p> {intro}</p>
          </div>
        </div>
        <div className="back_links">
          <div className="img_container">
            <Link to="/classes">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga-class.jpeg?alt=media&token=0cfdfa19-62c4-4b96-b3a5-d91b99acbae0"
                alt="classes"
              />
              <div className="text_in_img">CLASSES</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/instructors">
              {" "}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga%202.jpg?alt=media&token=ed779322-f4d2-4940-99ae-c55338e2bb04"
                alt="instructors"
              />
              <div className="text_in_img">INSTRUCTORS</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/events">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fworkshop.jpeg?alt=media&token=39b2d8b7-33ba-4856-9500-802d2a9b6b28"
                alt="events"
              />
              <div className="text_in_img">EVENTS</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.instructors
  };
};

export default connect(
  mapStateToProps,
  { getInstr }
)(Instr);
