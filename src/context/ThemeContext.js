import { useState, createContext } from "react";

export const ThemeContext = createContext(["light", () => {}]);

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};
