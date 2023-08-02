import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import {dogs, dogsByName} from "./dogs";

function App() {
  console.log(dogs);
  let names = Object.keys(dogsByName);
  console.log(names);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav names={names} />
      <Routes>
        <Route  path="/dogs" element={<DogList dogs={dogs}/> } />
        <Route  path="/dogs/:name"  element={<DogDetails /> } />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
