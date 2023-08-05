import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

const Nav = ({names})=>{

    return (
        <div className="Nav-container">
            <div> <NavLink to="/dogs/" className="Nav-link Nav-head " >all dogs</NavLink> </div>
            <div className="Nav-items">
                {names.map((name,i)=>(
                    <NavLink to={`/dogs/${name}`} key={i} className="Nav-link">{name}</NavLink>
                ))}
            </div>
        </div>
    );
}

export default Nav;