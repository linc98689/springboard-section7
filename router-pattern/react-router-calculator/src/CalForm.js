import "./CalForm.css";

import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const CalForm = () =>{
    const [formData, setFormData] = useState({operator:"add", op1:0, op2:0});
    const navigate = useNavigate();
    // const calResult = (data) =>{
    //     let {operator, op1, op2} = data;
    //     let result;
    //     switch(operator.toLowerCase()){
    //         case "add":
    //             result = op1 + op2;
    //             break;
    //         case "minus":
    //             result = op1 - op2;
    //             break;
    //         case "multiply":
    //             result = op1 * op2;
    //             break;
    //         case "divide":
    //             try{
    //                 result = op1 / op2;
    //             }
    //             catch(e){
    //                 console.log(e.message);
    //             }
    //             break;
    //         default:
    //             result = "N/A"
    //     }
    //     return result;
    // };

    const handleChange = (evt) =>{
        let target = evt.target;
        // let obj = {...formData, [target.name]:target.value};
        // let result = calResult(obj);
        // refResult.current.innerHTML = result.toString();
        setFormData(data => ({...data, [target.name]:target.value}));
    };
    
    const handleSubmit = (evt) =>{
        console.log(formData);
        evt.preventDefault();
        let str = `/${formData.operator}/${formData.op1}/${formData.op2}`;
        console.log(str);
        setFormData(data=>({operator:"add", op1:0, op2:0}));
        navigate(str);

    };

    return (
        <form>
            <input type="number" name="op1" placeholder="operand 1"  value={formData.op1}
            onChange={handleChange}/>
            <input type="number" name="op2" placeholder="operand 2"  value ={formData.op2}
            onChange={handleChange}/>
            <select name="operator" value={formData.operator}
            onChange ={handleChange} >
                <option value="add">+</option>
                <option value="minus">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <button type="submit" onClick={handleSubmit} >get result</button>
        </form>
    );
}

export default CalForm;

