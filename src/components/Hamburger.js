import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [classNames, setClassNames] = useState("menu-btn");
    const [hamClassNames, setHamClassNames] = useState("ham-nav");

    async function onClick() {
        if(!isOpen) {
            setClassNames("menu-btn open");
            setHamClassNames("ham-nav open");
            setIsOpen(true);
        } else {
            setClassNames("menu-btn");
            setHamClassNames("ham-nav");
            setIsOpen(false);
        }
    };

    return (
        <>
        <div className={classNames} onClick={onClick}>
            <div className="menu-btn__burger"></div>
        </div>
        <nav className={hamClassNames}>
            <span className="ham-nav__link">Home</span>
            <span className="ham-nav__link">Bio</span>
            <span className="ham-nav__link">Gallery</span>
            <span className="ham-nav__link">Breeder</span>
        </nav> 
        </>
    );
};

export default Hamburger;