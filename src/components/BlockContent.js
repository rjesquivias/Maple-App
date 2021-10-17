const BlockContent = (props) => {
    return (
        <>
        <div className={props.className} >
        <span className="block-content-background">
        <h1 className="mb-1">Example Title</h1>
        <hr className="mb-1"></hr>
        <p className="center-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </span>
        </div>
        </>
    );
};

export default BlockContent;