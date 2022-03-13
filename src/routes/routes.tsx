import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
export default DefaultRoutes;
