import { useParams } from "react-router-dom";
import CourseDetailHeader from "../components/courseDetailPage/courseDetailHeader/CourseDetailHeader";
import BootcampSection from "../components/courseDetailPage/bootcampSection/BootcampSection";
import OverviewSection from "../components/courseDetailPage/overviewSection/OverviewSection";
import StickyNav from "../components/courseDetailPage/stickyNav/StickyNav";
import DarkInfoTextTop from "../components/darkInfoTextTop/DarkInfoTextTop";
import CurriculumSection from "../components/courseDetailPage/curriculumSection/CurriculumSection";
import ScheduleSection from "../components/courseDetailPage/scheduleSection/ScheduleSection";
import PortfolioSection from "../components/courseDetailPage/portfolioSection/PortfolioSection";
import TeamSection from "../components/courseDetailPage/teamSection/TeamSection";
import ToolsSection from "../components/courseDetailPage/toolsSection/ToolsSection";
import AllCoursesArea from "../components/allCourses/AllCoursesArea";
import DarkInfoTextBottom from "../components/darkInfoTextBottom/DarkInfoTextBottom";
import BigPictureSection from "../components/bigPictureSection/BigPictureSection";
import NewsletterSection from "../components/newsletterSection/NewsletterSection";
import FaqSection from "../components/faqSection/FaqSection";
import LastBlueSection from "../components/lastBlueSection/LastBlueSection";
import PricingSection from "../components/courseDetailPage/pricingSection/PricingSection";
import ClassSection from "../components/courseDetailPage/classSection/ClassSection";
// import courses from "../data/coursesData";
import kurseDaten from "../data/courseData.json"

const CourseDetailPageNeu = () => {
    console.log("kursedata:", kurseDaten)
    const { id } = useParams();
    console.log("useparams", id)

    const kurs = kurseDaten.filter(
        (kurs) => kurs.id === id
    )[0];

    return (
        <>
            <CourseDetailHeader
                theme={kurs.theme}
                title={kurs.title}
                image={kurs.image}
                duration={kurs.duration}
                modell={kurs.modell}
                tools={kurs.tools}
                description={kurs.headerDescription}
            />
            <DarkInfoTextTop />
            <div className="mainContent">
                <StickyNav />
                <OverviewSection
                    data={kurs}
                    
                />
                {/* umbenennen später */}
                <BootcampSection
                    curriculumOverview={kurs.curriculumOverview} />
                <CurriculumSection
                    data={kurs}
                />
                <ScheduleSection
                    data={kurs}
                />
                <PortfolioSection />
                <TeamSection />
                <ToolsSection tools={kurs.tools} />
                <PricingSection />
                <ClassSection />

                {/* <div style={{ height: "100vh" }}></div> */}
                <AllCoursesArea />
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
