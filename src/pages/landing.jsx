import Middle from "../components/Middle";
import ScreenShot from "../components/ScreenShot";
import LandPage from "../components/landPage";
import IntroAnimation from "../components/introAnimation/intro";
import FeatureScroller from "../components/landingpageAnimation/horizonatlAni";
import SingleChecklistBoard from "../checklist-view/taskboard";
import SingleSecondChecklistBoard from "../checklist-view/taskboard2";
import ManagementToolsSection from "../feature-section/management-tools";
import AboutSection from "../components/aboutSection/aboutSection";
import ContactSection from "../components/contactSection/contactSection";

import "./landingjsx.css";
function Landing() {
  return (
    <>
      <IntroAnimation>
        <LandPage />
        <Middle />
        <ScreenShot />
        <FeatureScroller />
        <ManagementToolsSection />
        <div className="boardsss">
          <SingleChecklistBoard />
          <SingleSecondChecklistBoard />
        </div>
        <AboutSection />
        <ContactSection />
      </IntroAnimation>
    </>
  );
}

export default Landing;
