import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Bar() {
  const handleDownload = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const fileUrl = "resume_v3.pdf";
    window.open(fileUrl, "_blank");
  };
  return (
    <>
      <a
        className="fixed cursor-pointer z-20 bg-transparent backdrop-blur-sm bottom-10 left-[50%] translate-x-[-50%] 
    flex items-center justify-center gap-3 h-12 min-w-10 p-4 border border-green-500 rounded-md"
        onClick={handleDownload}
      >
        <p className="font-semibold ">Download Resume</p>
        <ArrowDownTrayIcon className="h-4 w-4" />
      </a>
    </>
  );
}

export default Bar