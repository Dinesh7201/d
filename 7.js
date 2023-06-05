import React, { useContext } from 'react';
//Context is React’s way of handling shared data between multiple components.


const theme = {
    light: {background: "#fff"},
    dark: {background: "#000"}
  }
  
// create context object with light theme as default
const ThemeContext = React.createContext(theme.light) 

function UseContextEx(props) {
    return (
        <div>
            {/* have context provider up the tree (with its value set) */}
            <ThemeContext.Provider value={theme.dark}>
                <Body />
            </ThemeContext.Provider>
        </div>
    );
}

function Body() {
    //get theme value. Make sure to pass context object
    const theme = useContext(ThemeContext);
    return (
      <main
        style={{ background: theme.background, height: "50vh", color: "#fff" }}
      >
        I am the main display styled by context!
      </main>
    );
  }

export default UseContextEx;