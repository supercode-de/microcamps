import reasons from "../../../data/reasonsData";
import ReasonsWhyOneReason from "../../reasonsWhySection/ReasonsWhyOneReason";

const ScheduleSection = () => {
    return (
        <section className="scheduleSection" id="scheduleSection">
            <div className="wrap">
                <article className="scheduleSection__textWrap">
                    <div className="scheduleSection__textWrap__headline">
                        <p>Bootcamp schedule</p>
                        <h3>Learn UX/UI Design live</h3>
                        <h3>with a micro class of 20 designers</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Massa pellentesque sit id quisque. Ipsum ut
                            pulvinar lorem at dolor nullam arcu velit.{" "}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Massa pellentesque sit id quisque. Ipsum ut
                            pulvinar lorem at dolor nullam arcu velit. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa pellentesque sit id quisque. Ipsum ut pulvinar
                            lorem at dolor nullam arcu velit.{" "}
                        </p>
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
                        <h3>Collaborate with</h3>
                        <h3>classmates</h3>
                    </div>
                    <div className="scheduleSection__textWrap__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Massa pellentesque sit id quisque. Ipsum ut
                            pulvinar lorem at dolor nullam arcu velit. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa pellentesque sit id quisque. Ipsum ut pulvinar
                            lorem at dolor nullam arcu velit.{" "}
                        </p>
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
                    <img src="/img/tn_small2.png" alt="SuperCode Alumni" />
                    <div className="scheduleSection__alumniZitat__textArea">
                        <p>
                            Ein nettes Alumni Zitat vielleicht. Adipiscing elit.
                            Non nisi, proin nec dolor lacus, consectetur. Sapien
                            felis arcu molestie ac pharetra. Sit arcu integer
                            est morbi sit laoreet in. Quis mauris tincidunt id
                            convallis et.{" "}
                        </p>
                        <p>Name</p>
                    </div>
                </article>
                <article className="scheduleSection__overview">
                    <div className="scheduleSection__overview__headline">
                        <p>Online Bootcamp Overview</p>
                        <h3>Learn UX/UI live</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In malesuada facilisis orci nunc. Pellentesque
                            semper ut lobortis elementum morbi. Neque ultrices
                            dui egestas sit et a. Nec, eget mi purus nec
                            sollicitudin pellentesque euismod.
                        </p>
                    </div>
                    <div className="scheduleSection__overview__video">
                        <img
                            className="backgroundImage"
                            src="/img/anass.png"
                            alt="Supercoder"
                        />
                        <img
                            className="playButton"
                            src="/img/playButton.svg"
                            alt="play Button"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ScheduleSection;
