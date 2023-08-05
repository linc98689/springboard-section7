import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

const DogList = ({dogs}) =>{
    return (
        <div className="DogList-container">
            <h1>Dog List</h1>
            {dogs.map((dog, i)=>(
                <Link to={`/dogs/${dog.name}`} key={i} className="Nav-link">
                <img src={dog.src} style={{width: "100px", height: "100px"}} alt="" />
                </Link>
            ))}
        </div>

    );
}

export default DogList;