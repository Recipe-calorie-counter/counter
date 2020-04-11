import React from "react";
import FoodsItem from "./FoodsItem";

function FoodsList(props) {
    return (
        <ul>
            {props.foods.map((food, index) => {
                return <FoodsItem food={food} key={food.id} index={index} onChange={props.change}/>
            })}
        </ul>
    )
}

export default FoodsList