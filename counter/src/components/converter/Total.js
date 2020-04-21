import React  from "react";

const Total = ({foods}) => {

    let totalFat = foods.map(food => food.yourPortionFat).reduce((sum, current) => sum + current, 0);

    let totalCrabs = foods.map(food => food.yourPortionCrabs).reduce((sum, current) => sum + current, 0);

    let totalProtein = foods.map(food => food.yourPortionProtein).reduce((sum, current) => sum + current, 0);

    let totalCkal = foods.map(food => food.yourPortionCkal).reduce((sum, current) => sum + current, 0);

    return (
        <div>
            <p>total {totalFat.toFixed(1)} fat; total {totalCrabs.toFixed(1)} crabs; total {totalProtein.toFixed(1)} protein;</p>
            <p>total {totalCkal.toFixed(1)} ckal</p>
        </div>
    )
        
}

export default Total