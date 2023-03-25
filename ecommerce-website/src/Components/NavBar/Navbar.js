import React, {useEffect, useState, useRef} from "react"
import {FaBars} from "react-icons/fa"
import "../../assets/images/logo.svg"
import main from "../../main.css"
import logo from "../../assets/images/logo.svg"
import BaseInput from "../BaseInput/BaseInput";

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

                <div className="nav-header-search">
                    <BaseInput/>
                    <button className="nav-toggle" onClick={() => setShowNavLinks(!showNavLinks)}><FaBars/></button>

                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links"
                        ref={navRef}>

                        <li>
                        <div style={{display: "flex", border:"1px solid white"}}>
                            <a href="/">
                                Home
                            </a>
                        </div>
                    </li>

                        <li>
                            <div style={{display: "flex", border:"1px solid white"}}>
                            <a href="/">
                                Fin
                            </a>
                             <a href="/">
                                Eng
                            </a>
                              </div>
                        </li>


                        <li>
                            <div style={{display: "flex",border:"1px solid white"}}>
                                <a href="/signupform">
                                    User
                                </a>

                                <a href="/about">
                                    Admin
                                </a>
                            </div>

                        </li>

                        <li>
                            <div style={{display: "flex",border:"1px solid white"}}>
                            <a href="/service">Shopping</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
