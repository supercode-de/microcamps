import { useParams } from "react-router-dom";
import CourseDetailHeader from "../components/courseDetailPage/courseDetailHeader/CourseDetailHeader";
import DarkInfoTextTop from "../components/darkInfoTextTop/DarkInfoTextTop";
import StickyNav from "../components/courseDetailPage/stickyNav/StickyNav";
import OverviewSection from "../components/courseDetailPage/overviewSection/OverviewSection";
import BootcampSection from "../components/courseDetailPage/bootcampSection/BootcampSection";
import CurriculumSection from "../components/courseDetailPage/curriculumSection/CurriculumSection";
import ScheduleSection from "../components/courseDetailPage/scheduleSection/ScheduleSection";
import TeamSection from "../components/courseDetailPage/teamSection/TeamSection";
import ToolsSection from "../components/courseDetailPage/toolsSection/ToolsSection";
import ClassSection from "../components/courseDetailPage/classSection/ClassSection";
import AllCoursesAreaNeu from "../components/allCourses_neu/AllCoursesAreaNeu";
import DarkInfoTextBottom from "../components/darkInfoTextBottom/DarkInfoTextBottom";
import BigPictureSection from "../components/bigPictureSection/BigPictureSection";
import NewsletterSection from "../components/newsletterSection/NewsletterSection";
import FaqSection from "../components/faqSection/FaqSection";
import LastBlueSection from "../components/lastBlueSection/LastBlueSection";

import kurseDaten from "../data/courseData.json"
import toolsDataExternal from "../data/toolsDataExternal"

const CourseDetailPageNeu = () => {
    const { id } = useParams();
    const kurs = kurseDaten.filter(
        (kurs) => kurs.id === id
    )[0];

// Hier wird die toolsDataExternal mithilfe von den im key "tools" aufgeführten Elementen gefiltert, damit die Tools an einem zentralen Ort verwaltet werden können
    let filteredTools = []
    for (let index = 0; index < kurs.toolsInternal.length; index++) {
        const toolExt = toolsDataExternal.filter(
            (toolExt) => toolExt.name === kurs.toolsInternal[index].name
        )[0];
        filteredTools.push(toolExt);
    }

    return (
        <>
            <CourseDetailHeader
                data={kurs}
                filteredTools={filteredTools}
            />
            <DarkInfoTextTop />
            <div className="mainContent">
                <StickyNav />
                <OverviewSection data={kurs} />
                <BootcampSection curriculumOverview={kurs.curriculumOverview} />
                <CurriculumSection data={kurs} />
                <ScheduleSection data={kurs} />
                <TeamSection data={kurs} />
                <ToolsSection
                    data={kurs}
                    filteredTools={filteredTools}
                />
                <ClassSection data={kurs} />
                <AllCoursesAreaNeu filteredTools={filteredTools} />
                <DarkInfoTextBottom />
                <BigPictureSection />
                <NewsletterSection />
                <FaqSection />
                <LastBlueSection />
            </div>
        </>
    );
};

export default CourseDetailPageNeu;
