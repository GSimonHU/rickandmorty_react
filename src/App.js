import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <h1 className="header">Rock & Morty React App</h1>
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
                    render={() => <h3>This will be the characters route</h3>}
                />
                <Route
                    exact
                    path="/locations"
                    render={() => <h3>This will be the locations route</h3>}
                />
            </div>
        </Router>
    );
}

export default App;
