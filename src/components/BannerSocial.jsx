// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
import "./BannerSocial.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function BannerSocial() {
  return (
    <>
      <div className="relative z-10 pt-36  flex  h-fit w-screen items-center justify-center m-0 p-0">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1000}
          bullets={false}
          infinite={true}
          mobileTouch={true}
          // buttons={false}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </AutoplaySlider>
      </div>
    </>
  );
}

export default BannerSocial;







// Splide JS

{/* <Splide
  // hasTrack={false}
  hasTrack="false"
  options={{
    loop: true,
    perPage: 3,
    rewind: true,
    // width: 800,
    // gap: "1rem",
    // type: "loop",
    // gap: "1rem",
    autoplay: true,
    // pauseOnHover: false,
    resetProgress: false,
    // height: "15rem",
    height: "300px",
  }}
  className="w-full h-fit flex items-center justify-center"
>
  <SplideSlide className="flex  items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex  items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex  items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>{" "}
  <SplideSlide className="flex  items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="flex items-center justify-center">
    <div className="mockup-phone scale-50">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/images/FBW1.png" alt="Image 1" />
        </div>
      </div>
    </div>
  </SplideSlide>
</Splide> */}