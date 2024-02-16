import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom"

import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>    
        </div>
      <Footer />
    </Router>
  );
}

export default App;
