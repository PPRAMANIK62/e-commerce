import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle, MdAddShoppingCart, MdSearch } from "react-icons/md";
import logo from "../../../images/logo.png";
import "../../../styles/styles.css";

const options = {
  burgerColor: "var(--color-blue-400)",
  burgerColorHover: "var(--color-blue-700)",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgba(24,33,47, 0.85)",
  logoHoverSize: "10px",
  logoHoverColor: "var(--color-blue-700)",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "var(--color-blue-400)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "var(--color-green-700)",
  link1Margin: "1vmax",
  profileIcon: true,
  profileIconUrl: "/login",
  profileIconColor: "var(--color-blue-400)",
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  searchIconColor: "var(--color-blue-400)",
  SearchIconElement: MdSearch,
  cartIcon: true,
  cartIconColor: "var(--color-blue-400)",
  CartIconElement: MdAddShoppingCart,
  profileIconColorHover: "var(--color-green-700)",
  searchIconColorHover: "var(--color-green-700)",
  cartIconColorHover: "var(--color-green-700)",
  cartIconMargin: "1vmax",
};

function Header() {
  return <ReactNavbar {...options} />;
}

export default Header;
