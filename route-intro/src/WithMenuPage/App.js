import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VendorMachine from './VendorMachine';
import SnickerBar from "./SnickerBar";
import ClifBar from "./ClifBar";
import PopTart from "./PopTart";

function App({routes}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, i)=> (
            <Route path={route.path} element={<route.element />} key={i}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {routes:[
  {path:"/", componentName: VendorMachine},
  {path:"/snikers", componentName: SnickerBar},
  {path:"/clif", componentName: ClifBar},
  {path:"/poptart", componentName: PopTart},
]};
export default App;
