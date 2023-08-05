import './App.css';

import Nav from "./Nav";
import ColorList from "./ColorList";
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import {useState, useEffect} from "react";

const COLORS = [
  {name:"red", value:"#FF0000"},
  {name:"blue", value:"#00FF00"},
  {name:"green", value:"#0000FF"},
];

const fetchColors = ()=>{
  let saved = localStorage.getItem("colors");
  if(saved === null)
    return [];
  else{
    return JSON.parse(saved);
  }
};

const saveColors = (colors) =>{
  localStorage.setItem("colors", JSON.stringify(colors));
}

function App() {
  const [colors, setColors] = useState(fetchColors());
  
  useEffect(()=>{
    saveColors(colors);
  }, [colors])


  const addColor = (color)=>{
    setColors(colors => ([color, ...colors]));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav colors={colors.map(e=>e.name)}/>
        <div className="App-main">
          <Routes>
            <Route  path="/colors/" element={<ColorList colors={colors} />}></Route>
            <Route  path="/colors/:name" element={<ColorDetails colors={colors}  />}></Route>
            <Route  path="/colors/new" element={<NewColorForm  addColor={addColor}/>}></Route>
            <Route  path="*"  element={<Navigate to="/colors/" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
