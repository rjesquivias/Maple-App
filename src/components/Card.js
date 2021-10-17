const Card = (props) => {
    return (
        <div className={'card ' + props.className}>
        <h1>{props.title}</h1>
        </div>
    );
};

export default Card;