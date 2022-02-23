import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">Register</Route>
        <Route path="/login">Login</Route>
        <Route path="/dashboard">Dashboard</Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
