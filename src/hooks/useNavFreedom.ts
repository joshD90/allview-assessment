import { useLocation } from "react-router-dom";

export const useNavFreedom = () => {
  const location = useLocation();
  //isolate the query params
  const queries = new URLSearchParams(location.search);
  if (queries.has("free")) {
    return "?free=true";
  } else {
    return "";
  }
};
