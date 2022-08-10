import "./MeetTeam.scss";

import TeamCard from "./ teamCardSection/TeamCard";

//Data
import teamData from "../../data/teamData";

const MeetTeam = () => {
  return (
    <section className="meet-team-wrapper">
      <article className="content-wrapper">
        <h2>Meet our good energy team!</h2>
        <p>
          Over the last coupla years we've grown a good energy team. As a remote
          team we're spread from San Fran to Sydney and every year we catchup
          for a team retreat.
        </p>
      </article>
      <article className="team-wrapper">
        {teamData.map((teamData, i) => (
          <TeamCard
            key={i}
            id={teamData.id}
            img={teamData.img}
            name={teamData.name}
            jobtitel={teamData.jobtitel}
            
          />
        ))}
      </article>
    </section>
  );
};

export default MeetTeam;
