import AllCoursesList from "./AllCoursesList";

const AllCoursesArea = () => {
    return (
        <section className="allCoursesArea">
            <div className="wrap">
                <article className="allCoursesArea__introText" id="allCourses">
                    <h3>Live & Online – </h3>
                    <h3>
                        unsere<span className="headlines_stroke">MicroCamps</span>
                    </h3>
                    <p>
                    Du bist wissenshungrig, möchtest aber nicht gleich das ganze Menü bestellen? Kein Problem! Stell dir deine Kurse individuell zusammen und lerne nur das, was du wirklich brauchst.   
                    </p>
                </article>
                <AllCoursesList />
                <article className="btn__wrap">
                    <a className="btn btn--more" href="/">
                        view more
                    </a>
                </article>
            </div>
        </section>
    );
};

export default AllCoursesArea;
