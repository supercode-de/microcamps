const CourseDetailHeader = (props) => {
    const { theme, title, image, duration, modell, headerDescription } = props.data
    return (
        <section className="courseDetailHeader">
            <img
                className="headerBackground"
                src={`/img/${image}`}
                alt={title}
            />
            <div className="wrap">
                <article className="courseDetailHeader__textBlock">
                    <h2>
                        {theme === "data"
                            ? "Data-Science"
                            : theme === "coding"
                                ? "Front-End"
                                : "UX/UI"}
                    </h2>
                    <h2>{title}</h2>
                    <p>
                        {modell} | {duration}
                    </p>
                    <div className="plusList">
                        {props.filteredTools.map((tool, index) => (
                            <img src={`/img/${tool.image}`} alt={tool.name} key={index} />
                        ))}
                        <p>+ more</p>
                    </div>
                    <p>{headerDescription}</p>
                </article>
            </div>
        </section>
    );
};

export default CourseDetailHeader;
