import { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
    const [className, setClassName] = useState("card-container")

    return (
        <div className={className} >
            <Card image="img/bio-image.png" alt="Library with ladder in front" title="Bio" path="/bio" />
            <Card image="img/gallery-image.png" alt="Gallery room with paintings on the walls" title="Gallery" path="/gallery" />
            <Card image="img/breeder-image.png" alt="Hand holding a newborn puppy" title="Breeder" path="/breeder" />
        </div>
    );
};

export default CardContainer;