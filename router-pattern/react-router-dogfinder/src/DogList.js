import React from "react";

const DogList = ({dogs}) =>{
    return (
        <div className="DogList-container">
            <h1>Dog List</h1>
            {dogs.map((dog, i)=>(
                <img src={dog.src} style={{width: "100px", height: "100px"}} key={i} alt="" />
            ))}
        </div>

    );
}

export default DogList;