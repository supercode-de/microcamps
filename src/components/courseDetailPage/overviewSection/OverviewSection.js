const OverviewSection = (props) => {
    const {subTheme, title, theme, category} = props.data
    const {preHeadline, mainHeadline, mainCopy1, mainCopy2} = props.data.courseOverview[0]
    return (
        <section className="overviewSection" id="overviewSection">
            <div className="wrap">
                <article className="overviewSection__textarea">
                    <p>{preHeadline}</p>
                    <h3>{mainHeadline}</h3>
                    <p>{mainCopy1}</p>
                    <p>{mainCopy2}</p>
                    <p>Mit unserem MicroCamp <b>{subTheme} – {title}</b> lernst du nicht nur die {category} Basics, sondern bekommst einen tieferen Einblick in die aktuellen Technologien der {theme === "design" ? "Design" : theme === "coding" ? "Coding" : theme === "data" ? "Data-Science" : ""}-Welt. Und das Ganze optimal angepasst an deinen Berufsalltag.  </p>
                </article>
                <img src="/img/tn_big.png" alt="People from Supercode" />
            </div>
        </section>
    );
};

export default OverviewSection;
