import { useEffect, useState } from "react";

const useCompleteRestaurantData = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);
  // console.log("Custom Hook");
  async function fetchDataFromAPI() {
    const responseFromAPI = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6773353&lng=77.3464618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await responseFromAPI.json();
    setRestaurantDataList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFoodMenu(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }

  useEffect(() => {
    // console.log("Custom Hook UseEffect");
    fetchDataFromAPI();
    // console.log(restaurantDataList);
  }, []);
  // console.log(restaurantDataList);
  return [restaurantDataList, foodMenu];
};

export default useCompleteRestaurantData;
