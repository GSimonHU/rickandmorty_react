import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Main</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
        </div>
    );
};

export default Navbar;
