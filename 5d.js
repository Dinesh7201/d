import React, {useState} from "react";

function countt(){
    const[count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count+1);
    }
    return(
        <h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Decrement</button>
        </h1>
    );
}
export default countt;