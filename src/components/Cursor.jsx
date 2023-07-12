// import IMG from "/cursor.svg"
import "./Cursor.css"
import {useRef, useEffect} from "react"
// import {CursorArrowRaysIcon} from "@heroicons/react/24/solid"

function Cursor() {
  const cursorRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isCursorMovingRef = useRef(false);

  useEffect(() => {
    function updateCursorPosition(e) {
      if (!cursorRef.current) return;

      cursorRef.current.style.top = e.pageY + "px";
      cursorRef.current.style.left = e.pageX + "px";
      isCursorMovingRef.current = true;

      if (cursorRef.current.style.display === "none") {
        cursorRef.current.style.display = "block";
      }

      clearTimeout(cursorTimeout);
      cursorTimeout = setTimeout(() => {
        if (isCursorMovingRef.current === false) {
          cursorRef.current.style.display = "none";
        }
      }, 500);
    }

    function handleScroll() {
      if (!cursorRef.current) return;

      cursorRef.current.style.display = "none";
      isScrollingRef.current = true;
      isCursorMovingRef.current = false;
    }

    function handleMouseEnter() {
      if (!cursorRef.current) return;

      if (isScrollingRef.current || !isCursorMovingRef.current) {
        cursorRef.current.style.display = "block";
        isScrollingRef.current = false;
      }
    }

    function handleMouseLeave() {
      if (!cursorRef.current) return;

      if (!isCursorMovingRef.current) {
        cursorRef.current.style.display = "none";
      }
    }

    let cursorTimeout;
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("scroll", handleScroll);

    document.addEventListener("click", () => {
      if (!cursorRef.current) return;

      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (!cursorRef.current) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });

    return () => {
      clearTimeout(cursorTimeout);
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="cursor z-100 text-white bg-white mix-blend-difference" ref={cursorRef}></div>;
}

export default Cursor;





