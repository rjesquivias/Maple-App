import BioSegment from "./BioSegment";
import SectionTitle from "./SectionTitle";

const BioContent = (props) => {
    return (
        <div className={props.className}>
            <SectionTitle title="Example title" className="content-title"/>
            <div className="bio-content-w">
                <BioSegment 
                    className="bio-right" 
                    content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                    image="test-img.jpg"
                />
                <BioSegment 
                    className="bio-left" 
                    content="magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
                    image="test-img.jpg"
                />
            </div>
        </div>
    );
};

export default BioContent;