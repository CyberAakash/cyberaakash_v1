import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function FAQs() {
  return (
    <>
      <div
        className="relative z-10 flex flex-col gap-6 items-center justify-center 
       h-fit w-full pt-[5%] pb-[20%] font-mono"
      >
        <div className="mb-36">
          <a
            className="bg-green-500 text-white hover:text-green-500 hover:bg-white text-center font-robecha
    flex items-center justify-center gap-3 h-12 min-w-10 p-4 rounded-md transition-all duration-200 delay-75"
          >
            <p className="font-semibold ">Download Resume</p>
            <ArrowDownTrayIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-[90%]">
          <div className="collapse collapse-plus bg-base-200 rounded-none">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title  text-lg md:text-xl font-bold">
              How to contact you ?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 border-t-2 rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl font-bold">
              Services provided
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 border-t-2 rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl font-bold">
              How i spend my time ?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
