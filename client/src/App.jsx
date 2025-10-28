import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";
import Jobs from "./components/Jobs/Jobs";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />
            <div className="container mx-auto p-4">
                <Dashboard />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">{/* <Employees /> */}</div>
                    <div className="lg:col-span-1">{/* <Jobs /> */}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
