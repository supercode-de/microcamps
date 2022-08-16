import reasons from "../../data/reasonsData";
import ReasonsWhyOneReason from "./ReasonsWhyOneReason";

const ReasonsWhySec = () => {
    return (
        <section className="reasonsWhySec">
            <div className="wrap">
                <article className="reasonsWhySec__textarea" id="wiesoWir">
                    <p>07 gute Gründe</p>
                    <h3>Warum</h3>
                    <h3>
                        <span className="headlines_stroke">MicroCamps?</span>
                    </h3>
                    <div className="reasonsWhySec__textarea__list">
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
                    </div>
                </article>
                <img src="img/people_center.png" alt="People from Supercode" />
            </div>
        </section>
    );
};

export default ReasonsWhySec;
