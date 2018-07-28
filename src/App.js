import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contador from "./Contador";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to React</h1>
         </header>
         <div className="App-intro">
           <p>Iniciando com ReactJS</p>
           <p>
             Get started, edit <code>src/App.js</code> and save to
             reload !!
           </p>
         </div> */}

        <Contador />
      </div>
    );
  }
}

export default App;
