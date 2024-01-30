import { CDN_URL } from "../../utils/constants";

const CartItemTile = ({ details }) => {
  return (
    <div className="flex border-2 shadow-lg p-3 w-full hover:bg-gray-200">
      <div className="w-[125px] h-[100px]">
        <img
          src={CDN_URL + details.imageId}
          className="w-full h-full rounded-md object-cover"
        ></img>
      </div>
      <div className="ms-8 w-10/12">
        <h1 className="text-2xl font-bold">{details.name}</h1>
        <p className="font-thin text-base">{details.category}</p>
        <p className="text-sm font-thin">{details.description}</p>
      </div>
      <div className="justify-self-end">
        <h2 className="text-xl font-medium">
          ₹
          {details.price
            ? Math.floor(details.price / 100)
            : Math.floor(details.defaultPrice / 100)}
        </h2>
      </div>
    </div>
  );
};

export default CartItemTile;
