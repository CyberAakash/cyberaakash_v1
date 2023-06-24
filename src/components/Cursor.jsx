// import IMG from "/cursor.svg"
import "./Cursor.css"
import {useRef, useEffect} from "react"
// import {CursorArrowRaysIcon} from "@heroicons/react/24/solid"

function Cursor() {

    const cursorRef = useRef(null);
    useEffect(() => {
      if (cursorRef.current == null || cursorRef == null) {
          cursorRef.current.setAttribute(
            "style",
            "top: -8px; left: -8px;"
          );
        }
      document.addEventListener("mousemove", (e) => {
        if (cursorRef.current == null) {
          cursorRef.current.setAttribute(
            "style",
            "top: -8px; left: -8px;"
          );
        }
        cursorRef.current.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;"
        );
      });
      document.addEventListener("click", () => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.add("expand");
        setTimeout(() => {
          if (cursorRef.current == null) return;
          cursorRef.current.classList.remove("expand");
        }, 500);
      });
    }, []);
  return (
    <div className="cursor z-40" ref={cursorRef}>
      {/* <CursorArrowRaysIcon ref={cursorRef} className="cursor z-40 w-12 h-12 bg-transparent bg-clip-text text-white mix-blend-difference" /> */}
    </div>
  );
}

export default Cursor