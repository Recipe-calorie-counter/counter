import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const FormConverter = ({onCreate}) => {

    const [value, setValue] = useState({yourPortionWeight: 0, foodName: '', ckal: 0, portionWeight: 100})

    const {handleSubmit/*, watch, errors, reset*/} = useForm();

    function calculate() {
        let a=value.yourPortionWeight;
        let b=value.ckal;
        let c=value.portionWeight;
        let d=0;
        return d=(b/c)*a;
    }

    const onClick = data => {
        console.log(value);
        calculate(value);
        alert(calculate(value));
        onCreate(value);
        setValue({yourPortionWeight: 0, foodName: '', ckal: 0, portionWeight: 100});
    }

    return (            
            <form onSubmit={handleSubmit(onClick)}>
                <label> Your portion weight
                <input name="yourPortionWeight" type="number" value={value.yourPortionWeight} onChange = {e => setValue({...value, yourPortionWeight: e.target.value})}/>
                </label>
                <label> food
                <input name="foodName" type="text" value={value.foodName} onChange = {e => setValue({...value, foodName: e.target.value})}/>
                </label>
                <label> ckal
                <input name="ckal" type="number" value={value.ckal} onChange = {e => setValue({...value, ckal: e.target.value})}/>
                </label>
                <label> per
                <input name="portionWeight" type="number" value={value.portionWeight} onChange = {e => setValue({...value, portionWeight: e.target.value})}/>
                g
                </label>
                <button type="submit">Add in my lunch</button>
                
            </form> 
    );
};

export default FormConverter;