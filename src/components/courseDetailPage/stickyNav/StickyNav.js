import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

const StickyNav = () => {

    return (
        <section className="stickyNav">
            <div className="wrap">
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="overviewSection">Übersicht</Link>
                        {/* <NavHashLink to="#overviewSection">Übersicht</NavHashLink> */}
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="curriculumSection">Curriculum</Link>
                        {/* <NavHashLink to="#curriculumSection">Curriculum</NavHashLink> */}
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="scheduleSection">Zeitplan</Link>
                        {/* <NavHashLink to="#scheduleSection">Zeitplan</NavHashLink> */}
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="teamSection">Team</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="toolsSection">Tools</Link>

                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="nextBootcamp">Termine</Link>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default StickyNav;
