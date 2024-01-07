import { CDN_URL, BANK_OFFER_ICON_SIZE } from "../../utils/constants";

const OfferComponent = ({ data }) => {
  const {
    info: { header, couponCode, description, offerLogo },
  } = data;
  return (
    <div className="border-2 border-gray-300 p-2 pr-8 rounded-md min-w-80">
      <div className="flex gap-4">
        <div>
          <img src={CDN_URL + BANK_OFFER_ICON_SIZE + offerLogo}></img>
        </div>
        <div className="font-bold text-lg text-gray-500">{header}</div>
      </div>
      <div className="font-semibold text-gray-400">
        {couponCode ? couponCode + " | " : ""} {description}
      </div>
    </div>
  );
};

export default OfferComponent;