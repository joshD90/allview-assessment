import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//allows us to navigate through the program with restrictions or freely
const NavigateFreely = () => {
  const [free, setFree] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has("free")) {
      setFree(true);
    } else {
      setFree(false);
    }
  }, [location]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = free
      ? `${location.pathname}`
      : `${location.pathname}?free=true`;
    navigate(url);
  };

  //inline styling as this is only usability tool
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <button
        style={{
          backgroundColor: "var(--darkblue)",
          opacity: 0.3,
          marginBottom: "1rem",
          justifySelf: "flex-end",
          width: "12rem",
          padding: "0.5rem",
        }}
        onClick={handleClick}
      >
        {free ? "Restrict Navigation" : "Free Navigation"}
      </button>
    </div>
  );
};

export default NavigateFreely;
