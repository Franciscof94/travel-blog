import { useEffect } from "react";
import { useState } from "react";


export const useResize = (): boolean=> {
  const [isPhone, setIsPhone] = useState<boolean>(
    window.innerWidth < 900 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 900) {
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

  return  isPhone ;
};
