const TeamSection = ({data}) => {
    return (
        <section className="teamSection" id="teamSection">
            <div className="wrap">
                <article className="teamSection__headline">
                    <p>{data.category} Team</p>
                    <h3>Lerne mit qualifizierten Trainer*innen</h3>
                    <h3>aus der {data.theme === "design" ? "Design-": data.theme === "coding" ? "IT-" : data.theme === "data" ? "Data-Science-" : ""}Branche</h3>
                </article>
                <article className="teamSection__gridTeam">
                    <div className="teamSection__gridTeam__card">
                        <img src="/img/tn_small.png" alt="Supercode Team" />
                        <h5>Lilia Saran</h5>
                        <p>UX/UI Designerin</p>
                    </div>
                    <div className="teamSection__gridTeam__card">
                        <img src="/img/tn_small.png" alt="Supercode Team" />
                        <h5>Lilia Saran</h5>
                        <p>UX/UI Designerin</p>
                    </div>
                    <div className="teamSection__gridTeam__card">
                        <img src="/img/tn_small.png" alt="Supercode Team" />
                        <h5>Lilia Saran</h5>
                        <p>UX/UI Designerin</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default TeamSection;
