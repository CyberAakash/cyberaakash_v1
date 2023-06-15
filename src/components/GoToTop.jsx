// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {ArrowUpCircleIcon} from "@heroicons/react/24/solid"

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-transparent text-green-500 rounded-full p-2 cursor-pointer z-40 backdrop-blur-sm ${
        showButton ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpCircleIcon className="h-6 w-6 " />
    </button>
  );
};

export default GoToTop;
