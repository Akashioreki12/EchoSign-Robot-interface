import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EchoSign from "./pages/echosign"; 
import MainPage from "./pages/mainPage";
import Connexion from "./pages/connexion";
import Translating from "./pages/translating";
import Translating2 from "./pages/translating2";
import Eyes from "./pages/eyes";


// import TranscribeComponent from "./pages/textspeech";

import Stt from "./pages/textspeech";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/connexion">
          <Connexion />
        </Route>
        <Route path="/translating">
          <Translating />
        </Route>
        <Route path="/translating2">
          <Translating2 />
        </Route>
        <Route exact path="/mainPage">
          <MainPage />
        </Route>
        <Route path="/eyes">
          <Eyes />
        </Route>
        
        <Route path="/stt">
          <Stt />
        </Route>
        <Route path="/">
          <EchoSign />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
