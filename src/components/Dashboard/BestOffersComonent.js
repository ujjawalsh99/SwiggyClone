import { CDN_URL } from "../../utils/constants";

const BestOffersComponent = (props) => {
  const { data } = props;
  return (
    <img
      className="w-[425px] h-[252px]"
      src={CDN_URL + data}
      alt="Banner"
    ></img>
  );
};

export default BestOffersComponent;
