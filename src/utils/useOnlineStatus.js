import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [availibleStatus, setAvailableStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (e) => {
      setAvailableStatus(true);
    });

    window.addEventListener("offline", (e) => {
      setAvailableStatus(false);
    });
  }, []);
  return availibleStatus;
};

export default useOnlineStatus;
