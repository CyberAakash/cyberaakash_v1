import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Bar() {
  return (
    <>
      <a
        className="fixed z-20 bg-transparent backdrop-blur-sm bottom-10 left-[50%] translate-x-[-50%] 
    flex items-center justify-center gap-3 h-12 min-w-10 p-4 border border-green-500 rounded-md"
      >
        <p className="font-semibold ">Download Resume</p>
        <ArrowDownTrayIcon className="h-4 w-4" />
      </a>
    </>
  );
}

export default Bar