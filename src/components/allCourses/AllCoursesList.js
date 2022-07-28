import { useEffect, useState } from "react";
import courses from "../../data/coursesData";
import AllCoursesCard from "./AllCoursesCard";
const AllCoursesList = () => {
    const [filteredArr, setFilteredArr] = useState(courses);

    const [filterWhat, setFilterWhat] = useState([]);
    const insertfilterWhatState = (status) => {
        if (filterWhat.includes(status)) {
            setFilterWhat(filterWhat.filter((item) => item !== status));
        } else {
            setFilterWhat([...filterWhat, status]);
        }
    };
    const [filterFor, setFilterFor] = useState([]);
    const insertfilterForState = (status) => {
        if (filterFor.includes(status)) {
            setFilterFor(filterFor.filter((item) => item !== status));
        } else {
            setFilterFor([...filterFor, status]);
        }
    };
    useEffect(() => {
        const filteredFor = courses.filter((item) => {
            if (filterFor.length <= 0) {
                return item;
            } else {
                return (
                    item.level === filterFor[0] || item.level === filterFor[1]
                );
            }
        });
        const filteredAll = filteredFor.filter((item) => {
            if (filterWhat.length <= 0) {
                return item;
            } else {
                return (
                    item.type === filterWhat[0] ||
                    item.type === filterWhat[1] ||
                    item.type === filterWhat[2]
                );
            }
        });

        setFilteredArr(filteredAll);
    }, [filterWhat, filterFor]);
    return (
        <article className="allCoursesArea__list">
            <div className="allCoursesArea__list__filter">
                <p>Filter</p>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="coding-button"
                    value="coding"
                />
                <label
                    className="button-label coding-label"
                    htmlFor="coding-button"
                >
                    <p>coding</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="design-button"
                    value="design"
                />
                <label
                    className="button-label design-label"
                    htmlFor="design-button"
                >
                    <p>design</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterWhatState(e.target.value)}
                    type="checkbox"
                    name="filter-what"
                    id="data-button"
                    value="data"
                />
                <label
                    className="button-label data-label"
                    htmlFor="data-button"
                >
                    <p>data</p>
                </label>
                {/* ---------------------- */}
                <input
                    className="hidden"
                    onChange={(e) => insertfilterForState(e.target.value)}
                    type="checkbox"
                    name="filter-for"
                    id="expert-button"
                    value="expert"
                />
                <label
                    className="button-label expert-label"
                    htmlFor="expert-button"
                >
                    <p>expert</p>
                </label>
                <input
                    className="hidden"
                    onChange={(e) => insertfilterForState(e.target.value)}
                    type="checkbox"
                    name="filter-for"
                    id="beginner-button"
                    value="Beginner"
                />
                <label
                    className="button-label beginner-label"
                    htmlFor="beginner-button"
                >
                    <p>beginner</p>
                </label>
            </div>
            <div className="allCoursesArea__list__viewList">
                {filteredArr.map((course) => (
                    <AllCoursesCard
                        key={course.id}
                        ID={course.id}
                        title={course.title}
                        type={course.type}
                        form={course.form}
                        duration={course.duration}
                        level={course.level}
                        image={course.image}
                        plusSkills={course.plusSkills}
                    />
                ))}
            </div>
        </article>
    );
};

export default AllCoursesList;
