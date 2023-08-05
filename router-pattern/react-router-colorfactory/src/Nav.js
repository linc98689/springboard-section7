import React from "react";
import {NavLink} from "react-router-dom";

import "./Nav.css";

const Nav = ({colors})=>{
    return (
        <div className="Nav">
            <h2 className="Nav-title">Menu</h2>
            <ul>
                <li className="Nav-li"><NavLink to="/colors/new" >Add a new color</NavLink></li>
                <li className="Nav-li ">
                    <hr />
                </li>
                <li className="Nav-li"><NavLink to="/colors/" >Show all colors</NavLink></li>
                <li className="Nav-li ">
                    <hr />
                </li>
                <li className="Nav-li Nav-non-li">Show single color</li>
                {colors.map(
                    (c, i)=> <li key={i} className="Nav-li"><NavLink to={`/colors/${c}`}>{c}</NavLink></li>
                )}
            </ul>
        </div>
    );
};

export default Nav;