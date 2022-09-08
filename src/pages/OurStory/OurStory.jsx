import "./OurStory.scss";

//Components import
import HeaderOurStory from "../../components/headerOurStory/HeaderOurStory";
import UxUiPaySection from "../../components/uxUiPaySection/UxUiPaySection";
import SolutionLearningUxUi from "../../components/solutionLearningUxUi/SolutionLearningUxUi";
import LiveOnlineUiUx from "../../components/liveOnlineUiUxSection/LiveOnlineUiUx";
import MeetTeam from "../../components/meetTeamSection/MeetTeam";
import BigPictureSection from "../../components/bigPictureSection/BigPictureSection";
import NewsletterSection from "../../components/newsletterSection/NewsletterSection";
import FaqSection from "../../components/faqSection/FaqSection";
import LastBlueSection from "../../components/lastBlueSection/LastBlueSection";



const OurStory = () => {
  return (
    <div className="our-story-wrapper">
      <HeaderOurStory />
      <main>
        <UxUiPaySection />
        <SolutionLearningUxUi />
        <LiveOnlineUiUx/>
        <MeetTeam />
        <BigPictureSection/>
        <NewsletterSection/>
        <FaqSection/>
        <LastBlueSection/>
      </main>
    </div>
  );
};

export default OurStory;
