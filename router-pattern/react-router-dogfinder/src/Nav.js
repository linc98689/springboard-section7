import React from "react";
import {Link} from "react-router-dom";

const Nav = ({names})=>{

    return (
        <div>
            <div> <Link to="/dogs" className="App-link" >all dogs</Link> </div>
            <div>
                {names.map((name,i)=>(
                    <Link to={`/dogs/${name}`} key={i} className="App-link">{name}</Link>
                ))}
            </div>
        </div>
    );
}

export default Nav;