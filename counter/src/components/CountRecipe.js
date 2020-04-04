import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import { useForm } from 'react-hook-form'

const CountRecipe = () => {

    const blankRecipe = { name: "", ckal100: 0, fat: 0, carbs: 0, protein: 0, weight: 0 };
    const [ingredients, setIngredients] = useState([{}]);
    const [recipe, setRecipe] = useState({
        ckalTotal: 0,
        fat: 0,
        carbs: 0,
        protein: 0
    });

    const { register, handleSubmit/*, watch, errors, reset */ } = useForm();

    const onSubmit = data => {
        console.log(data);
        var ol = Object.keys(ingredients);
        console.log(ol.length);
        console.log(recipe);
    }

    const addNewRow = () => {
        setIngredients([...ingredients, {...blankRecipe}]);
    };

    return (
        <div>
            <NavLink to="/">Back</NavLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="totalWeight">Total weight of your dish, grams:&#8201;</label>
                <input
                    ref={register}
                    name="totalWeight"
                    id="totalWeight"
                    type="number"
                    placeholder="100"
                />
                <h3>Ingredients:</h3>
                    { 
                        ingredients.map((val, idx) => {
                            const nameID = `name-${idx}`;
                            const ckal100ID = `ckal100-${idx}`;
                            const fatID = `fat-${idx}`;
                            const carbsID = `carbs-${idx}`;
                            const proteinID = `protein-${idx}`;
                            const weightID = `weight-${idx}`;
                        return (
                            <div key={`ingredient-${idx}`}>
                                <label htmlFor={nameID}>{`Ingredient #${idx + 1}`} 
                                <input
                                    ref={register}
                                    id={nameID}
                                    type="text"
                                    name={nameID}
                                    data-idx={idx}
                                    placeholder="milk 2.5%"
                                />
                                </label>
                                <label htmlFor={ckal100ID}>ckal per 100 grams: 
                                <input
                                    ref={register}
                                    id={ckal100ID}
                                    type="text"
                                    name={ckal100ID}
                                    data-idx={idx}
                                    placeholder="52"
                                />
                                </label>
                                <label htmlFor={fatID}>Total Fat: 
                                <input
                                    ref={register}
                                    id={fatID}
                                    type="text"
                                    name={fatID}
                                    data-idx={idx}
                                    placeholder="2.5"
                                />
                                </label>
                                <label htmlFor={carbsID}>Total Carbohydrate: 
                                <input
                                    ref={register}
                                    id={carbsID}
                                    type="text"
                                    name={carbsID}
                                    data-idx={idx}
                                    placeholder="4.7"
                                />
                                </label>
                                <label htmlFor={proteinID}>Protein: 
                                <input
                                    ref={register}
                                    id={proteinID}
                                    type="text"
                                    name={proteinID}
                                    data-idx={idx}
                                    placeholder="2.8"
                                />
                                </label>
                                <label htmlFor={weightID}>Weight, grams: 
                                <input
                                    ref={register}
                                    id={weightID}
                                    type="text"
                                    name={weightID}
                                    data-idx={idx}
                                    placeholder="200"
                                />
                                </label>
                            </div>
                        )
                    })
                    }
                <button onClick = {addNewRow}>Add ingredient</button>
                <button  type="submit" className="submitbutton">Submit</button>
            </form>
            <p>In your dish there are {recipe.ckalTotal}ckal per 100gram, including {recipe.fat}g of fat, {recipe.carbs}g of carbs and {recipe.protein}g of protein</p>
        </div>
    );
};

export default CountRecipe;