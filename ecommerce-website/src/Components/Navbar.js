import React, {useEffect, useState, useRef} from "react"
import {FaBars} from "react-icons/fa"
import {useSelector} from "react-redux";

import BaseInput from "./BaseInput";
import logo from "../assets/images/logo.svg"

function Navbar({ user }) {

    const logout = () => {
        window.open("http://localhost:3200/auth/logout", "_self");
    };
    const [showNavLinks, setShowNavLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const navRef = useRef(null);

    const {cartTotalQuantity} = useSelector((state) => state.cart);


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
                <div className="nav-header" to="/">
                    <img src={logo} onChange="logo-profile" alt="logo"/>
                </div>

                <div className="nav-header-search">
                    <BaseInput/>
                    <button className="nav-toggle" onClick={() => setShowNavLinks(!showNavLinks)}>
                        <FaBars/>
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={navRef}>


                        <li>
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439
                                    1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125
                                    1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125
                                    1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004
                                    0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03
                                    4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997
                                    8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953
                                    11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959
                                    8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919
                                    17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0
                                    0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                                </svg>

                            </a>
                        </li>


                        {user ? (
                            <ul className="list">
                                <li className="listItem">
                                    <img
                                        src={user.photos[0].value}
                                        alt=""
                                        className="avatar"
                                    />
                                </li>
                                <li className="listItem">{user.displayName}</li>


                                <li className="listItem" onClick={logout}>
                                    Logout
                                </li>
                            </ul>
                        ) : (
                            <a href="/login">
                                Login
                            </a>
                        )}

                        <li>
                            <a href="/allproducts">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5
                                    0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112
                                    21.75c-2.676 0-5.216-.584-7.499-1.632z"/>

                                </svg>

                            </a>
                        </li>

                        <li>
                            <a href="/login">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0
                                        10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25
                                        0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/cart">
                                <div className="nav-bag">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        className="bi bi-handbag-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5
                                    5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5
                                    2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1
                                    0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
                                    </svg>
                                    <span className="bag-quantity">
                                 <span>{cartTotalQuantity}</span>
                                </span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
