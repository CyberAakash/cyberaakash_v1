/* eslint-disable react/no-unescaped-entities */
import "./Profile.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
// import Marque from "./Marque";

function Profile() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center relative z-10
                      h-fit w-screen px-2 sm:px-20"
      >
        <div className="flex flex-col items-center justify-center p-10 text-center gap-4 border-2 border-white border-dashed">
          <h1 className="font-Blanka text-4xl">Who Am I ?</h1>
          <p className="font-sans text-lg opacity-90">
            I am a self-motivated and proactive student currently pursuing a
            Bachelor's degree in Computer Science and Engineering at Mepco
            Schlenk Engineering College. I have a strong passion for learning
            and consider yourself a smart worker. I have acquired proficiency in
            various programming languages such as C, C++, Python, Java, and
            JavaScript, and have experience working with frameworks including
            React, NextJS, NodeJS, Svelte, ViteJS, tailwindCSS, and Bootstrap.
          </p>
          <p className="font-sans text-lg opacity-90">
            In addition to my front-end development skills, I have also worked
            with back-end technologies like Firebase, MongoDB, MySQL, and
            PostgreSQL, making me a full stack engineer. My experience extends
            beyond coding as i possess knowledge of 3D modeling and UI/UX
            design, enabling me to create visually appealing interfaces with a
            focus on user experience.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center gap-4 border-x-2 border-b-2 border-white border-dashed">
          <h1 className="text-center font-Blanka text-4xl">
            When Did I Study ?
          </h1>
          <p className="font-sans text-lg opacity-90">
            Veniam reprehenderit labore adipisicing qui. Id cupidatat in veniam
            magna ullamco excepteur. Non ipsum exercitation ea non. Deserunt et
            minim pariatur tempor eiusmod reprehenderit ea ea cupidatat aute
            dolore quis.
          </p>
          <div className="my-10 min-w-full font-mono text-xs">
            <div className="flex min-w-full flex-col gap-5 p-3 items-center justify-center">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <p className=" font-bold">
                  B.E. Computer Science and Engineering
                </p>
                <p className=" font-light">Mepco Schlenk Engineering College</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
                <p>CGPA:8.7</p>
                <p>Jun 2020 - Ongoing</p>
              </div>
              <hr className="w-full opacity-50" />
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <p className=" font-bold">HSC - Computer Science</p>
                <p className=" font-light">P S L Narayana Vidhyalaya - CBSE</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
                <p>Percent:91.8</p>
                <p>Jun 2019 - May 2020</p>
              </div>
              <hr className="w-full opacity-50" />
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <p className=" font-bold">SSLC - Computer Science</p>
                <p className=" font-light">P S L Narayana Vidhyalaya - CBSE</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
                <p>Percent:82.8</p>
                <p>Jun 2017 - May 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center gap-4 border-x-2 border-b-2 border-white border-dashed">
          <h1 className="text-center font-Blanka text-4xl">Skills You Ask !</h1>
          <p className="font-sans text-lg opacity-90">
            Veniam reprehenderit labore adipisicing qui. Id cupidatat in veniam
            magna ullamco excepteur. Non ipsum exercitation ea non. Deserunt et
            minim pariatur tempor eiusmod reprehenderit ea ea cupidatat aute
            dolore quis.
          </p>
          <div className="w-full mt-10 grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-10 place-content-center place-items-center">
            <img src="/icons/html.svg" className="h-16 w-16" />
            <img src="/icons/css.svg" className="h-16 w-16" />
            <img src="/icons/js.svg" className="h-16 w-16" />
            <img src="/icons/react.svg" className="h-16 w-16" />
            <img src="/icons/firebase.svg" className="h-16 w-16" />
            <img src="/icons/mongo.png" className="h-16 w-16" />
            <img src="/icons/html.svg" className="h-16 w-16" />
            <img src="/icons/css.svg" className="h-16 w-16" />
            <img src="/icons/js.svg" className="h-16 w-16" />
            <img src="/icons/react.svg" className="h-16 w-16" />
            <img src="/icons/firebase.svg" className="h-16 w-16" />
            <img src="/icons/mongo.png" className="h-16 w-16" />
            <img src="/icons/html.svg" className="h-16 w-16" />
            <img src="/icons/css.svg" className="h-16 w-16" />
            <img src="/icons/js.svg" className="h-16 w-16" />
            <img src="/icons/react.svg" className="h-16 w-16" />
            <img src="/icons/firebase.svg" className="h-16 w-16" />
            <img src="/icons/mongo.png" className="h-16 w-16" />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-center p-10 text-center gap-4 border-x-2 border-b-2 border-white border-dashed">
          <h1 className="text-center font-Blanka text-4xl mb-10">
            What Do You Expect ?
          </h1>
          <p className="font-sans text-lg opacity-90">
            Qui exercitation adipisicing do consectetur.
          </p>
          <p className="font-sans text-lg opacity-90">
            Nulla pariatur reprehenderit culpa aliquip ex.
          </p>
          <p className="font-sans text-lg opacity-90">
            Minim eiusmod ipsum adipisicing nostrud culpa minim.
          </p>
          <p className="font-sans text-lg opacity-90">
            Ut dolore magna excepteur mollit irure deserunt nisi pariatur id.
          </p>
        </div>
        <div className="flex min-w-full flex-col items-center justify-center p-10 text-center gap-4 border-x-2 border-b-2 border-white border-dashed">
          <h1 className="text-center font-Blanka text-4xl ">Proof of worth</h1>
          <p className="font-sans text-lg opacity-90">
            Mollit minim qui exercitation elit amet culpa non fugiat deserunt
            incididunt deserunt voluptate cillum. Aute dolor nulla eiusmod duis
            irure laborum proident laborum. Dolore eu labore sunt in sit nisi
            reprehenderit .
          </p>
          {/* <div className="mt-10 w-full grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[60%] h-[80%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href="https://www.credly.com/badges/14b5ed7f-e85a-4dd0-a7f1-2f781327535e/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                RHCSA®️
              </a>
            </div>
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[60%] h-[50%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href="https://github.com/CyberAakash/My-Certificates/blob/main/Nptel_ds_cset.jpg"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                Data Structures and Algorithms
              </a>
            </div>
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[30%] h-[70%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href="https://github.com/CyberAakash/My-Certificates/blob/main/Nptel_c%2B%2B_cert.jpg"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                C / C++
              </a>
            </div>
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[30%] h-[90%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                Blockchain
              </a>
            </div>
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[60%] h-[80%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                UI / UX
              </a>
            </div>
            <div className=" w-[150px] h-[150px] relative">
              <div className="z-8 w-[50%] h-[40%] card-border mesh-card opacity-80 blur-3xl"></div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer z-10 absolute text-white font-semibold font-mono text-xs text-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                Cyber Security
              </a>
            </div>
          </div> */}

          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            // navigation={true}
            grabCursor={true}
            modules={[Autoplay]}
            loop={true}
            // height={1000}
            // width={800}
            // removeClippedSubviews={false}
            // loadMinimal
            // loadMinimalSize={3}
            className="mySwiper mx-10 px-10 pt-14 grid place-content-center place-items-center 
            max-w-[800px] h-fit sm:h-full overflow-hidden transition-opacity duration-150 ease-in-out"
          >
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/rhcsaCert.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/c++CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/acmCERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/dsCERT.png"
                className="w-full min-h-full object-contain "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/c++CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/osCERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/ds1CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/ds2CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/dbms1CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/dbms2CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/nosqlCERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/python1CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/python2CERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/agileCERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="h-screen text-center grid place-content-center place-items-center text-white bg-transparent">
              <img
                src="/cert/oopsCERT.png"
                className="w-full min-h-full object-contain"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-center h-fit w-screen">
          {/* <Marque /> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
