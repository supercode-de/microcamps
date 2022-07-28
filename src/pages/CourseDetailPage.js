import { useParams } from "react-router-dom";
import CourseDetailHeader from "../components/courseDetailPage/courseDetailHeader/CourseDetailHeader";
import BootcampSection from "../components/courseDetailPage/bootcampSection/BootcampSection";
import OverviewSection from "../components/courseDetailPage/overviewSection/OverviewSection";
import StickyNav from "../components/courseDetailPage/stickyNav/StickyNav";
import DarkInfoTextTop from "../components/darkInfoTextTop/DarkInfoTextTop";
import courses from "../data/coursesData";
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

const CourseDetailPage = () => {
    const { id } = useParams();
    const course = courses.filter(
        (course) => Number(course.id) === Number(id)
    )[0];
    return (
        <>
            <CourseDetailHeader
                type={course.type}
                title={course.title}
                image={course.image}
                duration={course.duration}
                form={course.form}
                plusSkills={course.plusSkills}
                description={course.description}
            />
            <DarkInfoTextTop />
            <div className="mainContent">
                <StickyNav />
                <OverviewSection />
                <BootcampSection />
                <CurriculumSection />
                <ScheduleSection />
                <PortfolioSection />
                <TeamSection />
                <ToolsSection tools={course.plusSkills} />
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

export default CourseDetailPage;
