import { CDN_URL } from "../../utils/constants";
import VegIcon from "../../assets/svg/veg-icon.svg";
import NonVegIcon from "../../assets/svg/non-veg-icon.svg";

const RestaurantCategory = (props) => {
  let {
    data: { title, itemCards },
    lastEntry,
    accordionEnableStatus,
    changeAccordionIndexFunction,
    currentAccordionStatus,
  } = props;

  const handleChange = () => {
    currentAccordionStatus(!accordionEnableStatus);
    changeAccordionIndexFunction();
  };
  return (
    <div className="my-8">
      <div className="shadow-lg p-4">
        <div
          className="flex justify-between item-center cursor-pointer select-none"
          onClick={handleChange}
        >
          <div className="text-2xl font-bold">
            {title + " (" + itemCards.length + ") "}
          </div>
          <div className="">{accordionEnableStatus ? "🔽" : "◀"}</div>
        </div>
        {accordionEnableStatus && (
          <div className="my-4">
            {itemCards.map((item, index) => {
              let {
                card: { info },
              } = item;
              return (
                <div
                  key={info.id}
                  className={
                    itemCards.length == 1 || index == itemCards.length - 1
                      ? ""
                      : "border-b-2 border-gray-200 mb-5"
                  }
                >
                  <div className="flex justify-between mb-10 items-center">
                    <div className="w-4/5">
                      <div className="my-2">
                        <img
                          className="w-4"
                          src={
                            info.itemAttribute.vegClassifier == "VEG"
                              ? VegIcon
                              : NonVegIcon
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
                    <div className="w-[125px] h-[100px] self-end">
                      <img
                        className={
                          info.imageId
                            ? "w-full h-full rounded-md object-cover"
                            : "hidden"
                        }
                        src={CDN_URL + info.imageId}
                        alt="image"
                      ></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        className={
          lastEntry == "pending" ? "border-t-8 border-gray-200 my-12" : ""
        }
      ></div>
    </div>
  );
};

export default RestaurantCategory;
