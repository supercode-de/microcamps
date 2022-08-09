import { useEffect, useRef } from "react";

const HeaderSection = () => {
    const shouldLog = useRef(true)
    useEffect(() => {
        if(shouldLog.current) {
            shouldLog.current = false
            document.title = "MicroCamps"
        }
        
    })
    return (
        <section className="headerSection">
            <div className="wrap">
                <article>
                    <h2>
                        <span className="headlines_stroke">Lerne die</span>
                    </h2>
                    <h2>
                        <span className="circle">Skills</span>der Zukunft
                    </h2>
                    <h2>
                        mit unseren
                    </h2>
                    <h2>
                        <span className="headlines_stroke">live MicroCamps</span>
                    </h2>
                    <p>
                    Unsere live & online UX/UI, Coding & Data MicroCamps sind so aufgebaut, dass du dich ganz flexibel neben deinem Job weiterbilden kannst – zertifiziert, hochwertig und mit live Trainer*innen! 
                    </p>
                    <a className="btn" href="#allCourses">
                        zu den Kursen
                    </a>
                </article>
                <img src="img/people_top_right.png" alt="Supercode People" />
            </div>
        </section>
    );
};

export default HeaderSection;
