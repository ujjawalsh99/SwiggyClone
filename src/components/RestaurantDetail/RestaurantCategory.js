import { CDN_URL } from "../../utils/constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VegIcon from "../../assets/svg/veg-icon.svg";
import NonVegIcon from "../../assets/svg/non-veg-icon.svg";
import { useState } from "react";


const RestaurantCategory = (props) => {
  let {
    data: { title, itemCards },
    lastEntry,
  } = props;
  const [expanded, setExpanded] = useState(title);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="my-8">
      <Accordion expanded={expanded === title} onChange={handleChange(title)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span className="font-bold text-2xl text-black">
              {title + " (" + itemCards.length + ") "}
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {itemCards.map((item, index) => {
              let {
                card: { info },
              } = item;
              return (
                <div
                  key={info.id}
                  className={
                    itemCards.length == 1 || index == itemCards.length - 1
                      ? ""
                      : "border-b-2 border-gray-200 mb-5"
                  }
                >
                  <div className="flex justify-between mb-10 items-center">
                    <div className="w-4/5">
                      <div className="my-2">
                        <img
                          className="w-4"
                          src={
                            info.itemAttribute.vegClassifier == "VEG"
                              ? VegIcon
                              : NonVegIcon
                          }
                        ></img>
                      </div>
                      <div>
                        <div className="font-semibold">{info.name}</div>
                        <div className="font-light">
                          ₹{" "}
                          {info.price
                            ? Math.floor(info.price / 100)
                            : Math.floor(info.defaultPrice / 100)}
                        </div>
                      </div>
                      <div className="my-3 text-sm font-extralight text-gray-500">
                        {info.description}
                      </div>
                    </div>
                    <div className="self-end">
                      <img
                        className={
                          info.imageId ? "w-[125px] rounded-md" : "hidden"
                        }
                        src={CDN_URL + info.imageId}
                        alt="image"
                      ></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div
        className={
          lastEntry == "pending" ? "border-t-8 border-gray-200 my-12" : ""
        }
      ></div>
    </div>
  );
};

export default RestaurantCategory;