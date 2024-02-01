import LanguageIcon from "@mui/icons-material/Language";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FlatwareIcon from "@mui/icons-material/Flatware";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import { CareerDomains } from "../utils/constants";

const CareerCard = ({ data: { title, apiKey } }) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="p-10 rounded-full bg-slate-100 align-top">
        {getTitleIcon(apiKey)}
      </div>
      <h1 className="font-medium text-2xl tracking-widest my-10 w-36 self-center">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

function getTitleIcon(key) {
  switch (key) {
    case "technology":
      return (
        <LanguageIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
    case "business":
      return (
        <HandshakeIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
    case "cloudKitchen":
      return (
        <FlatwareIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
    case "customerCare":
      return (
        <SupportAgentIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
    case "campus":
      return (
        <ApartmentIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
    case "corporate":
      return (
        <SettingsIcon
          sx={{ fontSize: 88, color: "#607274" }}
          className="hover:text-orange-300 cursor-pointer transition-all hover:scale-110"
        />
      );
  }
}

const Career = () => (
  <div className="h-screen">
    <div className="career-img relative w-screen md:w-full h-3/6 md:h-4/6">
      <div className="text-white absolute ml-20 mt-8 xl:ml-96 xl:mt-24">
        <p className="text-6xl font-semibold tracking-wide">Discover</p>
        <p className="text-4xl tracking-widest">The Swiggster</p>
        <p className="text-4xl tracking-widest">In You</p>
      </div>
    </div>
    <div className="w-9/12 m-auto my-20 text-center">
      <div className="w-9/12 m-auto">
        <p className="text-xl">
          We build innovative products & solutions that deliver unparalleled
          convenience to urban consumers. The best part? Every bit of your work
          at Swiggy will help elevate the lives of our users across India.
        </p>
      </div>
      <div>
        <div className="my-14">
          <p className="text-4xl tracking-[0.8rem]">
            Where Do You <span className="font-bold">Belong?</span>
          </p>
        </div>
        <div className="flex flex-wrap basis-40 gap-x-64 gap-y-20 md:gap-y-36 justify-around w-11/12 m-auto">
          {CareerDomains.map((item) => (
            <CareerCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Career;
