import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData;
  return (
    <Link to={"/restaurant-details/" + id}>
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className="res-details">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>38 minutes</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
