import Hamburger from "./Hamburger";

const Navbar = () => {
    return (
        <div className="nav">
            <span className="logo">Premier Maple Leaf</span>
            <nav className="user-nav">
                <span className="user-nav__link">Home</span>
                <span className="user-nav__link">Bio</span>
                <span className="user-nav__link">Gallery</span>
                <span className="user-nav__link">Breeder</span>
            </nav> 
            <Hamburger />
        </div>
    );
};

export default Navbar;