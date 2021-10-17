import { useState } from "react";
import CardContainer from "./CardContainer";

const NavCards = () => {
    const [className, setClassName] = useState("nav-cards")

    return (
        <div className={className} >
        <CardContainer />
        </div>
    );
};

export default NavCards;