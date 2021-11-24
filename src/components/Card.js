import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={'card'}>
            <img className="cover" src={props.image} alt={props.alt} />
            <span className="card-image-text">
                <h1>{props.title}</h1>
            </span>
        </div>
    );
};

export default Card;