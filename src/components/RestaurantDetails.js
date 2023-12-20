import { useEffect, useState } from "react";
import { RestaurantDetailURL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  let dummyCount = new Array(20).fill(0);

  const [restaurantData, setRestaurantData] = useState(null);
  const [recommendedData, setRecommendedData] = useState([]);
  const { id } = useParams();

  const fetchResturantDetailsData = async (id) => {
    const resDetailData = await fetch(`${RestaurantDetailURL}${id}`);
    const jsonData = await resDetailData.json();
    setRestaurantData(jsonData?.data?.cards[0]?.card?.card?.info);
    setRecommendedData(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };

  useEffect(() => {
    fetchResturantDetailsData(id);
  }, []);

  if (restaurantData && recommendedData?.length) {
    const {
      name,
      city,
      costForTwoMessage,
      totalRatingsString,
      locality,
      avgRating,
    } = restaurantData;

    return (
      <div className="res-detail-container">
        <div className="res-details">
          <div>
            <h1>{name}</h1>
            <p>{locality}</p>
            <p>{city}</p>
            <div>
              <h3></h3>
              <h3>{costForTwoMessage}</h3>
            </div>
          </div>
          <div>
            <h5>Rating, {avgRating}</h5>
            <h5>{totalRatingsString}</h5>
          </div>
        </div>
        <div className="res-recommended">
          <h3>Recommended</h3>
          <ul>
            {recommendedData.map((item) => (
              <li>{item?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
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
    );
  }
};

export default RestaurantDetails;
