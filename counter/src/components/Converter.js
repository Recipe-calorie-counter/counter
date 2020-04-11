import React ,{ useState } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import FormConverter from './converter/FormConverter';
import FoodsList from "./converter/FoodsList";
import Context from "./converter/Context";

const StyledDiv = styled.div `
    width: 1200px;
    height: 500px;
    margin 0 auto;
    padding-top: 20px;
`

const Converter = () => {

    const [foods, setFoods] = useState([]);

    function removeFood(id) {
        setFoods(foods.filter(food => food.id !== id))
    }

    function onCreate(value) {
        setFoods(foods.concat([{
            id: foods.length+1,
            yourPortionWeight: value.yourPortionWeight,
            name: value.foodName,
            portionCkal: value.ckal,
            portionWeight: value.portionWeight,
            ckal100g: (value.ckal/value.portionWeight)*100,
            yourPortionCkal: value.yourPortionWeight*(value.ckal/value.portionWeight),
        }]))
    }

    function change(changevalue) {
        setFoods(
            foods.map(food => {
            if (food.id === changevalue.id) {
                food.yourPortionWeight = changevalue.yourPortionWeight;
                food.name = changevalue.foodName;
                food.portionCkal = changevalue.ckal;
                food.portionWeight = changevalue.portionWeight;
                food.ckal100g = (changevalue.ckal/changevalue.portionWeight)*100;
                food.yourPortionCkal = changevalue.yourPortionWeight*(changevalue.ckal/changevalue.portionWeight);
            }
            return food
            })
        )
    }
        

    return (
        <Context.Provider value={{removeFood}}>
            <div>
                <StyledDiv>
                    <NavLink to = "/" > Back </NavLink>
                    <FormConverter onCreate={onCreate}/>
                    <FoodsList foods={foods} change={change}/>
                </StyledDiv>
                
            </div>
        </Context.Provider>
    );
};

export default Converter;