import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./scss/App.css";
import Header from "./components/Header/Header";

import routes from "./routes";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <div className="main-header">
              <Header />
            </div>
            <div className="trans-box" />
            <div className="main-body">{routes}</div>
            <footer>COPYRIGHT 2018 LI SWAFFORD</footer>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
