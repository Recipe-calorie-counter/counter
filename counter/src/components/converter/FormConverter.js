import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const FormConverter = ({onCreate}) => {

    const defaultValue = {yourPortionWeight: 0, foodName: '', ckal: 0, portionWeight: 100};

    const [value, setValue] = useState(defaultValue);

    const {handleSubmit/*, watch, errors, reset*/} = useForm();

    const onClick = data => {
        onCreate(value);
        setValue(defaultValue);
    };

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