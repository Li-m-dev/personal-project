import React from "react";

// const LogoutBtn = props => {
//   return;
//   <a href="http://localhost:3001/logout">
//     <button onClick={props.onClick}>Logout</button>
//   </a>;
// };

function LogoutBtn(props) {
  return (
    <a className="header_btn" href={process.env.REACT_APP_LOGOUT_URL}>
      Logout
    </a>
  );
}

export default LogoutBtn;
