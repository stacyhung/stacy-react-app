import React, { useState } from "react";

const ToggleContext = React.createContext();

function ToggleContextProvider({ children }) {
    const [theme, setLightTheme] = useState('light');

    function toggleScheme() {
        setLightTheme(theme === "light" ? 'dark' : 'light');
    }

    return (
        <ToggleContext.Provider value={{ theme, toggleScheme }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContextProvider, ToggleContext }