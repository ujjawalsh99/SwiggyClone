import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmersUI from "./Shimmers";

const Body = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let dummyCount = new Array(20).fill(0);

  function getTopRatedRestaurants() {
    let filterTopRated = restaurantDataList.filter((item) => {
      return item?.info?.avgRating > 4;
    });
    setFilteredRestaurants(filterTopRated);
  }

  async function fetchDataFromAPI() {
    const responseFromAPI = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6773353&lng=77.3464618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await responseFromAPI.json();
    setRestaurantDataList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  }

  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  return filteredRestaurants.length == 0 ? (
    <div className="shimmers">
      <div
        className="shimmers-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {dummyCount.map((d, index) => {
          return <ShimmersUI key={index} />;
        })}
      </div>
    </div>
  ) : (
    <div className="body">
      <div
        className="tools"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <div className="search">
          <input
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          ></input>
          <button
            onClick={() => {
              if (searchData) {
                let resList = restaurantDataList.filter((data) =>
                  data?.info.name.toLowerCase().includes(searchData.toLowerCase())
                );
                setFilteredRestaurants(resList);
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={function () {
              getTopRatedRestaurants();
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((data) => {
          return <RestaurantCard key={data?.info?.id} resData={data?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;

function execute() {
  console.log("Bhakti he shakti hai");
}
