import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Classes from "./components/Classes/Classes";
import Prices from "./components/Prices/Prices";
import Events from "./components/Events/Events";
import Instructors from "./components/Instructors/Instructors";
import Instr from "./components/Instructors/Instructor/Instr";
import Contact from "./components/Contact/Contact";
import AddInstr from "./components/Instructors/AddInstr/AddInstr";
import AddCls from "./components/Classes/AddCls/AddCls";
import Cart from "./components/Prices/Cart/Cart";
import OrderSummary from "./components/Prices/Cart/OrderSummary/OrderSummary";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/classes" component={Classes} />
    <Route path="/prices" component={Prices} />
    <Route path="/events" component={Events} />
    <Route path="/instructors" component={Instructors} />
    <Route path="/instructor/:id" component={Instr} />
    <Route path="/contact" component={Contact} />
    <Route path="/addinstructor" component={AddInstr} />
    <Route path="/addclass" component={AddCls} />
    <Route path="/cart" component={Cart} />
    <Route path="/summary" component={OrderSummary} />
  </Switch>
);
