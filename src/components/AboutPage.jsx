


import "./AboutPage.css"

function AboutPage() {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center h-fit pt-40 p-2 sm:p-20 w-screen ">
        <div className="grid relative z-10 grid-cols-2 p-8 place-items-center place-content-center gap-2  w-full min-h-screen bg-image">
          <div className="flex z-10 col-span-2 sm:col-span-1 flex-col items-end justify-center gap-3 font-robecha text-5xl">
            <h1 className="font-mono font-bold text-5xl">Welcome </h1>
            <p className="font-mono text-2xl">You come to the</p>
            <h3 className="bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent text-3xl md:text-5xl">
              RIGHT PLACE
            </h3>
          </div>
          <div className="mesh1 h-80 w-64 blur-3xl opacity-50 md:opacity-80 -rotate-180  absolute top-20 left-10 z-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600"></div>
          <div className="mesh1 h-80 w-96 blur-3xl hidden md:block opacity-60 absolute -bottom-4 -right-4 z-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600"></div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
