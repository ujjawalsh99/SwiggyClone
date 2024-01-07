import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmersUI from "../shared/components/Shimmers/Shimmers";
import useCompleteRestaurantData from "../../utils/useCompleteRestaurantData";
import CardContainer from "./RestaurantMenu";

const Body = () => {
  let restaurantDataList;
  let foodMenuBanner;
  const [searchData, setSearchData] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let dummyCount = new Array(20).fill(0);

  function getTopRatedRestaurants() {
    let filterTopRated = restaurantDataList.filter((item) => {
      return item?.info?.avgRating > 4;
    });
    setFilteredRestaurants(filterTopRated);
  }

  [restaurantDataList, foodMenuBanner] = useCompleteRestaurantData();
  useEffect(() => {
    setFilteredRestaurants(restaurantDataList);
  }, [restaurantDataList]);

  return filteredRestaurants.length == 0 ? (
    <div className="">
      <div className="flex flex-wrap gap-x-10 justify-center">
        {dummyCount.map((d, index) => {
          return <ShimmersUI key={index} />;
        })}
      </div>
    </div>
  ) : (
    <div className="bg-slate-100 h-full w-full p-10">
      <div className="flex flex-col">
        <div className="w-11/12 m-auto">
          <p className="text-xl font-bold ml-16">What's on your mind?</p>
          <CardContainer cards={foodMenuBanner} />
        </div>

        <div className="flex justify-between items-center w-10/12 m-auto">
          <div className="flex gap-5">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search Restaurant"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            ></input>

            <button
              className="rounded-md bg-slate-300 px-4 hover:bg-slate-400"
              onClick={() => {
                if (searchData) {
                  let resList = restaurantDataList.filter((data) =>
                    data?.info.name
                      .toLowerCase()
                      .includes(searchData.toLowerCase())
                  );
                  setFilteredRestaurants(resList);
                }
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-green-200 rounded-md px-4 py-2 hover:bg-green-300 mr-20"
            onClick={function () {
              getTopRatedRestaurants();
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="w-11/12 self-end">
          <p className="text-xl font-bold my-7">
            Restaurants with online food delivery in Ghaziabad
          </p>
          <div className="flex flex-wrap gap-y-14 gap-x-10 justify-start">
            {filteredRestaurants.map((data) => {
              return (
                <RestaurantCard key={data?.info?.id} resData={data?.info} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

function execute() {
  // console.log("Bhakti he shakti hai");
}
