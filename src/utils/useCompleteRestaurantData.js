import { useEffect, useState } from "react";
import { RESTAURANT_DASHBOARD_URL } from "../utils/constants";

const useCompleteRestaurantData = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [bestOffersData, setBestOffersData] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);
  const foodMenuID = "whats_on_your_mind";
  const restaurantListID = "restaurant_grid_listing";
  // console.log("Custom Hook");
  async function fetchDataFromAPI() {
    const responseFromAPI = await fetch(RESTAURANT_DASHBOARD_URL);

    const {
      data: { cards },
    } = await responseFromAPI.json();

    if (cards && cards.length) {
      cards.forEach((element) => {
        if (element?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          setRestaurantDataList(
            element?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        }
        if (
          element?.card?.card?.id == foodMenuID &&
          element?.card?.card?.gridElements?.infoWithStyle?.info
        ) {
          setFoodMenu(element?.card?.card?.gridElements?.infoWithStyle?.info);
        }
      });
    }
    // setBestOffersData(
    //   jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    // );
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
