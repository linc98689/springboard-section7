import React from "react";
import { useParams, Navigate } from "react-router-dom";

import { dogsByName } from "./dogs";

const capitalize = (str)=>{
    let first = str.charAt(0).toUpperCase();
    return first + str.toLowerCase().substr(1);
};

const DogDetails = () =>{
    const {name} = useParams();
    const details = dogsByName[name];

    return (
        details === undefined ? <Navigate to="/dogs" ></Navigate> :
        <>
            <h1>Dog: {capitalize(name)} </h1>
            <h2>Age: {details.age}</h2>
            <img src={details.src} style={{width: "100px", height: "100px"}}  alt="" />
            <ul>
                {details.facts.map((e,i)=>(
                    <li style={{listStyleType: "none"}} key={i}>{e}</li>
                ))}
            </ul>
        </>
    );
}

export default DogDetails;