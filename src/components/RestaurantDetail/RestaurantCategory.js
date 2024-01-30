import MenuItems from "./MenuItems";

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
                  <MenuItems key={info.id} data={info} />
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
