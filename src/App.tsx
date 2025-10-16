import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <SideBar />
        <main className="peer-hover:ml-56 ml-24 p-8 transition-all duration-300 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
