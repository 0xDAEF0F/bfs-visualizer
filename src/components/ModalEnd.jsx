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
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-end">
              <button type="button">
                <X className="hover:stroke-[#939FAB]" onClick={() => setIsOpen(false)} />
              </button>
            </div>
            <div className="dialog-main px-4 sm:px-8">
              <h2 className="dialog-title">Congratulations, explorer!</h2>
              <p className="dialog-content">Feel free to experiment with new paths.</p>
              <p className="font-serif">Happy Coding 🤓</p>
            </div>
            <div className="flex items-center justify-end gap-3 font-sans text-xs">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[#0477eb] px-4 py-1 font-light text-black hover:bg-[#1a85ee]"
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
