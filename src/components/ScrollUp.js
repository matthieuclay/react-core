import React from "react";

const ScrollUp = () => {
  return (
    <div className="scrollup" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="arrow" />
    </div>
  );
};

export default ScrollUp;
