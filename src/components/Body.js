import RestaurantData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantDataList, setRestaurantDataList] = useState(RestaurantData);

  function getTopRatedRestaurants() {
    let filterRestaurantData = RestaurantData.filter((item) => {
      return item?.info?.avgRating > 4;
    });
    setRestaurantDataList(filterRestaurantData);
  }

  return (
    <div className="body">
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
      <div className="res-container">
        {restaurantDataList.map((data) => {
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
