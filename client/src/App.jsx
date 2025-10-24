import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";
import Jobs from "./components/Jobs/Jobs";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container row">
                <Employees />
                <Jobs />
            </div>
        </>
    );
}

export default App;
