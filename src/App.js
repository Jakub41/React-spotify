import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import './App.css';

import getAllComments from "./Services/CRUDCommentAPI";

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
