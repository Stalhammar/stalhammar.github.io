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
      <div className="min-h-dvh bg-gray-100 dark:bg-neutral-800 overflow-x-hidden">
        <SideBar />
        <div className="pl-0 md:pl-24 md:peer-hover:pl-56 transition-[padding] duration-300">
          <main className="p-8">
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
      </div>
    </Router>
  );
}

export default App;
