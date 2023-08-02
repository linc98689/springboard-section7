import React from "react";
import { useParams } from "react-router-dom";

import { dogsByName } from "./dogs";

const DogDetails = () =>{
    const {name} = useParams();
    const details = dogsByName[name];

    return (
        <>
            <h1>Dog: {name} </h1>
            <h2>Age: {details.age}</h2>
            <img src={details.src} style={{width: "100px", height: "100px"}}  alt="" />
            <ul>
                {details.facts.map(e=>(
                    <li style={{listStyleType: "none"}}>{e}</li>
                ))}
            </ul>
        </>
    );
}

export default DogDetails;