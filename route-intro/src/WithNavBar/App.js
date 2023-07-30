import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import SnickerBar from "./SnickerBar";
import ClifBar from "./ClifBar";
import PopTart from "./PopTart";
import Machine from "./Machine";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <nav className="App-nav">
        <div className="nav-home"><NavLink to="/" className="link home">Vendor Machine</NavLink></div>
        <div className="nav-items">
          <NavLink to="/snickers" className="link">Snickers Bar</NavLink>
          <NavLink to="/clif" className="link">Clif Bars</NavLink>
          <NavLink to="/poptart" className="link"> Pop-Tart</NavLink>
        </div>
      </nav>

        <Routes>
            <Route path="/" element={<Machine />} />
            <Route path="/snickers" element={<SnickerBar />}/>
            <Route path="/clif" element={<ClifBar />} />
            <Route path="/poptart" element={<PopTart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
