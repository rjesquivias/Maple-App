import { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
    const [className, setClassName] = useState("card-container")

    return (
        <div className={className} >
        <Card className="card-item-1" title="Bio"/>
        <Card className="card-item-2" title="Gallery"/>
        <Card className="card-item-3" title="Breeder"/>
        </div>
    );
};

export default CardContainer;