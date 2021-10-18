import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CardContainer = () => {
    const [className, setClassName] = useState("card-container")

    return (
        <div className={className} >
        <Link to="/bio">
            <Card className="card-item-1" title="Bio"/>
        </Link>
        <Link to="/gallery">
            <Card className="card-item-2" title="Gallery"/>
        </Link>
        <Link to="/breeder">
            <Card className="card-item-3" title="Breeder"/>
        </Link>
        </div>
    );
};

export default CardContainer;