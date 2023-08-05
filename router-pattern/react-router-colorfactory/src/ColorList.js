import React from "react";
import "./ColorList.css";

const ColorList = ({colors})=>{
    let names = colors.map(c=>c.name).join(",");
    let str = `linear-gradient(${names})`;
    return (
        <div className="ColorList" style={{background: str}}>
        </div>
    );
};

export default ColorList;