import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const CommonForm = ({defaultValue, onClick}) => {

    const [value, setValue] = useState(defaultValue);

    const {handleSubmit/*, watch, errors, reset*/} = useForm();

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    function substitute(substituteValue) {
        substituteValue = substituteValue.replace(",", ".");
        substituteValue = +substituteValue;
        return substituteValue;
    }

    const onClicking = () => {
        value.portionFat = substitute(value.portionFat);
        value.portionCrabs = substitute(value.portionCrabs);
        value.portionProtein = substitute(value.portionProtein);
        onClick(value);
        setValue(defaultValue);
    };

    return (            
        <form onSubmit={handleSubmit(onClicking)}>
            <label htmlFor="yourPortionWeight"> Your dish weight, grams
            <input name="yourPortionWeight" type="number" id="yourPortionWeight"
            value={value.yourPortionWeight} onChange = {handleChange}/>
            </label>
            <label htmlFor="foodName"> food
            <input name="foodName" type="text" id="foodName"
            value={value.foodName} onChange = {handleChange}/>
            </label>
            <label htmlFor="portionFat"> Fat
            <input name="portionFat"  type="text" id="portionFat" pattern="^(?:\d+(?:[.,]\d+)?)$"
            value={value.portionFat} onChange = {handleChange}/>
            </label>
            <label htmlFor="portionCrabs"> Crabs
            <input name="portionCrabs"  type="text" id="portionCrabs" pattern="^(?:\d+(?:[.,]\d+)?)$"
            value={value.portionCrabs} onChange = {handleChange}/>
            </label>
            <label htmlFor="portionProtein"> Protein
            <input name="portionProtein"  type="text" id="portionProtein" pattern="^(?:\d+(?:[.,]\d+)?)$"
            value={value.portionProtein} onChange = {handleChange}/>
            </label>
            <label htmlFor="portionCkal"> ckal
            <input name="portionCkal" type="number" id="portionCkal"
            value={value.portionCkal} onChange = {handleChange}/>
            </label>
            <label htmlFor="portionWeight"> per
            <input name="portionWeight" type="number" id="portionWeight"
            value={value.portionWeight} onChange = {handleChange}/>
            g
            </label>
            <button type="submit">Add in my lunch</button>
            
        </form> 
    );
}

export default CommonForm;