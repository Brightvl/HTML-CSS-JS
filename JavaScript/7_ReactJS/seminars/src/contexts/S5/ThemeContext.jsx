import {createContext, useContext, useState} from "react";

const ThemeContext = createContext({
    theme: 'light',
    switchTheme: () => {
    }
});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

