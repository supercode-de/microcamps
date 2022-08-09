import AlumniSectionReviewCard from "./AlumniSectionReviewCard";
import AlumniSectionVideoCard from "./AlumniSectionVideoCard";
import alumniBewertungen from "../../data/alumniBewertungen";
import alumniInterviewsData from "../../data/alumniInterviewsData";

const AlumniSection = () => {
    return (
        <section className="alumniSection">
            <div className="wrap" id="alumniSection">
                <h3>Das sagen unsere Teilnehmende</h3>
                <h3>
                    <span className="headlines_stroke">
                        aus ganz
                        <span className="circle">Deutschland</span>
                    </span>
                </h3>
                <article className="alumniSection__videoArea">
                    {alumniInterviewsData.map((alumniItem, i) => (
                        <AlumniSectionVideoCard
                            key={i}
                            id={alumniItem.id}
                            name={alumniItem.name}
                            posterSrc={alumniItem.posterSrc}
                            jobtitel={alumniItem.jobtitel}
                            videoSrc={alumniItem.videoSrc}
                        />
                    ))}
                </article>
                <article className="alumniSection__reviewGrid">
                    {alumniBewertungen.map((bewertung, i) => (
                        <AlumniSectionReviewCard
                            key={i}
                            name={bewertung.name}
                            jobtitel={bewertung.jobtitel}
                            bewertung={bewertung.bewertung}
                        />
                    ))}
                </article>
            </div>
        </section>
    );
};

export default AlumniSection;
