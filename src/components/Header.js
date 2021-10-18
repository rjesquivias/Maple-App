import BlockContent from "./BlockContent";
import Navbar from "./Navbar";

const Header = (props) => {
    return (
        <>
        <header className={"header " + props.className}>
            <Navbar />
            <div className="grid">
            {props.className === "home" && 
            <BlockContent className="item item-1 block-content"/>}
            </div>
        </header>
        </>
    );
};

export default Header;