const OverviewSection = (props) => {
    const { subTheme, title, theme, category, duration } = props.data
    return (
        <section className="overviewSection" id="overviewSection">
            <div className="wrap">
                <article className="overviewSection__textarea">
                    <p>Übersicht MicroCamp {subTheme}</p>
                    <h3>Starte durch mit deinen</h3>
                    <h3>neuen {subTheme} Skills</h3>
                    <p>Unser MicroCamp für {subTheme} bietet dir eine intensive {Number(duration.slice(0, 1)) > 10 ? Number(duration.slice(0, 1)) : Number(duration.slice(0, 2))}-wöchige Lernerfahrung, die dich aufs nächste Level bringt!</p>
                    <p>In Live-Sessions mit kleinen Lerngruppen aus ganz Deutschland und motivierten Trainer*innen lernst du praxisnah und mit modernen Tools und Methoden.</p>
                    <p>Mit unserem MicroCamp <b>{subTheme} – {title}</b> lernst du nicht nur die {category} Basics, sondern bekommst einen tieferen Einblick in die aktuellen Technologien der {theme === "design" ? "Design" : theme === "coding" ? "Coding" : theme === "data" ? "Data-Science" : ""}-Welt. Und das Ganze optimal angepasst an deinen Berufsalltag.  </p>
                </article>
                <img src="/img/tn_big.png" alt="People from Supercode" />
            </div>
        </section>
    );
};

export default OverviewSection;
