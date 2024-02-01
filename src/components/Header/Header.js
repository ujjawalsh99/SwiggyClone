import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import ReactLogo from "../../assets/svg/swiggy.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NavigationIcon from "@mui/icons-material/Navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserContext from "../../utils/context-data/UserContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useSelector } from "react-redux";
import { Navbar } from "flowbite-react";

const Header = () => {
  let [status, setStatus] = new useState("Login");
  function switchLoginLogout() {
    status = status == "Login" ? "Logout" : "Login";
    setStatus(status);
  }
  // console.log(useContext(UserContext));
  const cartItemsCount = useSelector((store) => store.cart.cartItems.length);
  function handleClick() {
    console.log("Logging the click...");
  }
  return (
    <Navbar fluid rounded className="mx-7">
      <Navbar.Brand>
        <Link to="/">
          <img className="mr-3 h-6 sm:h-9" src={ReactLogo}></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="">
        <div onClick={() => handleClick()} className=" my-3 md:my-0">
          {useOnlineStatus() ? "🟢" : "🔴"} Availability
        </div>
        <div className="text-[#45474B] my-3 md:my-0">
          <Link to="/" className="flex gap-2">
            <HomeIcon />
            Home
          </Link>
        </div>
        <div className="text-[#45474B] my-3 md:my-0">
          <Link to="/search" className="flex gap-2">
            <SearchIcon />
            Search
          </Link>
        </div>
        <div className="text-[#45474B] my-3 md:my-0">
          <Link to="/career" className="flex gap-2">
            <NavigationIcon />
            Career
          </Link>
        </div>
        <div className="text-[#45474B] my-3 md:my-0">
          <Link to="/instamart" className="flex gap-2">
            <LocalShippingIcon />
            Insta Mart
          </Link>
        </div>
        <div className="relative text-[#45474B] my-3 md:my-0">
          <Link to="/cart" className="flex gap-2">
            <ShoppingCartIcon />
            {cartItemsCount > 0 && (
              <span className="absolute left-24 bottom-0 md:bottom-4 md:left-3 text-white rounded-full bg-red-400 py-1 px-2 text-xs">
                {cartItemsCount}
              </span>
            )}
            Cart
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
