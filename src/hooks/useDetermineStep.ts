import { useLocation } from "react-router-dom";

export const useDetermineStep = (): number => {
  const location = useLocation();

  switch (location.pathname) {
    case "/appointment-details":
      return 0;
    case "/contact-details":
      return 1;
    case "/address-details":
      return 2;
    case "/gp-contact":
      return 3;
    case "/consent":
      return 4;

    default:
      return 0;
  }
};
