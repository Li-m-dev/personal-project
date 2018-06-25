import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";

import { getClasses, deleteClass } from "../../ducks/clsReducer";
// import { getUser } from "../../ducks/userReducer";
import Button from "../Button/Button";
import "./Classes.css";

class Classes extends Component {
  componentDidMount() {
    // console.log(this.props.classes);
    this.props.getClasses();
  }

  render() {
    console.log(this.props);
    // console.log(this.props.user[0]);
    // let addBtn;
    // if (this.props.user[0] !== undefined) {
    //   this.props.user[0].isadmin === false
    //     ? null
    //     : (addBtn = (
    //         <Link to="/addclass">
    //           <button>Add New Classes</button>
    //         </Link>
    //       ));
    // }

    const clsList = this.props.classes.map(cls => {
      return {
        title: `
        ${cls.type}
        ${cls.level}
        ${cls.name}`,

        start: cls.start,
        end: cls.endtime,
        id: cls.id
        // dow: [1, 4]
      };
      // <div key={cls.id}>
      //   <p>{cls.type}</p>
      //   <p>{cls.start}</p>
      //   <p>{cls.end}</p>
      //   <p>{cls.level}</p>
      //   <p>{cls.name}</p>

      //   {/* {this.props.user[0] !== undefined ? (
      //     this.props.user[0].isadmin === false ? null : (
      //       <button onClick={() => this.props.deleteClass(cls.id)}>
      //         Delete
      //       </button>
      //     )
      //   ) : null} */}
      //   <Button clicked={() => this.props.deleteClass(cls.id)}>
      //     {" "}
      //     Delete
      //   </Button>
      // </div>
    });
    return (
      <div className="schedule_page">
        <div className="page_title"> CLASSES </div>

        {/* {clsList} */}

        <div className="calendar">
          <FullCalendar
            id="your-custom-ID"
            header={{
              left: "prev,next today myCustomButton",
              center: "title",
              right: "basicWeek,basicDay"
            }}
            defaultDate={new Date()}
            defaultView={"basicWeek"}
            displayEventEnd={true}
            selectable={true}
            dragScroll={true}
            editable={true}
            eventColor="transparent"
            eventTextColor="#000000"
            eventBorderColor="#e6e6e6"
            eventClick={function(calEvent, jsEvent, view) {
              alert("Event: " + calEvent.title);
            }}
            navLinks={true} // can click day/week names to navigate views
            eventLimit={true} // allow "more" link when too many events
            events={clsList}
          />
        </div>
        <div className="add_btn">
          <Button clicked={() => this.props.history.push("/addclass")}>
            Add Class
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.classes,
    ...state.instructors
    // ...state.user
  };
};
export default connect(
  mapStateToProps,
  {
    getClasses,
    deleteClass
    // getUser
  }
)(Classes);
