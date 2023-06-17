import Marquee from "react-fast-marquee";
import "./Marque.css";

function ScrollProject() {
  return (
    <>
      <div className="flex h-fit w-screen items-center justify-center m-0 p-0">
        <Marquee
          pauseOnHover="true"
          gradient="true"
          gradientColor={[4, 4, 4]}
          gradientWidth={100}
          speed="100"
          className="flex gap-5"
        >
          
        </Marquee>
      </div>
    </>
  );
}

export default ScrollProject;
