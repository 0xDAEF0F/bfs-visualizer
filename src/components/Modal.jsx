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
        <div onClick={toggleDialog} className='dialog-overlay'>
          <div className='dialog'>
            <div className='x-wrapper'>
              <X type='button' onClick={toggleDialog} />
            </div>
            <div className='dialog-main'>
              <h2 className='dialog-title'>Hey,</h2>
              <p className='dialog-content'>Welcome to the Maze Adventure!</p>
            </div>
            <div className='dialog-actions'>
              <button onClick={toggleDialog} className='skip-button'>
                Skip
              </button>
              <button
                onClick={() => {
                  setIsTour(true);
                  toggleDialog();
                }}
                className='close-button'
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
