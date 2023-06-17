// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import "../App.css";
import Navbar from "../components/Navbar";
// import Banner from "../components/Banner";
// import Bar from "./components/Bar";
import Footer from "../components/Footer";
// import AboutMe from "../components/AboutMe";
// import FAQs from "../components/FAQs";
import GoToTop from "../components/GoToTop";
import AboutPage from "../components/AboutPage";
import Profile from "../components/Profile";
import Marque from "../components/Marque";




function about() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-x-hidden m-0 p-0">
        <Navbar />

        {/* <Bar /> */}
        <GoToTop />
        <main className="w-screen mt-0 pt-0 relative z-10 flex flex-col gap-0 items-center justify-center min-h-fit">
          {/* <Banner />
          <AboutMe />
          <FAQs /> */}
          <AboutPage />
          <Profile />
        </main>
        <div className="mt-14"></div>
        <Marque />
        <Footer />
      </div>
    </>
  );
}

export default about;
