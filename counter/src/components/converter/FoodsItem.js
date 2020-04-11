import React , {useContext} from "react";
import { useState } from "react";
import Context from "./Context";
//import { useForm } from 'react-hook-form';

function FoodsItem({food, index, onChange}) {

const {removeFood} = useContext(Context);

//const {handleSubmit} = useForm();

const [editing, setEditing] = useState(false);

const [changeValue, setChangeValue] = useState({
    id: food.id,
    yourPortionWeight: food.yourPortionWeight,
    foodName: food.name, 
    ckal: food.portionCkal, 
    portionWeight: food.portionWeight,
});

const editValue = changeValue => {
    setEditing(true);
    setChangeValue(changeValue);
  };

const onClick = data => {
    setEditing(false);
    onChange(changeValue);
};

    return (
        <li>{index+1}
            &nbsp;
            {food.name}
            &nbsp;
            Your portion ckal: {food.yourPortionCkal}
            &nbsp;
            <button onClick={() => editValue(changeValue)}>edit</button>
            <button onClick={removeFood.bind(null, food.id)}>&times;</button>

            {editing && (
                        
                <form onSubmit={onClick}>

                    <label> Your portion weight
                    <input name="yourPortionWeight" type="number" value={changeValue.yourPortionWeight}
                    onChange = {e => setChangeValue({...changeValue, yourPortionWeight: e.target.value})}/>
                    </label>
                    <label> food
                    <input name="foodName" type="text" 
                    value={changeValue.foodName} onChange = {e => setChangeValue({...changeValue, foodName: e.target.value})}/>
                    </label>
                    <label> ckal
                    <input name="ckal" type="number" 
                    value={changeValue.ckal} onChange = {e => setChangeValue({...changeValue, ckal: e.target.value})}/>
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