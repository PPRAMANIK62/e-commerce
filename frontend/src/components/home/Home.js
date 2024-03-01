import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "2000",
  _id: "Purbayan",
};

function Home() {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#homeHeading">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading" id="homeHeading">
        Featured Products
      </h2>

      <div className="container" id="container">
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
        <ProductCard key={product._id} product={product} />
      </div>
    </>
  );
}

export default Home;
