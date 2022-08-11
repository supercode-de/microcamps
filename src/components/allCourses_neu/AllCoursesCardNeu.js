import { Link } from "react-router-dom";

const AllCoursesCardNeu = (props) => {
  const {
    id,
    theme,
    subTheme,
    title,
    modell,
    duration,
    level,
    image,
    toolsInternal,
  } = props.data;
  
  return (
    <div className="allCoursesArea__list__viewList__card">
      <div className="allCoursesArea__list__viewList__card__header">
        <img src={`/img/${image}`} alt={image} />
        <div>
          <h4>{subTheme}</h4>
          <h4>{title}</h4>
        </div>
        <p
          className="typeOfP"
          style={{backgroundColor: theme === "design" ? "var(--clr-super-yellow" : theme === "coding" ? "var(--clr-super-green)" : "var(--clr-super-white)"}}
        >
          {theme}
        </p>
      </div>
      <div className="allCoursesArea__list__viewList__card__main">
        <div className="plusList">
          {props.filteredTools
            ? props.filteredTools.map((tool, index) => (
              <img src={`/img/${tool.image}`} alt={tool.name} key={index} />
            ))
            : toolsInternal.map((tool, index) => (
              <img src={`/img/${tool.image}`} alt={tool.name} key={index} />
            ))}
          <p>+ more</p>
        </div>
        <p>
          {modell} | {duration}
        </p>
        <p>Level: {level}</p>

        <Link className="btn" to={`/course/${id}`}>
          Zum Kurs
        </Link>
      </div>
    </div>
  );
};

export default AllCoursesCardNeu;
