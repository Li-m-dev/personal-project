import React from "react";

function LoginBtn() {
  return (
    <a className="header_btn" href={process.env.REACT_APP_LOGIN_URL}>
      Login
    </a>
  );
}

export default LoginBtn;
