import React ,{ useState } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import FormConverter from './converter/FormConverter';
import FoodsList from "./converter/FoodsList";
import Context from "./converter/Context";

const StyledDiv = styled.div `
    background-color: #99ffff;
    width: 1200px;
    height: 500px;
    margin 0 auto;
    padding-top: 20px;
`

const Converter = () => {

    const [foods, setFoods] = useState([{
        id: 1,
        name: "",
        ckal: ""
    }]);

    function removeFood(id) {
        setFoods(foods.filter(food => food.id !== id))
    }

    function onCreate(value) {
        setFoods(foods.concat([{
            id: Date.now(),
            name: value.foodName,
            ckal: value.ckal
        }]))

        console.log(foods);
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