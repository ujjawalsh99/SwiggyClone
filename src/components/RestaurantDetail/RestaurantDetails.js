import { useParams } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantDetails";
import OfferComponent from "./OfferComponent";
import RestaurantCategory from "./RestaurantCategory";
import ContentShimmer from "../shared/components/Shimmers/ContentShimmer";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const RestaurantDetails = () => {
  let dummyCount = new Array(10).fill(0);
  const { id } = useParams();
  let [resPrimaryData, resOfferData, resRecommended] = useRestaurantData(id);
  return Object.keys(resPrimaryData).length && resOfferData.length ? (
    <div className="w-full">
      <div className="w-4/6 m-auto p-10">
        <div id="res-primary" className="my-8">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-xl py-1">
                {resPrimaryData.name}
              </div>
              <div className="font-light">
                {resPrimaryData.cuisines.join(", ")}
              </div>
              <div className="font-light leading-3">
                <span>{resPrimaryData.areaName + ", "}</span>
                <span>{resPrimaryData.sla.lastMileTravelString}</span>
              </div>
            </div>
            <div className="border-2 border-gray-200 p-2 rounded-md">
              <div className="text-green-500 font-bold text-xl py-1">
                <StarIcon className="relative mb-1" />
                {resPrimaryData.avgRatingString}
              </div>
              <hr className="text-gray-200"></hr>
              <div className="font-semibold tracking-tighter text-sm py-1 text-gray-500">
                {resPrimaryData.totalRatingsString}
              </div>
            </div>
          </div>
          <div>
            <InfoIcon sx={{ color: "#FF5B22" }} />
            <span className="font-light text-gray-500 px-2">
              {resPrimaryData.feeDetails.message}
            </span>
          </div>
        </div>
        <hr className="border-t-2 border-gray-200 border-dashed"></hr>
        <div id="res-offers" className="my-5">
          <div className="flex gap-5 items-center">
            <div>
              <TimelapseIcon sx={{ fontSize: 30 }} />{" "}
              <span className="font-bold px-2">
                {resPrimaryData.sla.slaString}
              </span>
            </div>
            <div>
              <CurrencyRupeeIcon
                sx={{ fontSize: 25 }}
                className="border-2 rounded-full p-[2px] border-black"
              />
              <span className="font-bold px-2 mt-1">
                {resPrimaryData.costForTwoMessage}
              </span>
            </div>
          </div>
          <div className="offer-scroller flex my-8 gap-8 overflow-x-auto">
            {resOfferData.map((item, index) => (
              <OfferComponent key={index} data={item} />
            ))}
          </div>
        </div>
        <hr className="border-t-2 border-gray-200"></hr>
        <div id="res-category" className="my-5">
          {resRecommended.map((item, index) => (
            <RestaurantCategory
              key={index}
              data={item?.card?.card}
              lastEntry={index == resRecommended.length - 1 ? "end" : "pending"}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="content-shimmer">
      {dummyCount.map((item, index) => (
        <ContentShimmer key={index} />
      ))}
    </div>
  );
};

export default RestaurantDetails;
