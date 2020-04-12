import React ,{ useState } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import FormConverter from './converter/FormConverter';
import FoodsList from "./converter/FoodsList";
import Context from "./converter/Context";
import Total from "./converter/Total";

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
            portionFat: +value.portionFat,
            portionCrabs: +value.portionCrabs,
            portionProtein: +value.portionProtein,
            portionCkal: value.portionCkal,
            portionWeight: value.portionWeight,
            fat100g: (+value.portionFat/value.portionWeight)*100,
            yourPortionFat: value.yourPortionWeight*(+value.portionFat/value.portionWeight),
            crabs100g: (+value.portionCrabs/value.portionWeight)*100,
            yourPortionCrabs: value.yourPortionWeight*(+value.portionCrabs/value.portionWeight),
            protein100g: (+value.portionProtein/value.portionWeight)*100,
            yourPortionProtein: +value.yourPortionWeight*(+value.portionProtein/value.portionWeight),
            ckal100g: (value.portionCkal/value.portionWeight)*100,
            yourPortionCkal: value.yourPortionWeight*(value.portionCkal/value.portionWeight),
        }]))
    }

    function change(changeValue) {
        setFoods(
            foods.map(food => {
            if (food.id === changeValue.id) {
                food.yourPortionWeight = changeValue.yourPortionWeight;
                food.name = changeValue.foodName;
                food.portionFat = changeValue.portionFat;
                food.portionWeight = changeValue.portionWeight;
                food.portionCrabs = +changeValue.portionCrabs;
                food.portionProtein = +changeValue.portionProtein;
                food.portionCkal = +changeValue.portionCkal;
                food.fat100g = (+changeValue.portionFat/changeValue.portionWeight)*100;
                food.yourPortionFat= changeValue.yourPortionWeight*(+changeValue.portionFat/changeValue.portionWeight);
                food.crabs100g= (+changeValue.portionCrabs/changeValue.portionWeight)*100;
                food.yourPortionCrabs= changeValue.yourPortionWeight*(+changeValue.portionCrabs/changeValue.portionWeight);
                food.protein100g= (+changeValue.portionProtein/changeValue.portionWeight)*100;
                food.yourPortionProtein= changeValue.yourPortionWeight*(+changeValue.portionProtein/changeValue.portionWeight);
                food.ckal100g = (changeValue.portionCkal/changeValue.portionWeight)*100;
                food.yourPortionCkal = changeValue.yourPortionWeight*(changeValue.portionCkal/changeValue.portionWeight);
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
                    <Total foods={foods}/>
                </StyledDiv>
                
            </div>
        </Context.Provider>
    );
};

export default Converter;