import BreederContent from "./BreederContent";
import Footer from "./Footer";
import Header from "./Header";

const Breeder = () => {
    return (
        <>
        <div className="breeder">
        <Header className="breeder"/>
        <BreederContent className="breeder-content" image="test-img.jpg" alt="image 1"/>
        <Footer />
        </div>
        </>
    );
};

export default Breeder;