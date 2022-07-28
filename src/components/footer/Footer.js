import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="logoWrap">
                    <p>super(code)</p>
                    <span>© 2002 - 2020</span>
                </div>
                <div className="icons">
                    <a href="/">
                        <FiFacebook />
                    </a>
                    <a href="/">
                        <FiTwitter />
                    </a>
                    <a href="/">
                        <FiInstagram />
                    </a>
                </div>
                <div className="links">
                    <a href="/">LEITBILD</a>
                    <hr />
                    <a href="/">DSGVO</a>
                    <hr />
                    <a href="/">IMPRESSUM</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
