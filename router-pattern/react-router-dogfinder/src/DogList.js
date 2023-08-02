import React from "react";
import {Link} from "react-router-dom";

const DogList = ({dogs}) =>{
    return (
        <div className="DogList-container">
            <h1>Dog List</h1>
            {dogs.map((dog, i)=>(
                <Link to={`/dogs/${dog.name}`}>
                <img src={dog.src} style={{width: "100px", height: "100px"}} key={i} alt="" />
                </Link>
            ))}
        </div>

    );
}

export default DogList;