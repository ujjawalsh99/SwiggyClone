import { CDN_URL } from "../../utils/constants";

const Card = (props) => (
  <div className="cursor-pointer rounded-md overflow-hidden m-4 transition-all duration-200 ease-in-out flex-1 shrink-0 basis-36">
    <img
      className="w-52 object-center mix-blend-multiply transition-all hover:scale-105 duration-200"
      src={props.imgUrl}
      alt={props.alt || "Image"}
    />
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container flex relative p-4 rounded-md overflow-auto ">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card?.actions?.text}
        imgUrl={CDN_URL + card.imageId}
      />
    ))}
  </div>
);

export default CardContainer;
