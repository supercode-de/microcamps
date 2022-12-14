import AllCoursesListNeu from "./AllCoursesListNeu";
const AllCoursesAreaNeu = (props) => {
    return (
        <section className="allCoursesArea">
            <div className="wrap">
                <article className="allCoursesArea__introText" id="allCourses">
                    <h3>Live & Online – </h3>
                    <h3>
                        unsere<span className="headlines_stroke"> MicroCamps</span>
                    </h3>
                    <p>
                        Du bist wissenshungrig, möchtest aber nicht gleich das ganze Menü bestellen? Kein Problem! Stell dir deine Kurse individuell zusammen und lerne nur das, was du wirklich brauchst.
                    </p>
                </article>
                <AllCoursesListNeu filteredTools={props.filteredTools} />

            </div>
        </section>
    );
};

export default AllCoursesAreaNeu;
