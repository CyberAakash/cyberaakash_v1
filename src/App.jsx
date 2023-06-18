// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Bar from './components/Bar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import FAQs from './components/FAQs';
import GoToTop from './components/GoToTop';
import Marque from './components/Marque';


// import HomePage from "./components/AboutPage";


function App() {

  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-x-hidden m-0 p-0">
        <Navbar />
        <GoToTop />
        <Bar />

        <main className="w-screen relative z-10 flex flex-col gap-0 items-center justify-center min-h-screen">
          <Banner />
          <AboutMe />
          <FAQs />
        </main>
        <Marque />
        <Footer />
      </div>
    </>
  );
}

export default App
