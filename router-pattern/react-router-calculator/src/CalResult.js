import "./CalResult.css";

import {useParams} from "react-router-dom";

const CalResult = ()=>{
    let {operator, op1, op2} = useParams();
    const mapping = {add:" + ", minus:" - ", multiply:" * ", divide:" / "};
    op1 = Number(op1);
    op2 = Number(op2);
    let result;
    switch(operator.toLowerCase()){
        case "add":
            result = op1 + op2;
            break;
        case "minus":
            result = op1 - op2;
            break;
        case "multiply":
            result = op1 * op2;
            break;
        case "divide":
            try{
                result = op1 / op2;
            }
            catch(e){
                console.log(e.message);
            }
            break;
         default:
            result = "N/A"
    }
    if (!Number.isNaN(result) && !Number.isInteger(result))
        result = Math.round(result*1000)/1000;
    console.log(result);
    return (
        <h2 className="CalResult">{op1.toString() + 
            mapping[operator]+ op2.toString() + 
            " = " + result}</h2>
    );
};

export default CalResult;