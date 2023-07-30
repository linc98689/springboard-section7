import React from 'react';
import {Link} from 'react-router-dom';

const ClifBar = ()=>{
    return (
        <>
        <h2>Clif Bar</h2>
        <Link to="/" className="link">Go Back</Link>
        </>
    );
}

export default ClifBar;