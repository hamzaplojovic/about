import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
    return (
        <div className="page-main">
            <Navbar />
            <Home />
            <About />
        </div>
    );
}

export default App;
