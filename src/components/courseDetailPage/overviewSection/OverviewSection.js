const OverviewSection = (props) => {
    const {preHeadline, mainHeadline, mainCopy1, mainCopy2, mainCopy3} = props.courseOverview
    return (
        <section className="overviewSection" id="overviewSection">
            <div className="wrap">
                <article className="overviewSection__textarea">
                    <p>{preHeadline}</p>
                    <h3>{mainHeadline}</h3>
                    <p>{mainCopy1}</p>
                    <p>{mainCopy2}</p>
                    <p>{mainCopy3}</p>
                </article>
                <img src="/img/tn_big.png" alt="People from Supercode" />
            </div>
        </section>
    );
};

export default OverviewSection;
