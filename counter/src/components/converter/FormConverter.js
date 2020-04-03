import React ,{ useState } from "react";
import { useForm } from 'react-hook-form';

const FormConverter = (props) => {

    const [food, setFood] = useState([{
        name: "",
        weight_p: 0,
        ckal_p: 0,
        fat_p: 0,
        carbs_p: 0,
        protein_p: 0
    }]);

    return (            
            <form onSubmit={props.handleSubmit}>
                <label>
                    Food:
                    <input type ="text" name="food"/> 
                </label> 
                <label>
                    Weight of portion(g):
                    <input type ="text" name="weight"/> 
                </label> 
                <label>
                    Ckal of portion:
                    <input type ="text" name="ckal"/> 
                </label>
                <label>
                    Fat of portion:
                    <input type ="text" name="fat"/> 
                </label>
                <label>
                    Carbohydrate of portion:
                    <input type ="text" name="carbohydrate"/> 
                </label>
                <label>
                    Protein of portion:
                    <input type ="text" name="protein"/> 
                </label>
                <label>
                    Your food's weight(g):
                    <input type ="text" name="total_weight"/> 
                </label> 
                   
                <button type="submit">Calculate</button>
            </form> 
    );
};

export default FormConverter;