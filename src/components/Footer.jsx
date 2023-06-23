import "./Footer.css";
import { HeartIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <>
      <div
        className="flex flex-col gap-8 items-center justify-center text-center relative z-30 mx-auto p-10 px-20 
      bg-white text-black w-screen h-fit overflow-x-hidden font-serif"
      >
        <footer className="footer justify-center sm:justify-evenly">
          <div className="w-full flex-col text-xs text-center flex items-center sm:items-start justify-center">
            <span className="footer-title">Services</span>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">App Development</a>
            <a className="link link-hover">UI/UX Design</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="w-full flex-col text-xs text-center flex items-center sm:items-start justify-center">
            <span className="footer-title">What Else ?</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Social</a>
            <a className="link link-hover">Testimonials</a>
          </div>
          {/* <div className="w-full flex-col text-center flex items-center sm:items-start justify-center">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div> */}
          <div className="w-full flex-col text-center flex items-center sm:items-start justify-center">
            <span className="footer-title">How to reach me ? </span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text ">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer px-5 py-8 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between">
          <div className="items-center grid-flow-col ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <div className="flex flex-col items-start justify-center">
              <p>CyberBroz : 2022-2023</p>
              <p>All rights reserved.</p>
            </div>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/VanithaAakash" target="__blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cyberaakash/"
                target="__blank"
              >
                <img
                  src="/linkedin.png"
                  className="fill-current h-[24px] w-[24px]"
                />
              </a>
              <a href="https://www.instagram.com/cyberaakash/" target="__blank">
                <img
                  src="/instagram.png"
                  className="fill-current h-[24px] w-[24px]"
                />
              </a>
            </div>
          </div>
        </footer>
        <div className="flex absolute z-30 bottom-0 left-0 gap-0  w-screen items-center justify-center p-2 bg-black text-white font-Blanka text-base">
          <h1 className=" scale-75">Made with </h1>
          <HeartIcon className="h-6 w-6 text-red-500 scale-75" />
          <h1 className=" scale-75"> by</h1>
          <p className="text-transparent bg-gradient-to-r from-green-500 to-green-300 bg-clip-text scale-75">
            CyberAakash
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
