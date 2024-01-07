import { RestaurantDetailURL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantData = (id) => {
  const [restaurantPrimaryDetail, setRestaurantPrimaryDetail] = useState([]);
  const [restaurantOffers, setRestaurantOffers] = useState([]);
  const [restaurantRecommendations, setRestaurantRecommendations] = useState(
    []
  );
  const fetchResturantDetailsData = async (id) => {
    let restaurantCategoryData;
    const resDetailData = await fetch(`${RestaurantDetailURL}${id}`);
    const jsonData = await resDetailData.json();
    let {
      data: { cards },
    } = jsonData;

    setRestaurantPrimaryDetail(cards[0]?.card?.card?.info);

    setRestaurantOffers(
      cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    restaurantCategoryData =
      (cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (item) =>
          Object.keys(item?.card?.card).includes("title") &&
          Object.keys(item?.card?.card).includes("itemCards")
      );
    setRestaurantRecommendations(restaurantCategoryData);
  };

  useEffect(() => {
    fetchResturantDetailsData(id);
  }, []);

  return [restaurantPrimaryDetail, restaurantOffers, restaurantRecommendations];
};

export default useRestaurantData;
