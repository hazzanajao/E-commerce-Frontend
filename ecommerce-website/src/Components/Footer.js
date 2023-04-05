import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <footer  className="footer-date">
            <div>
                <br></br>
                <br></br>
                Copyright © {currentYear}
                <br></br>
                <br></br>
            </div>
        </footer>

    )
}

export default Footer;
