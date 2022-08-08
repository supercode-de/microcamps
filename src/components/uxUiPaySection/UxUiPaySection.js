import "./uxUiPaySection.scss";

const UxUiPaySection = () => {
  return (
    <section className="ui-ux-pay">
      <div className="content-wrapper">
        <h2>
          Designers shouldn't have to pay $15,000+ to learn UX/UI in a prime
          city location.
        </h2>
        <p>
          For the past decade, digital product design has been taught from
          classrooms in prime city locations around the world. Students pay a
          hefty premium (we're talking $15,000+) to learn UX/UI skills from
          powerpoints in a class of 40 students. Syllabus and tools have
          remained fixed for years and courses are typically taught by
          inexperienced designers who happen to be available.
        </p>
      </div>
      <div className="img-wrapper">
        <img src="/img/class_big.png" alt="Trainer teaches the students" />
      </div>
    </section>
  );
};

export default UxUiPaySection;
