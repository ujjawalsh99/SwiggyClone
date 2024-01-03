import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [availibleStatus, setAvailableStatus] = useState(true);
  useEffect(() => {
    // console.log("Online Status UseEffect()");
    window.addEventListener("online", (e) => {
      // console.log("Setting Online");
      setAvailableStatus(true);
    });

    window.addEventListener("offline", (e) => {
      // console.log("Setting Offline");

      setAvailableStatus(false);
    });
  }, []);
  return availibleStatus;
};

export default useOnlineStatus;
