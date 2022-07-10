import { useEffect } from "react";
import { useState } from "react";

export const useResize = () => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth < 700 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isPhone };
};
