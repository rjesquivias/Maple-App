import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={'card ' + props.className}>
            <Link to={props.path} >
            <h1>{props.title}</h1>
            </Link>
        </div>
    );
};

export default Card;