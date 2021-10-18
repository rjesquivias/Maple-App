import Footer from "./Footer";
import Header from "./Header";
import NavCards from "./NavCards";

const Homepage = () => {
    return (
        <>
        <div className="homepage">
        <Header className="home"/>
        <NavCards />
        <Footer />
        </div>
        </>
    );
};

export default Homepage;