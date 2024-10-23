import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Modal({ setStep }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasUserVisited = localStorage.getItem("hasUserVisited");
    if (!hasUserVisited) {
      localStorage.setItem("hasUserVisited", "true");
      setIsOpen(true);
      return;
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="dialog-overlay">
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-5 w-full max-w-[500px] rounded-xl border border-[#C7C7C7]/45 bg-[#1f2224] px-5 pb-5 pt-[10px]"
          >
            <div className="flex items-center justify-end">
              <button type="button">
                <X className="hover:stroke-[#939FAB]" onClick={() => setIsOpen(false)} />
              </button>
            </div>
            <div className="px-4 py-5 sm:px-8 sm:py-12">
              <h2 className="mb-2 font-sans text-xs sm:text-base">Hey,</h2>
              <p className="mb-5 font-sans font-medium sm:text-2xl">
                Welcome to the Maze Adventure!
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 font-sans text-xs">
              <button onClick={() => setIsOpen(false)} className="hover:text-[#939FAB]">
                Skip
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStep(0);
                }}
                className="rounded-md bg-[#0477eb] px-4 py-1 font-light text-black hover:bg-[#1a85ee]"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
