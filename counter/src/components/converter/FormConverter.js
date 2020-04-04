import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const FormConverter = ({onCreate}) => {

    const [value, setValue] = useState({foodName: '', ckal: ''})

    const {handleSubmit/*, watch, errors, reset*/} = useForm();

    const onClick = data => {
        console.log(value);
        onCreate(value);
    }

    return (            
            <form onSubmit={handleSubmit(onClick)}>
                <label> food
                <input type="text" value={value.foodName} onChange = {e => setValue({...value, foodName: e.target.value})}/>
                </label>
                <label> ckal per 100g
                <input type="text" value={value.ckal} onChange = {e => setValue({...value, ckal: e.target.value})}/>
                </label>
                <button type="submit">Add in my lunch</button>
            </form> 
    );
};

export default FormConverter;