import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
const StickyNav = () => {
    let location = useLocation();

    return (
        <section className="stickyNav">
            <div className="wrap">
                <ul>
                    <li>
                        <NavHashLink
                            to="#overviewSection"
                            className={
                                location.hash === "#overviewSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Übersicht
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="#curriculumSection"
                            className={
                                location.hash === "#curriculumSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Curriculum
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="#scheduleSection"
                            className={
                                location.hash === "#scheduleSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Zeitablauf
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="#teamSection"
                            className={
                                location.hash === "#teamSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Team
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="#toolsSection"
                            className={
                                location.hash === "#toolsSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Tools
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="#pricingSection"
                            className={
                                location.hash === "#pricingSection"
                                    ? "active__navlink"
                                    : ""
                            }
                        >
                            Bezahlung
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to="/">MicroCamp</NavHashLink>
                    </li>

                    <li>
                        <NavHashLink to="/">Next Bootcamp</NavHashLink>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default StickyNav;
