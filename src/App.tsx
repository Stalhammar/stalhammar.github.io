import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <SideBar />
        <main className="ml-56 p-8">
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
