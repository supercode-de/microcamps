import { Link } from "react-router-dom";

const AllCoursesCard = (props) => {
    return (
        <div className="allCoursesArea__list__viewList__card">
            <div className="allCoursesArea__list__viewList__card__header">
                <img src={`/img/${props.image}`} alt={props.image} />
                <div>
                    <h4>
                        {props.type === "data"
                            ? "Data-Science"
                            : props.type === "coding"
                            ? "Front-End"
                            : "UX/UI"}
                    </h4>
                    <h4>{props.title}</h4>
                </div>
                <p
                    className="typeOfP"
                    style={{
                        backgroundColor:
                            props.type === "coding"
                                ? "var(--clr-super-green)"
                                : props.type === "design"
                                ? "var(--clr-super-yellow)"
                                : "var(--clr-super-black)",
                    }}
                >
                    {props.type}
                </p>
            </div>
            <div className="allCoursesArea__list__viewList__card__main">
                <div className="plusList">
                    {props.plusSkills.map((skill) => (
                        <img src={`/img/${skill}`} alt={skill} />
                    ))}
                    <p>+ more</p>
                </div>
                <p>
                    {props.form} | {props.duration}
                </p>
                <p>Level: {props.level}</p>
                <Link className="btn" to={`/course/${props.ID}`}>
                    join Waitinglist
                </Link>
            </div>
        </div>
    );
};

export default AllCoursesCard;
