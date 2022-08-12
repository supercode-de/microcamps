import { Link } from "react-router-dom";

const OurStorySection = () => {
    return (
        <section className="ourStorySection">
            <div className="wrap" id="ourStory">
                <div className="ourStorySection__introText">
                    <p>Unsere Geschichte</p>
                    <h3>
                        <span className="headlines_stroke">
                            Learn-by-doing mit
                        </span>
                    </h3>
                    <h3>unseren MicroCamps</h3>
                    <p>
                        Als erster deutschsprachiger Anbieter bieten wir dir ein revolutionäres Bildungskonzept, in dem ganz allein DU bestimmst, welche Inhalte du lernen willst.
                    </p>
                    <p>
                        Und das ganze in spannenden online live Kursen mit echten Menschen und guten Trainer*innen.
                    </p>
                </div>
                <div className="ourStorySection__mainWrap">
                    <div className="leftImageWrap">
                        <img
                            src="img/sergio01.png"
                            alt="Sergio, Gründer von MicroCamps"
                        />
                    </div>
                    <div className="ourStorySection__mainWrap__mainContent">
                        <div className="text">
                            <div className="headline">
                                <h4>Sergio Cardeal</h4>
                                <p>Gründer von MicroCamps</p>
                            </div>
                            <p>
                                "Seien wir mal ehrlich: Sich neben dem Beruf weiterzubilden ist häufig mit viel Aufwand und hohen Kosten verbunden. Oft sind die Bildungsangebote inhaltlich nicht passend, zu zeitaufwändig oder schlicht und einfach nicht fesselnd genug: Online-Tutorials werden angefangen, aber nicht zu Ende gemacht, Bootcamps sind vielleicht zu teuer und interne Fortbildungen beim Arbeitgeber gehen in eine ganz andere Richtung.
                            </p>
                            <p>
                                Und deshalb wurden die MicroCamps geboren. Hier bekommst du das, was du wirkllich lernen möchtest -flexibel, günstig und neben dem Beruf. Nette Menschen in kleinen Lerngruppen und kompetente Trainer*innen begleiten dich wochenweise. Und du stellst dir deinen Kurs einfach individuell zusammen.
                            </p>
                            <p>
                                Probier es aus, wir freuen uns auf dich!"
                            </p>
                        </div>
                        <div className="image">
                            <Link to="/our-story">
                                unsere Geschichte
                            </Link>
                            <img
                                src="img/sergio02.png"
                                alt="Sergio, Founder of Supercamp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
