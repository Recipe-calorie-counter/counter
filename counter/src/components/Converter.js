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
            yourPortionWeigh: value.yourPortionWeigh,
            name: value.foodName,
            ckal: value.ckal,
            portionWeight: value.portionWeight
        }]))
    }

    return (
        <Context.Provider value={{removeFood}}>
            <div>
                <StyledDiv>
                    <NavLink to = "/" > Back </NavLink>
                    <FormConverter onCreate={onCreate}/>
                    <FoodsList foods={foods}/>
                </StyledDiv>
                
            </div>
        </Context.Provider>
    );
};

export default Converter;