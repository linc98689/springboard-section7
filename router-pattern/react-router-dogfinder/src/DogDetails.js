import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = () =>{
    const {name} = useParams();
    return (
        <h1>Dog: {name} </h1>
    );
}

export default DogDetails;