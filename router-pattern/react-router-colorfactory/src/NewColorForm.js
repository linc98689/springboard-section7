import "./NewColorForm.css";

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const NewColorForm = ({addColor})=>{
    const [formData, setFormData] = useState({});
    let navigate = useNavigate();

    const handleChange = (evt)=>{
        let name = evt.target.name;
        let value = evt.target.value;
        setFormData((data) => ({...data, [name]: value}));
    };

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        if(formData === {} || formData.name === undefined 
            || formData.name==="" || formData.value === undefined)
            return;
        addColor(formData);
        navigate("/colors/");
    };

    return (
        <div>
            <h2>Make a new color</h2>
            <form>
                <input type="text" name="name" placeholder="color name"
                onChange={handleChange} />
                <label>Choose color: </label>
                <input type="color" name="value" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Make It</button>
            </form>
        </div>
    );
};

export default NewColorForm;