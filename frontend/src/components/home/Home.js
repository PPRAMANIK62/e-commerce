import { useEffect } from "react";
import { useAlert } from "react-alert";
import { CgMouse } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions.js";
import MetaData from "../layout/MetaData.js";
import Loader from "../layout/loader/Loader.js";
import "./Home.css";
import ProductCard from "./ProductCard.js";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "2000",
  _id: "Purbayan",
};

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isLoading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="E-COMMERCE" />

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
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
