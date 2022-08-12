import { Link } from "react-scroll";

const StickyNav = () => {

    return (
        <section className="stickyNav">
            <div className="wrap">
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="overviewSection">Übersicht</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="curriculumSection">Curriculum</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="scheduleSection">Zeitplan</Link>
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
