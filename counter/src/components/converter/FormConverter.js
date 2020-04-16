import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const FormConverter = ({onCreate}) => {

    const defaultValue = {
        yourPortionWeight: 0,
        foodName: '',
        portionFat: "0.0",
        portionCrabs: "0.0",
        portionProtein: "0.0",
        portionCkal: 0,
        portionWeight: 100};

    const [value, setValue] = useState(defaultValue);

    const {handleSubmit/*, watch, errors, reset*/} = useForm();

    function substitute(substituteValue) {
        substituteValue = substituteValue.replace(",", ".");
        substituteValue = +substituteValue;
        return substituteValue;
    }

    const onClick =  () => {
        value.portionFat = substitute(value.portionFat);
        value.portionCrabs = substitute(value.portionCrabs);
        value.portionProtein = substitute(value.portionProtein);
        onCreate(value);
        setValue(defaultValue);
    };

    //\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}  ^(?:\d+(?:\.\d+)?)$

    return (            
            <form onSubmit={handleSubmit(onClick)}>
                <label> Your portion weight
                <input name="yourPortionWeight" type="number" 
                value={value.yourPortionWeight} onChange = {e => setValue({...value, yourPortionWeight: e.target.value})}/>
                </label>
                <label> food
                <input name="foodName" type="text" 
                value={value.foodName} onChange = {e => setValue({...value, foodName: e.target.value})}/>
                </label>
                <label> Fat
                <input name="portionFat"  type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                value={value.portionFat} onChange = {e => setValue({...value, portionFat: e.target.value})}/>
                </label>
                <label> Crabs
                <input name="portionCrabs"  type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                value={value.portionCrabs} onChange = {e => setValue({...value, portionCrabs: e.target.value})}/>
                </label>
                <label> Protein
                <input name="portionProtein"  type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                value={value.portionProtein} onChange = {e => setValue({...value, portionProtein: e.target.value})}/>
                </label>
                <label> ckal
                <input name="portionCkal" type="number" 
                value={value.portionCkal} onChange = {e => setValue({...value, portionCkal: e.target.value})}/>
                </label>
                <label> per
                <input name="portionWeight" type="number" 
                value={value.portionWeight} onChange = {e => setValue({...value, portionWeight: e.target.value})}/>
                g
                </label>
                <button type="submit">Add in my lunch</button>
                
            </form> 
    );
};

export default FormConverter;