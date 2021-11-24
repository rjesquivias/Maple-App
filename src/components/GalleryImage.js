const GalleryImage = (props) => {
    return (
        <div className="card gallery-image">
            <img className="cover" src={props.image} alt={props.alt} />
        </div>
    );
};

export default GalleryImage;