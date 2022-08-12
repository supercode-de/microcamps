import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="logoWrap">
                    <img src="../../img/supercode_logo.svg" alt="supercode Logo" />
                    <span>© 2019 - 2022</span>
                </div>
                <div className="icons">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/supercodegmbh/" >
                        <FiFacebook />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/supercodegmbh">
                        <FiTwitter />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/supercodegmbh/?hl=de">
                        <FiInstagram />
                    </a>
                </div>
                <div className="links">
                    <a target="_blank" rel="noreferrer" href="https://www.super-code.de/leitbild">Leitbild</a>
                    <hr />
                    <a target="_blank" rel="noreferrer" href="https://www.super-code.de/dsgvo">DSGVO</a>
                    <hr />
                    <a target="_blank" rel="noreferrer" href="https://www.super-code.de/impressum">Impressum</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
