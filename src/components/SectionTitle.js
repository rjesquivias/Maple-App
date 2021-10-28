const SectionTitle = (props) => {
    return (
        <div className={props.className}>
            <h1 className="mb-1">{props.title}</h1>
            <hr className="mb-1"></hr>
        </div>
    );
};

export default SectionTitle;