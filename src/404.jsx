import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="relative font-robecha z-10 flex flex-col gap-6 items-center justify-center text-center p-20 min-h-screen w-screen"
    >
      <h1 className=" text-5xl font-Blanka mb-10 text-white">Oops!</h1>
      <p className="text-white/80 text-2xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`} className="z-10 mt-10 text-white border-2 p-2 border-blue-500 shadow-sm shadow-blue-400 bg-transparent backdrop-blur-lg">
        Go to Main page{" "}
      </Link>
      <Spline className="absolute opacity-50 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-8"
        scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode"
        events-target="global"
      />
    </div>
  );
}

export default ErrorPage;
