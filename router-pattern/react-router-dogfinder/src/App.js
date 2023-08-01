import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import whiskey from "./images/whiskey.jpeg";
import duke from "./images/duke.jpeg";
import perry from "./images/perry.jpeg";
import tubby from "./images/tubby.jpeg";


function App({dogs}) {
  console.log(dogs);
  let names = dogs.map( d => d.name);
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

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: `${whiskey}`,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: `${duke}`,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: `${perry}`,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: `${tubby}`,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
