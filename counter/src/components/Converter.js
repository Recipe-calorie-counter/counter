import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div `
    background-color: red;
    width: 30%;
    height: 100px;
`

const Converter = () => {
    return (
        <div>
            <StyledDiv>
                <p className="hello">Hello</p>
            </StyledDiv>
            <NavLink to="/">Back</NavLink>
        </div>
    );
};

export default Converter;