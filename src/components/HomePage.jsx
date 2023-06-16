import Banner from "./Banner";
import Bar from "./Bar";
import AboutMe from "./AboutMe";
import FAQs from "./FAQs";
// import AboutPage from "./components/AboutPage";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Bar />
        <main className="w-screen relative z-10 flex flex-col gap-0 items-center justify-center min-h-screen">
          <Banner />
          <AboutMe />
          <FAQs />
        </main>
      </div>
    </>
  );
}

export default HomePage;
