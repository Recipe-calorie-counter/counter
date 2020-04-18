import React ,{ useState } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import FormConverter from './converter/FormConverter';
import FoodsList from "./converter/FoodsList";
import Context from "./converter/Context";
import Total from "./converter/Total";

const StyledDiv = styled.div `
    width: 1230px;
    margin 0 auto;
    padding-top: 20px;
`

const Converter = () => {

    const [foods, setFoods] = useState([]);

    function removeFood(id) {
        setFoods(foods.filter(food => food.id !== id))
    }
    
    function yourPortion(yourPortionValue, value) {
        let portion = (yourPortionValue/value.portionWeight)*value.yourPortionWeight;
        return portion;
    }
    function per100g(portionValue, values) {
        let on100g = (portionValue/values.portionWeight)*100;
        return on100g;
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
            fat100g: per100g(value.portionFat, value),
            yourPortionFat: yourPortion(value.portionFat, value),
            crabs100g: per100g(value.portionCrabs, value),
            yourPortionCrabs: yourPortion(value.portionCrabs, value),
            protein100g: per100g(value.portionProtein, value),
            yourPortionProtein: yourPortion(value.portionProtein, value),
            ckal100g: per100g(value.portionCkal, value),
            yourPortionCkal: yourPortion(value.portionCkal, value),
        }]))
    }

    function change(value) {
        setFoods(
            foods.map(food => {
            if (food.id === value.id) {
                food.yourPortionWeight = value.yourPortionWeight;
                food.name = value.foodName;
                food.portionFat = value.portionFat;
                food.portionCrabs = value.portionCrabs;
                food.portionProtein = value.portionProtein;
                food.portionCkal = value.portionCkal;                
                food.portionWeight = value.portionWeight;
                food.fat100g = per100g(value.portionFat, value);
                food.yourPortionFat= yourPortion(value.portionFat, value);
                food.crabs100g= per100g(value.portionCrabs, value);
                food.yourPortionCrabs= yourPortion(value.portionCrabs, value);
                food.protein100g= per100g(value.portionProtein, value);
                food.yourPortionProtein= yourPortion(value.portionProtein, value);
                food.ckal100g = per100g(value.portionCkal, value);
                food.yourPortionCkal = yourPortion(value.portionCkal, value);
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