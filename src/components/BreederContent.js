import SectionTitle from "./SectionTitle";

const BreederContent = (props) => {
    return (
        <div className={props.className}>
            <SectionTitle title="Breeder" className="content-title"/>
            <div className="breeder-content-w">
                <div className="breeder-left-segment">
                    <div className="breeder-p-wrap">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                    <a href="https://www.premierstandardpoodles.com/">Premier Standard Poodles</a>
                </div>
                <div className="breeder-right-segment">
                    <img className="cover" src={props.image} alt={props.alt} />
                </div>
            </div>
        </div>
    );
};

export default BreederContent;