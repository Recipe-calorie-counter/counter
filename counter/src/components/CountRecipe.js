import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const defaultIngredient = [
    {
        ingredientName: "",
        ckal100: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        weight: 0
    },
];


const CountRecipe = () => {

    const { register, handleSubmit } = useForm();

    const [ingredients, setIngredients] = useState(defaultIngredient);

    const blankRecipe = { name: "", ckal100: 0, fat: 0, carbs: 0, protein: 0 }; //not sure that I'll need it yet

    const [recipe, setRecipe] = useState({
        name: "",
        ckalTotal: 0,
        fat: 0,
        carbs: 0,
        protein: 0
    });

    const handleIngredientsChange = event => {
        const _tempIngredients = [...ingredients];
        _tempIngredients[event.target.dataset.id][event.target.name] = event.target.value;
    
        setIngredients(_tempIngredients);
    };

    const addNewIngredient = data => {
        setIngredients(prevIngredients => [...prevIngredients, { ingredientName: "", ckal100: 0, fat: 0, carbs: 0, protein: 0, weight: 0 },]);
        console.log(ingredients);
    };

    const onSubmit = data => { //need to refactor... 
        /*
        =====================================================================================
        1. array with index for each ingredient
        2. on submit need to get last ingredient? Double check
        3. Count data for recipe
        4. Set recipe
        5. in future send data to server
        5. send user to the page with the list of recipes or converter...
        =====================================================================================
         */
        // console.log(data);
        // var ol = Object.keys(ingredients);
        // let ck = 0;
        // let ft = 0;
        // let cr = 0;
        // let pr = 0;
        // for (let i=0; i< ol.length; i++) {
        //     ck += Number(data[`ckal100-${i}`])*Number(data[`weight-${i}`])/100;
        //     ft += Number(data[`fat-${i}`])*Number(data[`weight-${i}`])/100;
        //     cr += Number(data[`carbs-${i}`])*Number(data[`weight-${i}`])/100;
        //     pr += Number(data[`protein-${i}`])*Number(data[`weight-${i}`])/100;
        // }
        // // setIngredients({
        // //     ...ingredients,
        // //     ckal100ID: ck
        // // })
        // setRecipe({
        //     ckalTotal: ck/Number(data.totalWeight)*100,
        //     fat: ft/Number(data.totalWeight)*100,
        //     carbs: cr/Number(data.totalWeight)*100,
        //     protein: pr/Number(data.totalWeight)*100
        // });
        // console.log(recipe);
    }

    
    // function handleRemove(i) {
    //     setIngredients([...ingredients.slice(0, i), ...ingredients.slice(i + 1)]);
    // }

    return (
        <div>
            <NavLink to="/">Back</NavLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="recipeName">Name of your recipe:&#8201;</label>
                <input 
                    ref={register}
                    name="recipeName"
                    id="recipeName"
                    type="text"
                    placeholder="name"
                />
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
                        ingredients.map((item, index) => (
                            <div key={index}>
                                <label htmlFor="ingredientName">{`Ingredient #${index + 1}`} 
                                <input
                                    id="ingredientName"
                                    type="text"
                                    name="ingredientName"
                                    data-id={index}
                                    value={item.ingredientName}
                                    onChange={ handleIngredientsChange }
                                    placeholder="milk 2.5%"
                                />
                                </label>
                                <label htmlFor="ckal100">ckal per 100 grams: 
                                <input
                                    id="ckal100"
                                    type="text"
                                    name="ckal100"
                                    data-id={index}
                                    value={item.ckal100}
                                    onChange={ handleIngredientsChange }
                                    placeholder="52"
                                />
                                </label>
                                <label htmlFor="fat">Total Fat: 
                                <input
                                    id="fat"
                                    type="text"
                                    name="fat"
                                    data-id={index}
                                    value={item.fat}
                                    onChange={ handleIngredientsChange }
                                    placeholder="2.5"
                                />
                                </label>
                                <label htmlFor="carbs">Total Carbohydrate: 
                                <input
                                    id="carbs"
                                    type="text"
                                    name="carbs"
                                    data-id={index}
                                    value={item.carbs}
                                    onChange={ handleIngredientsChange }
                                    placeholder="4.7"
                                />
                                </label>
                                <label htmlFor="protein">Protein: 
                                <input
                                    id="protein"
                                    type="text"
                                    name="protein"
                                    data-id={index}
                                    value={item.protein}
                                    onChange={ handleIngredientsChange }
                                    placeholder="2.8"
                                />
                                </label>
                                <label htmlFor="weight">Weight, grams: 
                                <input
                                    id="weight"
                                    type="text"
                                    name="weight"
                                    data-id={index}
                                    value={item.weight}
                                    onChange={ handleIngredientsChange }
                                    placeholder="200"
                                />
                                </label>
                            </div>
                        ))}
                <button onClick = {addNewIngredient}>Add ingredient</button>
                <button  type="submit" className="submitbutton">Submit</button>
            </form>
            <p>In your dish there are {Math.round(recipe.ckalTotal)}ckal per 100gram, including {recipe.fat.toPrecision(3)}g of fat, {recipe.carbs.toPrecision(3)}g of carbs and {recipe.protein.toPrecision(3)}g of protein</p>
        </div>
    );
};

export default CountRecipe;