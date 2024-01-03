import { useEffect, useState } from "react";

const useCompleteRestaurantData = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  // console.log("Custom Hook");
  async function fetchDataFromAPI() {
    const responseFromAPI = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6773353&lng=77.3464618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await responseFromAPI.json();
    // console.log(jsonData);
    setRestaurantDataList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    // console.log("Custom Hook UseEffect");
    fetchDataFromAPI();
    // console.log(restaurantDataList);
  }, []);
  // console.log(restaurantDataList);
  return restaurantDataList;
};

export default useCompleteRestaurantData;
