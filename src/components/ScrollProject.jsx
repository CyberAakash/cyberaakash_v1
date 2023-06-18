import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Marque.css";

function ScrollProject() {
  return (
    <>
      <div className="relative z-10 pt-24  flex  h-screen w-screen items-center justify-center m-0 p-0">
        <Splide
          hasTrack="false"
          options={{
            loop: true,
            // width: 800,
            // gap: "1rem",
          }}
          className="w-full h-fit flex items-center justify-center"
        >
          <SplideSlide className="flex items-center justify-center">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <img src="/images/FBW1.png" alt="Image 1" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <img src="/images/FBW2.png" alt="Image 2" />
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <img src="/images/FBW3.png" alt="Image 3" />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}

export default ScrollProject;
