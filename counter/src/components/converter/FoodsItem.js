import React , {useContext} from "react";
import Context from "./Context";

function FoodsItem({food, index}) {

const {removeFood} = useContext(Context)

    return (
        <li>{index+1}
            &nbsp;
            {food.name}
            &nbsp;
            ckal: {food.ckal}
            <button onClick={removeFood.bind(null, food.id)}>&times;</button>
        </li>         
    )
}

export default FoodsItem