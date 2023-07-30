import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VendorMachine from './VendorMachine';
import SnickerBar from "./SnickerBar";
import ClifBar from "./ClifBar";
import PopTart from "./PopTart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<VendorMachine />} />
            <Route path="/snickers" element={<SnickerBar />}></Route>
            <Route path="/clif" element={<ClifBar />}></Route>
            <Route path="/poptart" element={<PopTart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
