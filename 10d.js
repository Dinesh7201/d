import React,{useState,useEffect} from "react";


function App(){
    const[data,setData] = useState([]);
    useEffect => {
        axios.get('url')
        .them(response=>{setData(response.data)})
        .catch(error=>{console.log('data')})
    }
    return(
        <div>
            {data.map(post=>(
                
            ))}
        </div>

    );
}