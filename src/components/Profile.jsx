import "./Profile.css"

function Profile() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center relative z-10
                      h-fit w-screen px-20"
      >
        <div className="flex flex-col items-center justify-center p-10 text-center gap-4 border-2 border-white border-dashed">
          <h1 className="font-Blanka text-4xl">Who Am I ?</h1>
          <p className="font-sans text-lg opacity-90">
            Veniam reprehenderit labore adipisicing qui. Id cupidatat in veniam
            magna ullamco excepteur. Non ipsum exercitation ea non. Deserunt et
            minim pariatur tempor eiusmod reprehenderit ea ea cupidatat aute
            dolore quis.
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
          <h1 className="text-center font-Blanka text-4xl">
            Skills You Ask !
          </h1>
          <p className="font-sans text-lg opacity-90">
            Veniam reprehenderit labore adipisicing qui. Id cupidatat in veniam
            magna ullamco excepteur. Non ipsum exercitation ea non. Deserunt et
            minim pariatur tempor eiusmod reprehenderit ea ea cupidatat aute
            dolore quis.
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
