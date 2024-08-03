import  { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import s from "../ScrollToTopButton/ScrollToTopButton.css"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.scrollToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className={s.button}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;