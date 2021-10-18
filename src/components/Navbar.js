import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="logo">
                Premier Maple Leaf
            </Link>
            <nav className="user-nav">
                <Link to="/" className="user-nav__link">
                    Home
                </Link>
                <Link to="/bio" className="user-nav__link">
                    Bio
                </Link>
                <Link to="/gallery" className="user-nav__link">
                    Gallery
                </Link>
                <Link to="/breeder" className="user-nav__link">
                    Breeder
                </Link>
            </nav> 
            <Hamburger />
        </div>
    );
};

export default Navbar;