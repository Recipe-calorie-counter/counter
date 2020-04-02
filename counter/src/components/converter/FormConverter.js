import React from "react";

const FormConverter = (props) => {

    return (            
            <form onSubmit={props.calculate}>
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
    );
};

export default FormConverter;