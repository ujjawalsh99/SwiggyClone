import { RestaurantDetailURL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantData = (id) => {
  const [restaurantPrimaryDetail, setRestaurantPrimaryDetail] = useState([]);
  const [restaurantOffers, setRestaurantOffers] = useState([]);
  const [restaurantRecommendations, setRestaurantRecommendations] = useState(
    []
  );
  const fetchResturantDetailsData = async (id) => {
    const resDetailData = await fetch(`${RestaurantDetailURL}${id}`);
    const jsonData = await resDetailData.json();
    let {
      data: { cards },
    } = jsonData;
    setRestaurantPrimaryDetail(cards[0]?.card?.card?.info);
    setRestaurantOffers(
      cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    console.log(cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    let [, , ...restaurantCategoryData] =
      cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(restaurantCategoryData);
    setRestaurantRecommendations(restaurantCategoryData);
  };

  useEffect(() => {
    fetchResturantDetailsData(id);
  }, []);

  return [restaurantPrimaryDetail, restaurantOffers, restaurantRecommendations];
};

export default useRestaurantData;
