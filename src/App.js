import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Quote from "./components/Quote/Quote";

function App() {
    return (
        <div className="page-main">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Quote />
            <Contact />
        </div>
    );
}

export default App;
