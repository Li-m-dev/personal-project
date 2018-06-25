import React, { Component } from "react";
import { connect } from "react-redux";

import { getEvents, addEvent, deleteEvent } from "../../ducks/eventReducer";
import Button from "../Button/Button";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  // need to all add event function later

  render() {
    console.log(this.props);
    const eventList = this.props.events.map(event => {
      return (
        <div className="event_block" key={event.id}>
          <img
            src={event.img}
            alt={event.event_name}
            // style={{ width: "300px", float: "left" }}
          />

          <div className="event_info">
            <h3>{event.event_name}</h3>
            <br />
            <p>{event.about}</p>
            <br />
            <ul>
              <li>Date: {event.date}</li>
              <li>Time: {event.time}</li>
              <li>Price: ${event.price && event.price.toFixed(2)}</li>
            </ul>
          </div>

          <Button clicked={() => this.props.deleteEvent(event.id)}>
            Delete
          </Button>
        </div>
      );
    });
    return (
      <div className="event_page">
        <div className="page_title"> EVENTS </div>
        {eventList}
      </div>
    );
  }
}

const mapStateToProps = state => state.events;

export default connect(
  mapStateToProps,
  { getEvents, addEvent, deleteEvent }
)(Events);
