import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Components
import { Home, About, Contact, Github, Error } from "./pages";

//Pages
import { Nav, Footer } from "./components";




const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/github" element={<Github />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />
    </Router >
  );
}


export default App;
