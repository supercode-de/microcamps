import FaqSectionAccCard from "./FaqSectionAccCard";
import faqdata from "../../data/faqdata";
const FaqSection = () => {
    return (
        <section className="faqSection">
            <div className="wrap" id="faq">
                <h2>
                    <span className="headlines_stroke">FAQ</span>
                </h2>
                <div className="faqSection__accordion">
                    {faqdata.map((faqItem, i) => (
                        <FaqSectionAccCard 
                            frage={faqItem.frage}
                            antwort={faqItem.antwort}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
