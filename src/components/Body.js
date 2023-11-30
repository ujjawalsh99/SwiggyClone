import RestaurantData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {RestaurantData.map((data) => {
          return <RestaurantCard key={data?.info?.id} resData={data?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
