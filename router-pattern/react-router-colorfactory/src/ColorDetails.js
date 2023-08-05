import React from "react";
import { useParams, Navigate } from "react-router-dom";

import "./ColorDetails.css";

const ColorDetails = ({colors} )=>{
    const {name }= useParams();
    let match = colors.find(c=>c.name.toLowerCase() === name.toLowerCase());

    if (!match)
       return <Navigate to="/colors/" />
    else{
        let colorValue = match.value;
        return (
            <div className="ColorDetails" style={{backgroundColor: colorValue}}></div>
        );
    }
};

export default ColorDetails;