import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import Footer from "./components/layout/footer/Footer.js";
import Header from "./components/layout/header/Header.js";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
