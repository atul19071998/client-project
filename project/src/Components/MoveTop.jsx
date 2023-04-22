import React, { useEffect, useState } from "react";
import "../Componentcss/Movetop.css";
const MoveTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let height = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(!true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <>
          <div className="scrollTop-style">
            <i className="fa-solid fa-arrow-up scrollTop" onClick={goTop} />
          </div>
        </>
      )}
    </>
  );
};

export default MoveTop;
