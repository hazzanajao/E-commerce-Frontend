import React, {useEffect, useState, useRef} from "react"
import {FaBars} from "react-icons/fa"


import "../../assets/images/logo.svg"
import Styles from "../Styles/main.css"
import logo from "../../assets/images/logo.svg"

const Navbar = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const linksHeight = navRef.current.getBoundingClientRect().height;

        if (showNavLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showNavLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} onChange="logo-profile" alt="logo"/>
                    <button
                        className="nav-toggle"
                        onClick={() => setShowNavLinks(!showNavLinks)}
                    >
                        <FaBars/>
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links"
                        ref={navRef}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/service">Service</a>
                        </li>
                        <li>
                            <a href="/service">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
