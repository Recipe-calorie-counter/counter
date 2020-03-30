import React from "react";
import {NavLink} from "react-router-dom";

const NavWrapper = () => {
    return (
        <div>
            <NavLink to="/converter">Converter</NavLink>
            <NavLink to="/countRecipe">Count Recipe</NavLink>
        </div>
    );
};

export default NavWrapper;