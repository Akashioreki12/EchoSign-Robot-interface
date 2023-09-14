import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EchoSign from "./pages/echosign"; 
import MainPage from "./pages/mainPage";
import Translating from "./pages/translating";
import Translating2 from "./pages/translating2";
import Eyes from "./pages/eyes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/translating">
          <Translating />
        </Route>
        <Route path="/translating2">
          <Translating />
        </Route>
        <Route exact path="/mainPage">
          <MainPage />
        </Route>
        <Route path="/eyes">
          <Eyes />
        </Route>
        <Route path="/">
          <EchoSign />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
