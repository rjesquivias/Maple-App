import { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
    const [className, setClassName] = useState("card-container")

    return (
        <div className={className} >
        <Card className="card-item-1" title="Bio" path="/bio" />
        <Card className="card-item-2" title="Gallery" path="/gallery" />
        <Card className="card-item-3" title="Breeder" path="/breeder" />
        </div>
    );
};

export default CardContainer;