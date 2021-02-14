import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ToggleBtn from "./components/ToggleBtn";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import Favorites from "./components/Favorites";

import AppContainer from "./elements/AppContainer";

import { useState, useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";
import AppContainerTheme from "./context/Theme";

const App = () => {
    const [favorites, setFavorites] = useState([]);
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppContainerTheme[theme];

    const addToFavorites = (character) => {
        setFavorites([...favorites, character]);
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter((char) => char.id !== id));
    };

    return (
        <Router>
            <AppContainer currentTheme={currentTheme}>
                <Navbar />
                <h1 className="header">Rick & Morty React App</h1>
                <ToggleBtn />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <h3>
                            This is a react practice app using Rick & Morty API
                        </h3>
                    )}
                />
                <Route
                    exact
                    path="/characters"
                    render={() => (
                        <CharacterList addToFavorites={addToFavorites} />
                    )}
                />
                <Route
                    exact
                    path="/characters/:id"
                    render={() => <CharacterDetails />}
                />
                <Route
                    exact
                    path="/favorites"
                    render={() => (
                        <Favorites
                            favorites={favorites}
                            removeFavorite={removeFavorite}
                        />
                    )}
                />
            </AppContainer>
        </Router>
    );
};

export default App;
