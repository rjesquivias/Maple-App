import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardContainer = () => {
    const [className, setClassName] = useState("card-container")

    return (
        <div className={className} >
            <Link to={'/bio'} >
                <Card image="img/bio-image.png" alt="Library with ladder in front" title="Bio" path="/bio" />
            </Link>
            <Link to={'/gallery'} >
                <Card image="img/gallery-image.png" alt="Gallery room with paintings on the walls" title="Gallery" path="/gallery" />
            </Link>
            <Link to={'/breeder'} >
                <Card image="img/breeder-image.png" alt="Hand holding a newborn puppy" title="Breeder" path="/breeder" />
            </Link>
        </div>
    );
};

export default CardContainer;