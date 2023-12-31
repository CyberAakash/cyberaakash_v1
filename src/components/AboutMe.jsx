/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-[50px] font-Blanka gap-3 pb-10">
        <div className="flex gap-2 items-center justify-center">
          <h1 className=" text-[100px] text-center">We are the future</h1>
        </div>
        <div className="relative z-10 grid grid-cols-2 place-items-center place-content-center gap-3 min-h-screen w-full">
          <div className="col-span-2 md:col-span-1 w-full h-full">
            <img src="/about-logo.png" className="" />
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-full flex flex-col gap-6 md:gap-3 items-center sm:items-start justify-center">
            <h1 className="text-4xl text-center md:text-start w-full">
              Hello I am{" "}
              <span className="bg-clip-text bg-gradient-to-r from-green-500 to-green-100 text-transparent">
                Aakash
              </span>
            </h1>
            <p className="text-white/90 font-robecha text-xl text-center md:text-start">
              I am a highly motivated and diligent student currently pursuing a
              Bachelor's degree in Computer Science and Engineering at Mepco
              Schlenk Engineering College. With a passion for learning and a
              strong work ethic, I developed an impressive
              repertoire of skills in various programming languages and
              frameworks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
