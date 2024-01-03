import { RestaurantDetailURL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantData = (id) => {
  //   const [restaurantData, setRestaurantData] = useState(null);
  //   const [recommendedData, setRecommendedData] = useState([]);
  let [result, setResult] = useState([null, null]);

  const fetchResturantDetailsData = async (id) => {
    const resDetailData = await fetch(`${RestaurantDetailURL}${id}`);
    const jsonData = await resDetailData.json();
    // setRestaurantData(jsonData?.data?.cards[0]?.card?.card?.info);
    // setRecommendedData(
    //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    //     ?.card?.card?.itemCards
    // );
    setResult([
      jsonData?.data?.cards[0]?.card?.card?.info,
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards,
    ]);
  };

  useEffect(() => {
    fetchResturantDetailsData(id);
  }, []);

  return result;
};

export default useRestaurantData;
