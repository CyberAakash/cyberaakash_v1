import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function FAQs() {
  const handleDownload = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const fileUrl = "resume_v3.pdf";
    window.open(fileUrl, "_blank");
  };
  return (
    <>
      <div
        className="relative z-10 flex flex-col gap-6 items-center justify-center 
       h-fit w-full pt-[5%] pb-[20%] font-mono"
      >
        <div className="mb-36">
          <a
            className="bg-green-500 text-white hover:text-green-500 hover:bg-white text-center font-robecha
    flex items-center cursor-pointer justify-center gap-3 h-12 min-w-10 p-4 rounded-md transition-all duration-200 delay-75"
            onClick={handleDownload}
          >
            <p className="font-semibold ">Download Resume</p>
            <ArrowDownTrayIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-[90%]">
          <div className="collapse collapse-plus bg-base-200 rounded-none">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title  text-lg md:text-xl font-bold">
              What technology stack you use ?
            </div>
            <div className="collapse-content">
              <p>
                Front-end Development: HTML, CSS, JavaScript, React, NextJS,
                Svelte, and ViteJS for creating dynamic and responsive user
                interfaces. TailwindCSS and Bootstrap for efficient and
                customizable styling. Back-end Development: Node.js, Firebase
                ,MongoDB, MySQL, and PostgreSQL for managing databases and data
                storage. Additional Skills: C, C++, Python, and Java for various
                programming tasks and algorithmic problem-solving. 3D modeling
                for creating three-dimensional assets and visualizations. UI/UX
                design for crafting user-friendly and visually appealing
                interfaces.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 border-t-2 rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl font-bold">
              Services provided
            </div>
            <div className="collapse-content">
              <p>
                Website, Mobile Application, Figma Designs, and 3D modelling
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 border-t-2 rounded-none">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl font-bold">
              What people think about me ?
            </div>
            <div className="collapse-content">
              <p>
                My self-learning approach and dedication to continuous
                improvement demonstrate my commitment to staying up-to-date
                with the latest industry trends and technologies. This trait is
                highly regarded in the tech industry, as it shows that i have
                the ability to adapt and thrive in a rapidly evolving field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
