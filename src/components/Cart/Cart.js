import CartItemTile from "./CartItemTile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  let cartData = useSelector((store) => store.cart.cartItems);

  function getTotalCostOfItems() {
    let total = 0;
    cartData.forEach((item) => {
      if (Object.keys(item).includes("price")) {
        total += Math.floor(item["price"] / 100);
      }
      if (Object.keys(item).includes("defaultPrice")) {
        total += Math.floor(item["defaultPrice"] / 100);
      }
    });
    return total;
  }

  return cartData.length ? (
    <div className="flex gap-8 w-full mx-auto p-20">
      <div className="w-8/12 flex flex-col gap-4">
        {cartData.map((item) => (
          <CartItemTile key={item.id} details={item} />
        ))}
      </div>
      <div className="w-4/12 border-2 shadow-lg py-3 px-7">
        <h1 className="text-2xl font-bold">Bill Details</h1>
        <div className="my-4">
          <div className="text-gray-600 py-4 my-1 border-b-2 flex flex-col gap-3">
            <div className="flex justify-between">
              <div>Item Total</div>
              <div className="text-gray-700 font-semibold">
                ₹{getTotalCostOfItems()}
              </div>
            </div>
            <div className="flex justify-between">
              <div>1 Month Plan</div>
              <div className="text-gray-700 font-semibold">₹10</div>
            </div>
          </div>
          <div className="text-gray-600 py-4 my-1 border-b-2">
            <div className="flex justify-between">
              <div>Delivery Fee</div>
              <div className="text-gray-700 font-semibold">
                <s className="opacity-50">₹50.00</s>{" "}
                <span className="text-green-500">FREE</span>
              </div>
            </div>
          </div>
          <div className="text-gray-600 py-4 my-1 border-b-2 border-black flex flex-col gap-3">
            <div className="flex justify-between">
              <div>Platform fee</div>
              <div className="text-gray-700 font-semibold">
                <s className="opacity-50">₹5.00</s> <span className="">3</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>GST and Restaurant Charges</div>
              <div className="text-gray-700 font-semibold">₹34.49</div>
            </div>
          </div>
          <div className="my-1 py-3">
            <div className="flex justify-between font-bold">
              <div>TO PAY</div>
              <div className="">₹{getTotalCostOfItems() + 10 + 3 + 34.49}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="w-[250px] h-[300px] bg-cart bg-cover bg-center"></div>
        <div className="my-6 text-center font-semibold text-xl text-gray-700 tracking-wide">
          Your cart is empty
        </div>
        <div className="text-gray-500 text-sm">
          You can go to home pahe to view more restaurants
        </div>
        <div className="my-6">
          <Link to="/">
            <button className="uppercase py-2 px-4 bg-orange-600 text-white font-semibold">
              See Restaurants Near You
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
