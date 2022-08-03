import reasons from "../../../data/reasonsData";
import ReasonsWhyOneReason from "../../reasonsWhySection/ReasonsWhyOneReason";

const ScheduleSection = (props) => {
    const { alumniCopy, alumniName, alumniImage } = props.data.alumniZitat[0]
    return (
        <section className="scheduleSection" id="scheduleSection">
            <div className="wrap">
                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <p>MicroCamp Zeitplan</p>
                        <h3>Lerne {props.data.theme === "design" ? "UX/UI-Design" : props.data.theme === "coding" ? "Web-Entwicklung" : props.data.theme === "data" ? "Data Science" : ""} live und online</h3>
                        <h3>in kleinen Lerngruppen</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>Wir möchten ehrlich zu dir sein: Unsere MicroCamps sind intensiv und es werden viele neue Themen auf dich zukommen.</p>
                        <p>Aber wir sind stolz darauf, einen Zeitplan zu haben, der für berufstätige Menschen optimal funktioniert. Bei jedem Schritt wirst du von deinen Trainer*innen, deiner Lerngruppe und unserem guten Design-Netzwerk in ganz Deutschland unterstützt!</p>
                    </div>
                </article>
                <img
                    className="bigSuperCodePeople"
                    src="/img/people_center.png"
                    alt=""
                />

                <article className="scheduleSection__list">
                    <ul>
                        {reasons.map((reason, i) => (
                            <ReasonsWhyOneReason
                                key={i}
                                id={reason.id}
                                title={reason.title}
                                reason={reason.reason}
                            />
                        ))}
                    </ul>
                </article>
                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <h3>Vernetze dich mit anderen Teilnehmenden</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>Wir tun unser Bestes, damit du {props.data.theme === "design" ? "UX-Design" : props.data.theme === "coding" ? "Web-Entwicklung" : "Data Science"} zu einer Zeit zu lernen kannst, die für dich passt. Im Moment haben wir mehrere Online Live Kurse mit verschiedenen Schwerpunkten.</p>
                        <p>Du lernst also in einem online Kurs, kannst dich aber gleichzeitig jederzeit mit den anderen Teilnehmenden austauschen, vernetzen und gemeinsam lernen.</p>
                    </div>
                </article>
                <article className="scheduleSection__weekGrid">
                    {/* Montag */}
                    <div className="scheduleSection__weekGrid__day">
                        <p className="dayHeadline">Montag</p>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Dienstag */}
                    <div className="scheduleSection__weekGrid__day">
                        <p className="dayHeadline">Dienstag</p>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Mittwoch */}
                    <div className="scheduleSection__weekGrid__day">
                        <p className="dayHeadline">Mittwoch</p>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Donnerstag */}
                    <div className="scheduleSection__weekGrid__day">
                        <p className="dayHeadline">Donnerstag</p>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                    </div>
                    {/* Freitag */}
                    <div className="scheduleSection__weekGrid__day">
                        <p className="dayHeadline">Freitag</p>
                        <div className="scheduleSection__weekGrid__day__card">
                            <p className="headline">Live class</p>
                            <p className="time">2 Stunden</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                            </p>
                        </div>
                    </div>
                </article>
                <article className="scheduleSection__alumniZitat">
                    <img src={`/img/${alumniImage}`} alt={`SuperCode Alumni ${alumniName}`} />
                    <div className="scheduleSection__alumniZitat__textArea">
                        <p>{alumniCopy}</p>
                        <p>{alumniName}</p>
                    </div>
                </article>
                <article className="scheduleSection__overview">
                    <div className="scheduleSection__overview__headline">
                        <p>MicroCamps</p>
                        <h3>Mach den nächsten Schritt</h3>
                        <h3>– werde {props.data.theme === "design" ? "UX-Designer*in" : props.data.theme === "coding" ? "Web-Entwickler*in" : "Data Scientist"}</h3>
                        <p>
                            Es ist an der Zeit etwas zu ändern und deinem Leben die entscheidende Richtung zu geben? Großartig! Denn das Lernen sollte nie aufhören und neue Abenteuer wollen begonnen werden. Mache den näcshten Schritt und lerne {props.data.subTheme}.
                        </p>
                    </div>
                    <div className="scheduleSection__overview__video">
                        <img
                            className="backgroundImage"
                            src="/img/anass.png"
                            alt="Supercoder"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ScheduleSection;
