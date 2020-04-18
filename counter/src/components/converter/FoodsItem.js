import React , {useContext} from "react";
import { useState } from "react";
import Context from "./Context";
import { useForm } from 'react-hook-form';

function FoodsItem({food, index, onChange}) {

const {removeFood} = useContext(Context);

const {handleSubmit} = useForm();

const [editing, setEditing] = useState(false);

const [changeValue, setChangeValue] = useState({
    id: food.id,
    yourPortionWeight: food.yourPortionWeight,
    foodName: food.name, 
    portionFat: String(food.portionFat),
    portionCrabs: String(food.portionCrabs),
    portionProtein: String(food.portionProtein),
    portionCkal: food.portionCkal, 
    portionWeight: food.portionWeight,
});

const editValue = changeValue => {
    setEditing(true);
    setChangeValue(changeValue);
  };

function substituting(valueChange) {
    valueChange = valueChange.replace(",", ".");
    valueChange = +valueChange;
        return valueChange;
}

const onClick = () => {
    changeValue.portionFat = substituting(changeValue.portionFat);
    changeValue.portionCrabs = substituting(changeValue.portionCrabs);
    changeValue.portionProtein = substituting(changeValue.portionProtein);
    setEditing(false);
    onChange(changeValue);
};

    return (
        <li>{index+1}
            &nbsp;
            {food.name}
            &nbsp;
            Your portion fat: {food.yourPortionFat.toFixed(1)}
            &nbsp;
            Your portion crabs: {food.yourPortionCrabs.toFixed(1)}
            &nbsp;
            Your portion protein: {food.yourPortionProtein.toFixed(1)}
            &nbsp;
            Your portion ckal: {Math.round(food.yourPortionCkal)}
            &nbsp;
            <button onClick={() => editValue(changeValue)}>edit</button>
            <button onClick={removeFood.bind(null, food.id)}>&times;</button>

            {editing && (
                        
                <form onSubmit={handleSubmit(onClick)}>

                    <label> Your dish weight, grams
                    <input name="yourPortionWeight" type="number" value={changeValue.yourPortionWeight}
                    onChange = {e => setChangeValue({...changeValue, yourPortionWeight: e.target.value})}/>
                    </label>
                    <label> food
                    <input name="foodName" type="text" 
                    value={changeValue.foodName} onChange = {e => setChangeValue({...changeValue, foodName: e.target.value})}/>
                    </label>
                    <label> Fat
                    <input name="portionFat" type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                    value={changeValue.portionFat} onChange = {e => setChangeValue({...changeValue, portionFat: e.target.value})}/>
                    </label>
                    <label> Crabs
                    <input name="portionCrabs" type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                    value={changeValue.portionCrabs} onChange = {e => setChangeValue({...changeValue, portionCrabs: e.target.value})}/>
                    </label>
                    <label> Protein
                    <input name="portionProtein" type="text" pattern="^(?:\d+(?:[.,]\d+)?)$"
                     value={changeValue.portionProtein} onChange = {e => setChangeValue({...changeValue, portionProtein: e.target.value})}/>
                    </label>
                    <label> ckal
                    <input name="portionCkal" type="number" 
                    value={changeValue.portionCkal} onChange = {e => setChangeValue({...changeValue, portionCkal: e.target.value})}/>
                    </label>
                    <label> per
                    <input name="portionWeight" type="number" 
                    value={changeValue.portionWeight} onChange = {e => setChangeValue({...changeValue, portionWeight: e.target.value})}/>
                    g
                    </label>
                
                    <button type="submit">save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                
                </form>
            )}
            
        </li>         
    )
}

export default FoodsItem