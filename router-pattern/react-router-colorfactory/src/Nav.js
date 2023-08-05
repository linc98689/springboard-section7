import React from "react";
import {NavLink} from "react-router-dom";

import "./Nav.css";

const Nav = ({colors})=>{
    return (
        <div>
            <h2>Nav Bar</h2>
            <ul>
                <li className="Nav-li"><NavLink to="/colors/new" >Add a new color</NavLink></li>
                <li className="Nav-li"><NavLink to="/colors/" >all colors</NavLink></li>
                {colors.map(
                    (c, i)=> <li key={i} className="Nav-li"><NavLink to={`/colors/${c}`}>{c}</NavLink></li>
                )}
            </ul>
        </div>
    );
};

export default Nav;