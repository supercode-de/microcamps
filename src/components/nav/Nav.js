import { BiMenuAltLeft } from "react-icons/bi";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Nav = () => {
    let location = useLocation()
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
                {location.pathname.includes("/course/")
                    ?
                    <div className="nav__navigation">
                        <ul>
                            <li>
                                <NavHashLink to="#allCourses">KURSE</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#newsletter">NEWSLETTER</NavHashLink>

                            </li>
                            <li>
                                <NavHashLink to="#faq">FAQ</NavHashLink>
                            </li>
                        </ul>
                        <div className="nav__navigation__burgerNav">
                            <BiMenuAltLeft />
                        </div>
                    </div>
                    :
                    <div className="nav__navigation">
                        <ul>
                            <li>
                                <NavHashLink to="#allCourses">KURSE</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#wiesoWir">WIESO WIR?</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#alumniSection">ALUMNI</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#ourStory">UNSERE STORY</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#newsletter">NEWSLETTER</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="#faq">FAQ</NavHashLink>
                            </li>
                        </ul>
                        <div className="nav__navigation__burgerNav">
                            <BiMenuAltLeft />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Nav;
