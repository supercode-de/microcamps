const CourseDetailHeader = (props) => {
    const {theme, title, image, duration, modell, tools, description} = props
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
                        {tools.map((tool, index) => (
                            <img src={`/img/${tool}`} alt={tool} key={index}/>
                        ))}
                        <p>+ more</p>
                    </div>
                    <p>{description}</p>
                </article>
            </div>
        </section>
    );
};

export default CourseDetailHeader;
