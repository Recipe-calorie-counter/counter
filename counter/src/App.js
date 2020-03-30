import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Converter from "./components/Converter";
import CountRecipe from "./components/CountRecipe";
import Home from "./components/HomePage";

function App() {
  return (
    <div className="App">


      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/converter">
        <Converter />
      </Route>

      <Route path="/countRecipe">
          <CountRecipe />
      </Route>
    </div>
  );
}

export default App;
