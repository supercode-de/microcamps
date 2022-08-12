import { Link } from "react-router-dom";

const BootcampFillUp = () => {
  return (
    <article className="bootcamp-fill-up-mainwrapper" id="nextBootcamp">
      <div className="header-info">
        <p>Next UX/UI Bootcamp</p>
        <h3>Our Bootcamps are fillin up fast!</h3>
        <p>
          Our Bootcamps tend to fill up pretty quickly which is why we open up
          months in advance. And we purposefully limit class sizes to 20
          designers to ensure each bootcamp offers a personal learning
          experience.
        </p>
      </div>

      <div className="card-wrapper">
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 10 Plätze</span>
            </p>
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Klömpges</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 10 Plätze</span>
            </p>
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Klömpges</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 10 Plätze</span>
            </p>
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Kl</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BootcampFillUp;
