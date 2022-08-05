import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";

import InfoHeader from "./components/infoHeader/InfoHeader";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MicroClasses from "./pages/MicroClasses";
import CourseDetailPage from "./pages/CourseDetailPage";

/*Pages*/
import OurStory from "./pages/OurStory/OurStory";

function App() {
    return (
        <div className="App">
            <InfoHeader />
            <Nav />
            <Routes>
                <Route path="/" element={<MicroClasses />} />
                <Route path="/course/:id" element={<CourseDetailPage />} />
                <Route path="/supercamp/our-story" element={<OurStory />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
