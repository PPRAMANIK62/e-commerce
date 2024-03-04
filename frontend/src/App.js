import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import Footer from "./components/layout/footer/Footer.js";
import Header from "./components/layout/header/Header.js";
import ProductDetails from "./components/product/ProductDetails.js";
import Products from "./components/product/Products.js";
import Search from "./components/product/Search.js";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" Component={ProductDetails} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
