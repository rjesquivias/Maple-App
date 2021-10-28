import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={'card'}>
            <img className="cover" src={props.image} alt={props.alt} />
            <div className="card-image-text">
                <Link to={props.path} >
                    <h1>{props.title}</h1>
                </Link>
            </div>
        </div>
    );
};

export default Card;