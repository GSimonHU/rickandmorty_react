import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navBarBrand">Rick&Morty</span>
            <Link className="navBarComponent" to="/">
                Main
            </Link>
            <Link className="navBarComponent" to="/characters">
                Characters
            </Link>
            <Link className="navBarComponent" to="/favorites">
                Favorites
            </Link>
        </div>
    );
};

export default Navbar;
