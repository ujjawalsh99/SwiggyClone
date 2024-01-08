import { useEffect, useState } from "react";
import { RESTAURANT_DASHBOARD_URL } from "../utils/constants";

const useCompleteRestaurantData = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [bestOffersData, setBestOffersData] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);
  // console.log("Custom Hook");
  async function fetchDataFromAPI() {
    const responseFromAPI = await fetch(RESTAURANT_DASHBOARD_URL);

    const jsonData = await responseFromAPI.json();
    setBestOffersData(
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setRestaurantDataList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
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
  return [bestOffersData, restaurantDataList, foodMenu];
};

export default useCompleteRestaurantData;
