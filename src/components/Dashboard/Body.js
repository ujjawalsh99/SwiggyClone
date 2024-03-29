import RestaurantCard, { showTopRatedTag } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmersUI from "../shared/components/Shimmers/Shimmers";
import useCompleteRestaurantData from "../../utils/useCompleteRestaurantData";
import CardContainer from "./RestaurantMenu";
import BestOffersComponent from "./BestOffersComonent";
import { useContext } from "react";
import UserContext from "../../utils/context-data/UserContext";

const Body = () => {
  let restaurantDataList;
  let foodMenuBanner;
  let bestOffersList;
  const [searchData, setSearchData] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let dummyCount = new Array(20).fill(0);
  const TopRestaurantCard = showTopRatedTag(RestaurantCard);
  // console.log(useContext(UserContext));

  function getTopRatedRestaurants() {
    let filterTopRated = restaurantDataList.filter((item) => {
      return item?.info?.avgRating > 4.2;
    });
    setFilteredRestaurants(filterTopRated);
  }

  [bestOffersList, restaurantDataList, foodMenuBanner] =
    useCompleteRestaurantData();
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
    <div className="bg-slate-100 min-h-full w-full p-10">
      {/* <UserContext.Consumer>
        {(d) => console.log(d)}
      </UserContext.Consumer> */}
      <div className="flex flex-col">
        {bestOffersList && bestOffersList.length ? (
          <div className={bestOffersList.length ? "w-11/12 m-auto" : "hidden"}>
            <p className="text-xl font-bold ml-16">Best offers for you</p>
            <div className="offer-banner flex gap-8 m-8 ml-16 overflow-x-scroll">
              {bestOffersList.map((item, index) => (
                <BestOffersComponent key={item.id} data={item.imageId} />
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {foodMenuBanner && foodMenuBanner.length ? (
          <div className="w-11/12 m-auto">
            <p className="text-xl font-bold text-center md:text-start">
              What's on your mind?
            </p>
            <CardContainer cards={foodMenuBanner} />
          </div>
        ) : (
          <div></div>
        )}

        <div className="w-11/12 m-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
            <div className="flex gap-5">
              <input
                type="text"
                name="price"
                id="price"
                autoComplete="off"
                className="block w-60 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="bg-green-200 rounded-md px-4 py-2 hover:bg-green-300"
              onClick={function () {
                getTopRatedRestaurants();
              }}
            >
              Top rated Restaurants
            </button>
          </div>
          <div className="self-end">
            <p className="text-md text-center lg:text-start lg:text-xl font-bold my-7">
              Restaurants with online food delivery in Ghaziabad
            </p>
            <div className="flex flex-wrap gap-y-14 gap-x-10 justify-center md:justify-start">
              {filteredRestaurants.map((data) => {
                return data?.info.avgRating > 4.2 ? (
                  <TopRestaurantCard
                    key={data?.info?.id}
                    resData={data?.info}
                  />
                ) : (
                  <RestaurantCard key={data?.info?.id} resData={data?.info} />
                );
              })}
            </div>
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
