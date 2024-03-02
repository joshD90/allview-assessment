import { useLocation } from "react-router-dom";

export const useDetermineStep = (): number => {
  const location = useLocation();

  switch (location.pathname) {
    case "/appointment-details":
      return 1;
    case "/contact-details":
      return 2;
    case "/address-details":
      return 3;
    case "/gp-contact":
      return 4;
    case "/consent":
      return 5;

    default:
      return 0;
  }
};
