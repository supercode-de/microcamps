const TeamSection = () => {
    return (
        <section className="teamSection" id="teamSection">
            <div className="wrap">
                <article className="teamSection__headline">
                    <p>UX/UI Team</p>
                    <h3>Change your life,</h3>
                    <h3>become a UX/UI Designer</h3>
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
