import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ModalEnd({ isOpen: isOpen_ }) {
  const [isOpen, setIsOpen] = useState(isOpen_);

  useEffect(() => {
    setIsOpen(isOpen_);
  }, [isOpen_]);

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="dialog-overlay">
          <div
            className="mx-5 w-full max-w-[500px] rounded-xl border border-[#C7C7C7]/45 bg-[#1f2224] px-5 pb-5 pt-[10px] sm:space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end">
              <button type="button">
                <X
                  className="hover:stroke-[#939FAB] sm:h-7 sm:w-7"
                  onClick={() => setIsOpen(false)}
                />
              </button>
            </div>
            <div className="space-y-3 px-4 sm:px-8">
              <h2 className="font-sans text-sm sm:text-base">Congratulations, explorer!</h2>
              <p className="font-sans font-medium sm:text-2xl">
                Feel free to experiment with new paths.
              </p>
              <p className="font-sans text-white">Happy Coding 🤓</p>
            </div>
            <div className="flex items-center justify-end gap-3 font-sans text-xs sm:text-sm">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[#0477eb] px-4 py-1 font-light text-black hover:bg-[#1a85ee] sm:px-6 sm:py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
