import React from "react";
import {
    NavLink
} from "react-router-dom";
import styled from "styled-components";
import FormConverter from './converter/FormConverter';

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
            <FormConverter calculate={handleSubmit} />
            
        </div>
    );
};

export default Converter;