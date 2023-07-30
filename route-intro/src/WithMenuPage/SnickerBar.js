import React from 'react';
import {Link} from 'react-router-dom';

const SnickerBar = ()=>{
    return (
        <>
        <h2>Snickers Bar</h2>
        <Link to="/" className="link">Go Back</Link>
        </>
    );
}

export default SnickerBar;
