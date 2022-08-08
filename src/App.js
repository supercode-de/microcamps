import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop"

import InfoHeader from "./components/infoHeader/InfoHeader";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import MicroClasses from "./pages/MicroClasses";
import CourseDetailPageNeu from "./pages/CourseDetailPageNeu";

function App() {
    return (
        <div className="App">
            <InfoHeader />
            <Nav />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<MicroClasses />} />
                    <Route path="/course/:id" element={<CourseDetailPageNeu />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </div>
    );
}

export default App;
