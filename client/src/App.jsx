import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeesPage from "./pages/EmployeesPage";
import StatisticsPage from "./pages/StatisticsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-base-200">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/statistics" element={<StatisticsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
