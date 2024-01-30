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
    <div className="header flex shadow-md shadow-slate-200 w-full justify-between">
      <div className="w-1/6 flex p-3 justify-center">
        <Link to="/" className="w-4/6">
          <img className="w-full" src={ReactLogo}></img>
        </Link>
      </div>
      <div className="w-4/6 shrink-0">
        <ul className="flex p-8 justify-end">
          <li
            className="text-gray-700 px-7 font-medium"
            onClick={() => handleClick()}
          >
            Availability: {useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-700 px-7 flex justify-center items-center gap-2 font-medium hover:text-orange-400 cursor-pointer"
            >
              <HomeIcon />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/search"
              className="text-gray-700 px-7 flex justify-center items-center gap-2 font-medium hover:text-orange-400 cursor-pointer"
            >
              <SearchIcon />
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="text-gray-700 px-7 flex justify-center items-center gap-2 font-medium hover:text-orange-400 cursor-pointer"
            >
              <NavigationIcon />
              Career
            </Link>
          </li>
          {/* <li>
            <Link
              to="/sign-in"
              className="px-7 flex justify-center items-center gap-2 font-medium hover:text-orange-400 cursor-pointer"
            >
              <AccountCircleIcon />
              Sign In
            </Link>
          </li> */}
          <li>
            <Link
              to="/instamart"
              className="text-gray-700 px-7 flex justify-center items-center gap-2 font-medium hover:text-orange-400 cursor-pointer"
            >
              <LocalShippingIcon />
              Insta Mart
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="text-gray-700 px-7 flex justify-center items-center gap-4 font-medium hover:text-orange-400 cursor-pointer"
            >
              <ShoppingCartIcon />
              {cartItemsCount > 0 && (
                <span className="absolute bottom-4 left-11 text-white rounded-full bg-red-400 py-1 px-2 text-xs">
                  {cartItemsCount}
                </span>
              )}
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
