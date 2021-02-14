import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleBtn = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const btnStyle = {
        marginBottom: "20px",
        padding: "1em",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
    };

    return (
        <>
            <button
                style={btnStyle}
                onClick={() => {
                    toggleTheme();
                }}
            >
                Toggle Theme
            </button>
        </>
    );
};

export default ToggleBtn;
