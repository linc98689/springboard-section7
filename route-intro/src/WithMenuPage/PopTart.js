import React from 'react';
import {Link} from 'react-router-dom';

const PopTart = ()=>{
    return (
        <>
        <h2>Pop Tarts</h2>
        <Link to="/" className="link">Go Back</Link>
        </>
    );
}

export default PopTart;