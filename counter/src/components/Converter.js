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
    function per100g(PortionValue, values) {
        let on100g = (PortionValue/values.portionWeight)*100;
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

    function change(changeValue) {
        setFoods(
            foods.map(food => {
            if (food.id === changeValue.id) {
                food.yourPortionWeight = changeValue.yourPortionWeight;
                food.name = changeValue.foodName;
                food.portionFat = changeValue.portionFat;
                food.portionCrabs = changeValue.portionCrabs;
                food.portionProtein = changeValue.portionProtein;
                food.portionCkal = changeValue.portionCkal;                
                food.portionWeight = changeValue.portionWeight;
                food.fat100g = per100g(changeValue.portionFat, changeValue);
                food.yourPortionFat= yourPortion(changeValue.portionFat, changeValue);
                food.crabs100g= per100g(changeValue.portionCrabs, changeValue);
                food.yourPortionCrabs= yourPortion(changeValue.portionCrabs, changeValue);
                food.protein100g= per100g(changeValue.portionProtein, changeValue);
                food.yourPortionProtein= yourPortion(changeValue.portionProtein, changeValue);
                food.ckal100g = per100g(changeValue.portionCkal, changeValue);
                food.yourPortionCkal = yourPortion(changeValue.portionCkal, changeValue);
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