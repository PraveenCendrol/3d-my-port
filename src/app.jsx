import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
