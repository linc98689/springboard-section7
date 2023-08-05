import React from "react";
import "./ColorList.css";

const ColorList = ({colors})=>{
    let values = colors.map(c=>c.value).join(",");
    let str = `linear-gradient(${values})`;
    return (
        <div className="ColorList" style={{background: str}}>
        </div>
    );
};

export default ColorList;