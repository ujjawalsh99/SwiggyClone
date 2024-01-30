import { CDN_URL } from "../../utils/constants";
import VegIcon from "../../assets/svg/veg-icon.svg";
import NonVegIcon from "../../assets/svg/non-veg-icon.svg";
import { addItems } from "../../utils/ReduxStore/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MenuItems = ({ data }) => {
  const info = data;

  const dispatchRef = useDispatch();
  let [itemAddedToCart, setItemAddedToCart] = useState(false);

  const handleAddCart = (itemDetails) => {
    if (itemAddedToCart) return;
    setItemAddedToCart(true);
    dispatchRef(addItems(itemDetails));
  };

  return (
    <div className="flex justify-between mb-10 items-center">
      <div className="w-4/5">
        <div className="my-2">
          <img
            className="w-4"
            src={
              info.itemAttribute.vegClassifier == "VEG" ? VegIcon : NonVegIcon
            }
          ></img>
        </div>
        <div>
          <div className="font-bold">{info.name}</div>
          <div className="font-normal">
            ₹{" "}
            {info.price
              ? Math.floor(info.price / 100)
              : Math.floor(info.defaultPrice / 100)}
          </div>
        </div>
        <div className="my-3 text-sm font-light text-gray-500">
          {info.description}
        </div>
      </div>
      <div className="w-[125px] h-[100px] self-end relative">
        <img
          className={
            info.imageId ? "w-full h-full rounded-md object-cover" : "hidden"
          }
          src={CDN_URL + info.imageId}
          alt="image"
        ></img>
        <button
          className={
            "px-5 py-2 font-extrabold rounded-lg hover:shadow-md absolute -bottom-1 border-2 " +
            (itemAddedToCart
              ? "bg-green-500 text-white left-4"
              : "text-green-500 bg-white left-6")
          }
          onClick={() => handleAddCart(info)}
        >
          {itemAddedToCart ? "ADDED" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
