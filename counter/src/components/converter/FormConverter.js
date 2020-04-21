import React from "react";
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

    const onClick = () => {};

    return (
        <CommonForm defaultValue={defaultValue} onClick={onClick} onChange={onCreate}/>
    )

};

export default FormConverter;