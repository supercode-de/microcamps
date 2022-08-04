import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";

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
            <Routes>
                <Route path="/" element={<MicroClasses />} />
                {/* <Route path="/course/:id" element={<CourseDetailPage />} /> */}
                <Route path="/course/:id" element={<CourseDetailPageNeu />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
