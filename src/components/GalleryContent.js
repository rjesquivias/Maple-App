import GalleryImage from "./GalleryImage";
import SectionTitle from "./SectionTitle";

const GalleryContent = (props) => {
    return (
        <div className={props.className}>
            <SectionTitle title="Gallery" className="content-title"/>
            <div className="gallery-images">
                <GalleryImage image="test-img.jpg" alt="image 1"/>
                <GalleryImage image="test-img.jpg" alt="image 2"/>
                <GalleryImage image="test-img.jpg" alt="image 3"/>
                <GalleryImage image="test-img.jpg" alt="image 4"/>
                <GalleryImage image="test-img.jpg" alt="image 5"/>
                <GalleryImage image="test-img.jpg" alt="image 6"/>
                <GalleryImage image="test-img.jpg" alt="image 7"/>
                <GalleryImage image="test-img.jpg" alt="image 8"/>
                <GalleryImage image="test-img.jpg" alt="image 9"/>
            </div>
        </div>
    );
};

export default GalleryContent;