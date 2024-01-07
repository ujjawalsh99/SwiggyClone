import { useRouteError, Link } from "react-router-dom";
import ErrorImage from "../assets/images/error.png";
import { Button } from "@mui/material";
const Error = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-3/6 m-auto flex flex-col justify-center">
        <img className="" src={ErrorImage} alt="Error"></img>
        <p className="text-center font-medium">
          {useRouteError().error + " : " + useRouteError().status}
        </p>
        <Link
          to="/"
          className="box-border px-5 py-3 bg-orange-400 w-36 border-2 self-center m-12 rounded-md text-white transition-all hover:border-black"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
