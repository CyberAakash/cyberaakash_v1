import Marquee from "react-fast-marquee";
import "./Marque.css"

function Marque() {
  return (
    <>
      <div className="flex h-fit w-screen items-center justify-center m-0 p-0">
        <Marquee
          // pauseOnHover="true"
          gradient="true"
          gradientColor={[4, 4, 4]}
          gradientWidth={100}
          speed="100"
          className="flex gap-5"
        >
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ml-[-20px]">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
          <h1 className="text-2xl font-Blanka text-white pr-4 p-2 ">CYBERAAKASH</h1>
        </Marquee>
      </div>
    </>
  );
}

export default Marque;
