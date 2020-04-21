import React , {useContext} from "react";
import { useState } from "react";
import Context from "./Context";
import CommonForm from "./CommonForm";

function FoodsItem({food, index, onChange}) {

const {removeFood} = useContext(Context);

const [editing, setEditing] = useState(false);

const defaultValue = {
    id: food.id,
    yourPortionWeight: food.yourPortionWeight,
    foodName: food.name, 
    portionFat: String(food.portionFat),
    portionCrabs: String(food.portionCrabs),
    portionProtein: String(food.portionProtein),
    portionCkal: food.portionCkal, 
    portionWeight: food.portionWeight
};


const editValue = () => {
    setEditing(true);
    //setChangeValue(changeValue);
  };

const onClick = () => {
    setEditing(false);
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
            <button onClick={() => editValue()}>edit</button>
            <button onClick={removeFood.bind(null, food.id)}>&times;</button>
            {console.log(food)}

            {editing && (

                <div>
                <CommonForm defaultValue={defaultValue} onClick={onClick} onChange={onChange}/>
                <button onClick={() => setEditing(false)}>cancel</button>
                </div>
                        
            )}
            
        </li>         
    )
}

export default FoodsItem