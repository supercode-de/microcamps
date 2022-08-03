const Timetable = () => {
    return (
        <article className="scheduleSection__weekGrid">
            {/* Montag */}
            <div className="scheduleSection__weekGrid__day">
                <p className="dayHeadline">Montag</p>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
            </div>
            {/* Dienstag */}
            <div className="scheduleSection__weekGrid__day">
                <p className="dayHeadline">Dienstag</p>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
            </div>
            {/* Mittwoch */}
            <div className="scheduleSection__weekGrid__day">
                <p className="dayHeadline">Mittwoch</p>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
            </div>
            {/* Donnerstag */}
            <div className="scheduleSection__weekGrid__day">
                <p className="dayHeadline">Donnerstag</p>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
            </div>
            {/* Freitag */}
            <div className="scheduleSection__weekGrid__day">
                <p className="dayHeadline">Freitag</p>
                <div className="scheduleSection__weekGrid__day__card">
                    <p className="headline">Live class</p>
                    <p className="time">2 Stunden</p>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Timetable;