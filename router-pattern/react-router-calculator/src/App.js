import './App.css';

import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import CalForm from "./CalForm";
import CalResult from "./CalResult";

function App() {
  // let navigate = useNavigate();
  // useEffect(()=>{
  //   navigate("./add/0/0");
  // }, []);

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <BrowserRouter>
        <CalForm />
        <Routes>
          {/* <Route path="/" element={<CalForm></CalForm>} /> */}
          <Route path="/:operator/:op1/:op2" element={<CalResult />}></Route>
          <Route path="*" element={<Navigate to="/add/0/0"></Navigate> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
