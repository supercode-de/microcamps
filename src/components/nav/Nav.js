import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <section className="nav">
            <div className="wrap">
                <div className="nav__logo">
                    <Link to="/">
                        <h1>
                            super<span className="headlines_stroke">code</span>
                        </h1>
                    </Link>
                </div>
                <div className="nav__navigation">
                    <ul>
                        <li>
                            <a href="#allCourses">KURSE</a>
                        </li>
                        <li>
                            <a href="#wiesoWir">WIESO WIR?</a>
                        </li>
                        <li>
                            <a href="#alumniSection">ALUMNI</a>
                        </li>
                        <li>
                            <a href="#ourStory">UNSERE STORY</a>
                        </li>
                        <li>
                            <a href="#newsletter">NEWSLETTER</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                    <div className="nav__navigation__burgerNav">
                        <BiMenuAltLeft />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
