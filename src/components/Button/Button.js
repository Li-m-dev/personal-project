import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getUser } from "../../ducks/userReducer";

function Button(props) {
  return (
    <Fragment>
      {props.user[0] !== undefined ? (
        props.user[0].isadmin === false ? null : (
          <button className="admin_btn" onClick={props.clicked}>
            {props.children}
          </button>
        )
      ) : null}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(Button);
