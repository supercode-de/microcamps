import { Link } from "react-router-dom";

const AllCoursesCardNeu = (props) => {
    const {id, theme, subTheme, title, modell, duration, level, image, toolsImages} = props.data
    return (
        <div className="allCoursesArea__list__viewList__card">
            <div className="allCoursesArea__list__viewList__card__header">
                <img src={`/img/${image}`} alt={image} />
                <div>
                    <h4>
                        {subTheme}
                    </h4>
                    <h4>{title}</h4>
                </div>
                <p
                    className="typeOfP"
                    style={{
                        backgroundColor:
                            theme === "coding"
                                ? "var(--clr-super-green)"
                                : theme === "design"
                                ? "var(--clr-super-yellow)"
                                : "var(--clr-super-black)",
                    }}
                >
                    {theme}
                </p>
            </div>
            <div className="allCoursesArea__list__viewList__card__main">
                <div className="plusList">
                    {toolsImages.map((tool, index) => (
                        <img src={`/img/${tool}`} alt={tool} key={index} />
                    ))}
                    <p>+ more</p>
                </div>
                <p>
                    {modell} | {duration}
                </p>
                <p>Level: {level}</p>
                <Link className="btn" to={`/course/${id}`}>
                    join Waitinglist
                </Link>
            </div>
        </div>
    );
};

export default AllCoursesCardNeu;
