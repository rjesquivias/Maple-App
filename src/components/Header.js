import BlockContent from "./BlockContent";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
        <header className="header">
            <Navbar />
            <div className="grid">
            <BlockContent className="item item-1 block-content"/>
            </div>
        </header>
        </>
    );
};

export default Header;