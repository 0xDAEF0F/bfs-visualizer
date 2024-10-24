import { useState } from "react";
import { Flag, Trash2, House } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";
import ModalEnd from "./ModalEnd";

function Toolbar(props) {
  const { mazeOrAlgoRunning } = props;
  const [step, setStep] = useState();
  const [buttonStates, setButtonStates] = useState({
    pickStart: false,
    pickGoal: false,
    bfs: false,
  });

  return (
    <div className="mb-5 sm:mb-7">
      <Modal setStep={setStep} />
      <ModalEnd isOpen={step === 5} setIsOpen={setStep} />
      <div className="toolbar">
        <div className="mx-10 flex flex-wrap gap-2 gap-y-3 md:gap-4">
          <button
            className={`generate-maze toolbar-button h-10 rounded-full focus:border-white ${step === 0 && "animate-pulse"}`}
            onClick={async () => {
              if (mazeOrAlgoRunning) return;
              setButtonStates((p) => Object.fromEntries(Object.keys(p).map((k) => [k, false])));
              await props.generateMaze();
              if (step === 0) setStep(1);
              if (step !== 0) setStep(undefined);
            }}
          >
            <p className="px-3 text-xs">Generate maze</p>
          </button>
          <Tooltip
            isOpen={step === 0}
            opacity={1}
            style={{ padding: "1rem 1.5rem" }}
            classNameArrow="my-tooltip-arrow"
            place="bottom"
            anchorSelect=".generate-maze"
          >
            <p className="font-sans text-xs sm:text-sm">
              Click “generate maze” {<br></br>} to create a maze.
            </p>
          </Tooltip>

          <button
            className={`home toolbar-button flex h-10 w-10 items-center justify-center rounded-full ${step === 1 && "animate-pulse"}`}
            onClick={() => {
              if (mazeOrAlgoRunning) return;
              setButtonStates((p) => ({ ...p, pickStart: true }));
              props.pickRandomStart();
              if (step === 1) setStep(2);
              if (step !== 1) setStep(undefined);
            }}
          >
            <House
              className={`${buttonStates.pickStart && "stroke-[#0C86FF]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={step === 1}
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".home"
            classNameArrow="my-tooltip-arrow"
            content="Pick a starting point."
          />

          <button
            className={`goal toolbar-button flex h-10 w-10 items-center justify-center rounded-full ${step === 2 && "animate-pulse"}`}
            onClick={() => {
              if (mazeOrAlgoRunning) return;
              setButtonStates((p) => ({ ...p, pickGoal: true }));
              props.pickRandomEnd();
              if (step === 2) setStep(3);
              if (step !== 2) setStep(undefined);
            }}
          >
            <Flag
              className={`${buttonStates.pickGoal && "stroke-[#FF9A34]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={step === 2}
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            className="font-sans text-xs"
            place="bottom"
            classNameArrow="my-tooltip-arrow"
            anchorSelect=".goal"
            content="Pick a destination point."
          />

          <button
            className={`clear-grid toolbar-button active-stroke flex h-10 w-10 items-center justify-center rounded-full active:border-[#B1000E] active:bg-clear-btn ${
              step == 4 && "animate-pulse bg-clear-btn"
            }`}
            onClick={() => {
              if (mazeOrAlgoRunning) return;
              setButtonStates((p) => Object.fromEntries(Object.keys(p).map((k) => [k, false])));
              props.clearGrid();
              if (step === 4) setStep(5);
              if (step !== 4) setStep(undefined);
            }}
          >
            <Trash2 className={`${step === 4 && "stroke-[#FFB5AE]"} h-auto w-5 stroke-1`} />
          </button>
          <Tooltip
            isOpen={step === 4}
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            className="font-sans text-xs"
            classNameArrow="my-tooltip-arrow"
            place="bottom"
            anchorSelect=".clear-grid"
            content="Click to clear the grid."
          />

          <button
            className={`bfs toolbar-button h-10 rounded-full ${buttonStates.bfs && "bg-green-600"} ${step === 3 && "animate-pulse"}`}
            onClick={async () => {
              if (mazeOrAlgoRunning) return;
              setButtonStates((p) => ({ ...p, bfs: true }));
              await props.startBfs();
              setButtonStates((p) => ({ ...p, bfs: false }));
              if (step === 3) setStep(4);
              if (step !== 3) setStep(undefined);
            }}
          >
            <p className="px-3 text-xs">Breadth First Search</p>
          </button>
          <Tooltip
            isOpen={step === 3}
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            classNameArrow="my-tooltip-arrow"
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".bfs"
            content="Visualize BFS algorithm."
          />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
