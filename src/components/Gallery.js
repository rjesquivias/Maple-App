import Footer from "./Footer";
import Header from "./Header";
import GalleryContent from "./GalleryContent";

const Gallery = () => {
    return (
        <>
        <div className="gallery">
            <Header className="gallery"/>
            <GalleryContent className="gallery-content" />
            <Footer />
        </div>
        </>
    );
};

export default Gallery;