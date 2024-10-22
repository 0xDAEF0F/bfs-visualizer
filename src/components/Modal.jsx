import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Modal({ setIsTour }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

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
        <div onClick={toggleDialog} className="dialog-overlay">
          <div className="dialog">
            <div className="flex items-center justify-end">
              <button type="button">
                <X className="hover:stroke-[#939FAB]" onClick={toggleDialog} />
              </button>
            </div>
            <div className="dialog-main px-4 sm:px-8">
              <h2 className="dialog-title">Hey,</h2>
              <p className="dialog-content">Welcome to the Maze Adventure!</p>
            </div>
            <div className="flex items-center justify-end gap-3 font-sans text-xs">
              <button onClick={toggleDialog} className="hover:text-[#939FAB]">
                Skip
              </button>
              <button
                onClick={() => {
                  setIsTour(true);
                  toggleDialog();
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
