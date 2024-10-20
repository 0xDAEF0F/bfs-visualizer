import { useState } from "react";
import { X } from "lucide-react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleDialog} className='open-button'>
        Open Dialog
      </button>

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
              <button onClick={() => {}} className='close-button'>
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
