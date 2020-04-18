import React ,{ useState } from "react";
//import { useForm } from 'react-hook-form';
import CommonForm from "./CommonForm";

const FormConverter = ({onCreate}) => {

    const defaultValue = {
        yourPortionWeight: 0,
        foodName: '',
        portionFat: "0.0",
        portionCrabs: "0.0",
        portionProtein: "0.0",
        portionCkal: 0,
        portionWeight: 100};

    return (
        <CommonForm defaultValue={defaultValue} onClick={onCreate}/>
    )
    
};

export default FormConverter;