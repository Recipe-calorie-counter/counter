import React from "react";
import {
    NavLink
} from "react-router-dom";
import styled from "styled-components";
//import FormConverter from './converter/FormConverter';

const StyledDiv = styled.div `
    background-color: #99ffff;
    width: 30%;
    height: 100px;
`

const Converter = () => {

    function handleSubmit(e) {
        alert('Stop eating!');
        e.preventDefault();
      }

    return ( 
        <div>
            <StyledDiv>
                <p className = "hello"> Hello </p> 
            </StyledDiv>
            <NavLink to = "/" > Back </NavLink> 
            <form onSubmit={handleSubmit}>
                <label>
                    Food:
                    <input type ="text" name="food"/> 
                </label> 
                <label>
                    Weight(g):
                    <input type ="text" name="Weight"/> 
                </label> 
                <label>
                    Kkal:
                    <input type ="text" name="Kkal"/> 
                </label> 
                <button type="submit">Calculate</button>
            </form> 
            
        </div>
    );
};

export default Converter;