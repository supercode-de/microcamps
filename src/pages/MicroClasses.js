import AllCoursesArea from "../components/allCourses/AllCoursesArea";
import AlumniSection from "../components/alumniSection/AlumniSection";
import BigPictureSection from "../components/bigPictureSection/BigPictureSection";
import DarkInfoTextBottom from "../components/darkInfoTextBottom/DarkInfoTextBottom";
import DarkInfoTextTop from "../components/darkInfoTextTop/DarkInfoTextTop";
import FaqSection from "../components/faqSection/FaqSection";
import HeaderSection from "../components/headerSection/HeaderSection";
import LastBlueSection from "../components/lastBlueSection/LastBlueSection";
import NewsletterSection from "../components/newsletterSection/NewsletterSection";
import OurStorySection from "../components/ourStorySection/OurStorySection";
import ReasonsWhySec from "../components/reasonsWhySection/ReasonsWhySec";

const MicroClasses = () => {
    return (
        <>
            <HeaderSection />
            <DarkInfoTextTop />
            <AllCoursesArea />
            <ReasonsWhySec />
            <AlumniSection />
            <OurStorySection />
            <DarkInfoTextBottom />
            <BigPictureSection />
            <NewsletterSection />
            <FaqSection />
            <LastBlueSection />
        </>
    );
};

export default MicroClasses;
