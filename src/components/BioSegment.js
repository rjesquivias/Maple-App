const BioSegment = (props) => {
    return (
        <div className={props.className}>
            <p className="bio-segment-p">{props.content}</p>
            <img src={props.image} className="bio-image" alt="bio image 1" />
        </div>
    );
};

export default BioSegment;