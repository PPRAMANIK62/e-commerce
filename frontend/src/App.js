import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import Footer from "./components/layout/footer/Footer.js";
import Header from "./components/layout/header/Header.js";
import ProductDetails from "./components/product/ProductDetails.js";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" Component={ProductDetails} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
