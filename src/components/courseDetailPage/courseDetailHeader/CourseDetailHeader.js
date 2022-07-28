const CourseDetailHeader = (props) => {
    return (
        <section className="courseDetailHeader">
            <img
                className="headerBackground"
                src={`/img/${props.image}`}
                alt={props.title}
            />
            <div className="wrap">
                <article className="courseDetailHeader__textBlock">
                    <h2>
                        {props.type === "data"
                            ? "Data-Science"
                            : props.type === "coding"
                            ? "Front-End"
                            : "UX/UI"}
                    </h2>
                    <h2>{props.title}</h2>
                    <p>
                        {props.form} | {props.duration}
                    </p>
                    <div className="plusList">
                        {props.plusSkills.map((skill) => (
                            <img src={`/img/${skill}`} alt={skill} />
                        ))}
                        <p>+ more</p>
                    </div>
                    <p>{props.description}</p>
                </article>
            </div>
        </section>
    );
};

export default CourseDetailHeader;
