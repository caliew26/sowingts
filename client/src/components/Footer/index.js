import React from "react";

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <p>
                <a href="https://www.linkedin.com/in/cali-mitchell-1896b34a/">
                    <img src="linkedinicon.ico" alt="linkedin icon"></img></a>
            
                <a href="https://github.com/caliew26">
                <img src="githubicon.png" alt="github"></img></a>
            
                {/* <a href="Cali Mitchell 2019.pdf">2019 Resume</a> */}
            <br></br>
            <span className="text-muted">Copyright Cali Mitchell &copy; 2019
            </span>
            </p>
        </footer>
    )
}

export default Footer;