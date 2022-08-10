import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";

import InfoHeader from "./components/infoHeader/InfoHeader";
import Navbar from "./components/nav_neu/Nav_neu";
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import MicroClasses from "./pages/MicroClasses";
import CourseDetailPageNeu from "./pages/CourseDetailPageNeu";
import OurStory from "./pages/OurStory/OurStory";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <InfoHeader />
            <Navbar />
            <ScrollToTop>
                <Routes>
                <Route path="/" element={<MicroClasses />} />
                <Route path="/course/:id" element={<CourseDetailPageNeu />} />
                <Route path="/our-story" element={<OurStory />} />
            </Routes>
            </ScrollToTop>
            
            <Footer />
        </div>
    );
}

export default App;
