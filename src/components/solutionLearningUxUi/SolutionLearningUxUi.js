import "./SolutionLearningUxUi.scss";

const SolutionLearningUxUi = () => {
  return (
    <section className="solution-wrapper">
      <div className="content-wrapper">
        <h2>Our solution is to make learning UX/UI accessible online</h2>
        <p>
          We're trading classrooms in expensive cities for virtual classrooms,
          allowing anyone in the world to learn together. We're limiting class
          sizes to fifteen, ensuring every student gets a genuinely personal
          learning experience. We're pricing our Bootcamps affordably, inline
          with how education should be.
        </p>

        <p>
          We're applying our years of experience in designing products remotely
          to teaching, ensuring students are taught by active designers who are
          passionate to educate. We're constantly updating our curriculum with
          the latest remote workflows and tools, ensuring students pickup decent
          habits and learn what's relevant in the industry today.
        </p>
      </div>

      <div className="img-wrapper">
        <img src="/img/people_center.png" alt="Trainer teaches the students" />
      </div>
    </section>
  );
};

export default SolutionLearningUxUi;
