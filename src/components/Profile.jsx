import "./Profile.css";

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
      </div>
    </>
  );
}

export default Profile;

//Firebase
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="96"
  height="96"
  viewBox="0,0,256,256"
  style={{ fill: "black" }}
>
  <g
    fillOpacity="0"
    fill="#fbfbfb"
    fillRule="nonzero"
    stroke="none"
    strokeWidth="1"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="10"
    strokeDasharray=""
    strokeDashoffset="0"
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: "normal" }}
  >
    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
  </g>
  <g
    fill="none"
    fillRule="nonzero"
    stroke="none"
    strokeWidth="1"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="10"
    strokeDasharray=""
    strokeDashoffset="0"
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: "normal" }}
  >
    <g transform="scale(5.33333,5.33333)">
      <path
        d="M25.01,8.565c-0.386,-0.753 -1.466,-0.755 -1.848,0l-2.347,4.426l-5.411,-10.444c-0.471,-0.874 -1.798,-0.653 -1.952,0.325l-5.449,35.125l22.247,-19.247z"
        fill="#ffa000"
      ></path>
      <path
        d="M25.795,22.604l-4.98,-9.612l-12.812,25.005z"
        fill="#f57f17"
      ></path>
      <path
        d="M35.859,11.838c-0.13,-0.802 -1.115,-1.12 -1.69,-0.544l-26.166,26.708l14.479,7.614c0.917,0.512 2.034,0.512 2.951,0.001l14.567,-7.612z"
        fill="#ffca28"
      ></path>
    </g>
  </g>
</svg> */
}
