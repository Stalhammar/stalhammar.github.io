import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <SideBar />
        <main className="peer-hover:ml-56 ml-24 p-8 transition-all duration-300 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
