import React from "react";
import {
    NavLink
} from "react-router-dom";
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import FormConverter from './converter/FormConverter';

const StyledDiv = styled.div `
    background-color: #99ffff;
    width: 1200px;
    height: 500px;
    margin 0 auto;
    padding-top: 20px;
`

const Converter = () => {

    function handleSubmit(e) {
        alert('Stop eating!');
        e.preventDefault();
      }

    return ( 
        <div>
            <StyledDiv>
                <NavLink to = "/" > Back </NavLink> 
                <FormConverter handleSubmit={handleSubmit} />
            </StyledDiv>
            
        </div>
    );
};

export default Converter;