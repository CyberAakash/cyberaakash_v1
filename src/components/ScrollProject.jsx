import "./ScrollProject.css";
import Marquee from "react-fast-marquee";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";


function ScrollProject() {
  return (
    <>
      <div className="relative z-10 pt-36  flex flex-col gap-20  max-h-fit w-screen items-center justify-center m-0 p-0">
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl font-ailerons flex items-center justify-center gap-3">
            Instagram Clone{" "}
            <a href="https://insta-next-new.vercel.app/" target="__blank">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500/90 cursor-pointer" />
            </a>
          </h1>
          <p className="text-xs sm:text-sm font-sans max-w-sm sm:max-w-lg md:max-w-3xl text-center">
            Cillum ullamco nisi sit officia laborum nostrud Lorem cillum
            exercitation elit minim eiusmod. Aliquip do velit enim excepteur
            consequat. Incididunt pariatur labore nisi occaecat ullamco id
            officia est. Esse eu cillum minim voluptate fugiat labore excepteur
            cupidatat tempor id elit qui velit. Irure non culpa anim aute ea
            proident proident officia fugiat esse sint. Consequat proident
            aliqua veniam qui dolore ex exercitation. Minim nulla consectetur
            anim non labore do esse in ullamco.
          </p>
          <Marquee
            // pauseOnHover="true"
            gradient="true"
            gradientColor={[4, 4, 4]}
            gradientWidth={200}
            speed="100"
            className="flex gap-5 w-screen max-h-[20rem] overflow-y-hidden"
          >
            {instaProjects.map((instaProject) => (
              <div
                key={instaProject.id}
                className="mockup-phone max-h-full scale-50"
              >
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img src={instaProject.imgUrl} alt="Image 1" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <hr className="text-white/10 w-full h-1" />
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl font-ailerons flex items-center justify-center gap-3">
            Amazon Clone{" "}
            <a href="https://amazon-cyber.vercel.app/" target="__blank">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500/90 cursor-pointer" />
            </a>
          </h1>
          <p className="text-xs sm:text-sm font-sans max-w-sm sm:max-w-lg md:max-w-3xl text-center">
            Cillum ullamco nisi sit officia laborum nostrud Lorem cillum
            exercitation elit minim eiusmod. Aliquip do velit enim excepteur
            consequat. Incididunt pariatur labore nisi occaecat ullamco id
            officia est. Esse eu cillum minim voluptate fugiat labore excepteur
            cupidatat tempor id elit qui velit. Irure non culpa anim aute ea
            proident proident officia fugiat esse sint. Consequat proident
            aliqua veniam qui dolore ex exercitation. Minim nulla consectetur
            anim non labore do esse in ullamco.
          </p>
          <Marquee
            // pauseOnHover="true"
            gradient="true"
            gradientColor={[4, 4, 4]}
            gradientWidth={200}
            speed="100"
            className="flex gap-5 w-screen max-h-[20rem] overflow-y-hidden"
          >
            {amazonProjects.map((amazonProject) => (
              <div
                key={amazonProject.id}
                className="mockup-phone max-h-full scale-50"
              >
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img src={amazonProject.imgUrl} alt="Image 1" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <hr className="text-white/10 w-full h-1" />
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl font-ailerons flex items-center justify-center gap-3">
            Online E-Book Store{" "}
            <a href="" target="__blank">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500/90 cursor-pointer" />
            </a>
          </h1>
          <p className="text-xs sm:text-sm font-sans max-w-sm sm:max-w-lg md:max-w-3xl text-center">
            Cillum ullamco nisi sit officia laborum nostrud Lorem cillum
            exercitation elit minim eiusmod. Aliquip do velit enim excepteur
            consequat. Incididunt pariatur labore nisi occaecat ullamco id
            officia est. Esse eu cillum minim voluptate fugiat labore excepteur
            cupidatat tempor id elit qui velit. Irure non culpa anim aute ea
            proident proident officia fugiat esse sint. Consequat proident
            aliqua veniam qui dolore ex exercitation. Minim nulla consectetur
            anim non labore do esse in ullamco.
          </p>
          <Marquee
            // pauseOnHover="true"
            gradient="true"
            gradientColor={[4, 4, 4]}
            gradientWidth={200}
            speed="100"
            className="flex gap-5 w-screen max-h-[20rem] overflow-y-hidden"
          >
            {ebookProjects.map((ebookProject) => (
              <div
                key={ebookProject.id}
                className="mockup-phone max-h-full scale-50"
              >
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img src={ebookProject.imgUrl} alt="Image 1" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <hr className="text-white/10 w-full h-1" />
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl font-ailerons flex items-center justify-center gap-3">
            My Portfolio{" "}
            <a href="https://cyberaakash.vercel.app/" target="__blank">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500/90 cursor-pointer" />
            </a>
          </h1>
          <p className="text-xs sm:text-sm font-sans max-w-sm sm:max-w-lg md:max-w-3xl text-center">
            Cillum ullamco nisi sit officia laborum nostrud Lorem cillum
            exercitation elit minim eiusmod. Aliquip do velit enim excepteur
            consequat. Incididunt pariatur labore nisi occaecat ullamco id
            officia est. Esse eu cillum minim voluptate fugiat labore excepteur
            cupidatat tempor id elit qui velit. Irure non culpa anim aute ea
            proident proident officia fugiat esse sint. Consequat proident
            aliqua veniam qui dolore ex exercitation. Minim nulla consectetur
            anim non labore do esse in ullamco.
          </p>
          <Marquee
            // pauseOnHover="true"
            gradient="true"
            gradientColor={[4, 4, 4]}
            gradientWidth={200}
            speed="100"
            className="flex gap-5 w-screen max-h-[20rem] overflow-y-hidden"
          >
            {portfolioProjects.map((portfolioProject) => (
              <div
                key={portfolioProject.id}
                className="mockup-phone max-h-full scale-50"
              >
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img src={portfolioProject.imgUrl} alt="Image 1" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <hr className="text-white/10 w-full h-1" />
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl font-ailerons flex items-center justify-center gap-3">
            Online Engine oil system{"  "}
            <a href="https://sma-beta.vercel.app/" target="__blank">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500/90 cursor-pointer" />
            </a>
          </h1>
          <p className="text-xs sm:text-sm font-sans max-w-sm sm:max-w-lg md:max-w-3xl text-center">
            Cillum ullamco nisi sit officia laborum nostrud Lorem cillum
            exercitation elit minim eiusmod. Aliquip do velit enim excepteur
            consequat. Incididunt pariatur labore nisi occaecat ullamco id
            officia est. Esse eu cillum minim voluptate fugiat labore excepteur
            cupidatat tempor id elit qui velit. Irure non culpa anim aute ea
            proident proident officia fugiat esse sint. Consequat proident
            aliqua veniam qui dolore ex exercitation. Minim nulla consectetur
            anim non labore do esse in ullamco.
          </p>
          <Marquee
            // pauseOnHover="true"
            gradient="true"
            gradientColor={[4, 4, 4]}
            gradientWidth={200}
            speed="100"
            className="flex gap-5 w-screen max-h-[20rem] overflow-y-hidden"
          >
            {oilProjects.map((oilProject) => (
              <div
                key={oilProject.id}
                className="mockup-phone max-h-full scale-50"
              >
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img src={oilProject.imgUrl} alt="Image 1" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <hr className="text-white/10 w-full h-1" />
      </div>
    </>
  );
}

export default ScrollProject;

const instaProjects = [
  { id: 1, imgUrl: "/phone/i1.jpg" },
  { id: 2, imgUrl: "/phone/i2.jpg" },
  { id: 3, imgUrl: "/phone/i3.jpg" },
  { id: 4, imgUrl: "/phone/i2.jpg" },
  { id: 5, imgUrl: "/phone/i5.jpg" },
  { id: 6, imgUrl: "/phone/i6.jpg" },
  { id: 7, imgUrl: "/phone/i7.jpg" },
  { id: 8, imgUrl: "/phone/i8.jpg" },
  { id: 9, imgUrl: "/phone/i9.jpg" },
  { id: 10, imgUrl: "/phone/i10.jpg" },
  { id: 11, imgUrl: "/phone/i11.jpg" },
];

const amazonProjects = [
  { id: 1, imgUrl: "/phone/a1.jpg" },
  { id: 2, imgUrl: "/phone/a2.jpg" },
  { id: 3, imgUrl: "/phone/a3.jpg" },
  { id: 4, imgUrl: "/phone/a4.jpg" },
  { id: 5, imgUrl: "/phone/a5.jpg" },
  { id: 6, imgUrl: "/phone/a1.jpg" },
  { id: 7, imgUrl: "/phone/a2.jpg" },
  { id: 8, imgUrl: "/phone/a3.jpg" },
  { id: 9, imgUrl: "/phone/a4.jpg" },
  { id: 10, imgUrl: "/phone/a5.jpg" },
];

const ebookProjects = [
  { id: 1, imgUrl: "/images/FBW1.png" },
  { id: 2, imgUrl: "/images/FBW1.png" },
  { id: 3, imgUrl: "/images/FBW1.png" },
  { id: 4, imgUrl: "/images/FBW1.png" },
  { id: 5, imgUrl: "/images/FBW1.png" },
  { id: 6, imgUrl: "/images/FBW1.png" },
  { id: 7, imgUrl: "/images/FBW1.png" },
  { id: 8, imgUrl: "/images/FBW1.png" },
  { id: 9, imgUrl: "/images/FBW1.png" },
];

const portfolioProjects = [
  { id: 1, imgUrl: "/phone/p1.jpg" },
  { id: 2, imgUrl: "/phone/p2.jpg" },
  { id: 3, imgUrl: "/phone/p3.jpg" },
  { id: 4, imgUrl: "/phone/p4.jpg" },
  { id: 5, imgUrl: "/phone/p5.jpg" },
  { id: 6, imgUrl: "/phone/p6.jpg" },
  { id: 7, imgUrl: "/phone/p7.jpg" },
  { id: 8, imgUrl: "/phone/p8.jpg" },
];

const oilProjects = [
  { id: 1, imgUrl: "/phone/s1.jpg" },
  { id: 2, imgUrl: "/phone/s2.jpg" },
  { id: 3, imgUrl: "/phone/s3.jpg" },
  { id: 4, imgUrl: "/phone/s4.jpg" },
  { id: 5, imgUrl: "/phone/s5.jpg" },
  { id: 6, imgUrl: "/phone/s6.jpg" },
  { id: 7, imgUrl: "/phone/s7.jpg" },
  { id: 8, imgUrl: "/phone/s8.jpg" },
];

// Splide JS

{
  /* <Splide
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
</Splide> */
}
