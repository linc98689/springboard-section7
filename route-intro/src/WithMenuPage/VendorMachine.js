import React from 'react';
import {Link} from "react-router-dom";

const VendorMachine = ()=>{

    return (
        <div>
            <h1>Vendor Machine</h1>
                <Link to="/snickers" className="link">Snickers Bar</Link>
                <Link to="/clif" className="link">Clif Bars</Link>
                <Link to="/poptart" className="link"> Pop-Tart</Link>
        </div>
    );
}

export default VendorMachine;