import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";
import { greenTheme, purpleTheme } from "../styles/theme";
import { GlobalStylesDefault } from "../styles/globalStyle";

const DefaultRoutes = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("green");
  console.log(theme);

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme === "green" ? greenTheme : purpleTheme}>
        <GlobalStylesDefault />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            opa
          </Route>

          <Route exact path="/register">
            <Register setTheme={setTheme} />
          </Route>
          <Route exact path="/login">
            <Login setTheme={setTheme} />
          </Route>
        </Switch>
      </ThemeProvider>
    </AnimatePresence>
  );
};
export default DefaultRoutes;
