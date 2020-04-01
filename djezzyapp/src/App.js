import React from 'react';
import logo from './logo.svg';
import './App.css';
import Principale from "./principal/Pages/Principale/Principale";
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';
import Header from "./principal/header";
 import Concurrents from "./principal/Pages/Concurrents/Concurrents";
import KPIs from "./principal/Pages/KPIs/KPIs";
import Commentaires from "./principal/Pages/Commentaires/Commentaires";
import TableauKPIs from "./principal/Pages/KPIs/Tableau";


function App() {
  return (


      <Router>
      <div className="App">
        <div>
            <Header />

             <switch>
                    <Route path="/" exact component= {Principale}/>
                    <Route path="/Commentaires" component= {Commentaires}/>
                    <Route path="/Concurrents" component= {Concurrents}/>
                    <Route path="/KPIs" component= {KPIs}/>
                </switch>

        </div>

    </div>

      </Router>

  );
}

export default App;