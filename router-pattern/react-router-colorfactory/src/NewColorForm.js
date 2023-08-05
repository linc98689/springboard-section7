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
        addColor(formData);
        navigate("/colors/");
    };

    return (
        <div>
            <h2>Make a new color</h2>
            <form>
                <input type="text" name="name" placeholder="color name"
                onChange={handleChange} />
                <input type="color" name="value" onChange={handleChange} />
                <button type="submit" onSubmit={handleSubmit}>Make It</button>
            </form>
        </div>
    );
};

export default NewColorForm;