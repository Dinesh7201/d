import { func } from "prop-types";
import React, {useState} from "react";

const theme={
    light:{
        backgroundcolur:"3333"
    },
    bright:{
        backgroundcolur:"4444";
    }

}
const theam = React.createContext(theme.light);

function UseContextEx(props){
    <div>
        <theam.Provider value={theme.dark}>
            <Body/>
        </theam.Provide>
    </div>
}

function Body(){

}