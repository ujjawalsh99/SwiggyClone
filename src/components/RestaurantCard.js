import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import CircleIcon from "@mui/icons-material/Circle";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    areaName,
  } = resData;
  return (
    <Link to={"/restaurant-details/" + id}>
      <div className="w-72 h-72 transition-all hover:scale-95">
        <div className="w-full h-48 rounded-md overflow-clip">
          <img
            className="w-full h-full"
            src={CDN_URL + cloudinaryImageId}
            alt="res-logo"
          />
        </div>
        <div className="p-3">
          <p className="font-medium text-lg">
            {name.length > 25 ? name.slice(0, 25) + "..." : name}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <StarsIcon color="success" />
              <p>{avgRating}</p>
            </div>
            <CircleIcon sx={{ fontSize: 7 }} />
            <p>{deliveryTime} mins</p>
          </div>
          <p>
            {cuisines.join(", ").length > 30
              ? cuisines.join(", ").slice(0, 30) + "..."
              : cuisines.join(", ")}
          </p>
          <p>{areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
