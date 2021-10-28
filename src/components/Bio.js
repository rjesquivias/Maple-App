import BioContent from "./BioContent";
import Footer from "./Footer";
import Header from "./Header";

const Bio = () => {
    return (
        <>
        <div className="bio">
        <Header className="bio"/>
        <BioContent className="bio-content" />
        <Footer />
        </div>
        </>
    );
};

export default Bio;