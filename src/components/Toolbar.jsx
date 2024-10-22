import { useState } from "react";
import { Flag, Trash2, House, Info } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";

function Toolbar(props) {
  const [isTour, setIsTour] = useState(false);
  const [step, setStep] = useState(0);
  const [buttonStates, setButtonStates] = useState({
    generateMaze: false,
    pickStart: false,
    pickGoal: false,
    clearGrid: false,
    bfs: false,
  });

  let timeout;

  return (
    <>
      <Modal setIsTour={setIsTour} />
      <div className="toolbar">
        <div className="mx-10 flex flex-wrap gap-2 gap-y-3 md:gap-4">
          <button
            className="generate-maze toolbar-button h-10"
            onClick={async () => {
              if (step === 4 && isTour) {
                setButtonStates((prev) => {
                  const newSt = { ...prev };
                  newSt.pickStart = false;
                  newSt.pickGoal = false;
                  newSt.clearGrid = false;
                  return newSt;
                });
              }
              setStep(Infinity);
              await props.generateMaze();
              if (isTour) {
                clearTimeout(timeout);
                setStep(1);
              }
            }}
          >
            <p className="px-3 text-xs">Generate maze</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 0}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".generate-maze"
            content="Click “generate maze” to create a maze."
          />

          <button
            className="home toolbar-button flex h-10 w-10 items-center justify-center"
            onClick={() => {
              if (step === 4 && isTour) {
                setButtonStates((prev) => {
                  const newSt = { ...prev };
                  newSt.pickStart = true;
                  newSt.pickGoal = false;
                  newSt.clearGrid = false;
                  return newSt;
                });
              }
              setButtonStates((prev) => ({ ...prev, pickStart: true }));
              props.pickRandomStart();
              if (isTour) {
                if (step !== 1) setIsTour(false);
                clearTimeout(timeout);
                setStep(2);
              }
            }}
          >
            <House
              className={`${buttonStates.pickStart && "stroke-[#0C86FF]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={isTour && step === 1}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".home"
            content="Pick a starting point."
          />

          <button
            className="goal toolbar-button flex h-10 w-10 items-center justify-center"
            onClick={() => {
              if (step === 4 && isTour) {
                setButtonStates((prev) => {
                  const newSt = { ...prev };
                  newSt.pickStart = true;
                  newSt.pickGoal = true;
                  newSt.clearGrid = false;
                  return newSt;
                });
              }
              setButtonStates((prev) => ({ ...prev, pickGoal: true }));
              props.pickRandomEnd();
              if (isTour) {
                if (step !== 2) setIsTour(false);
                clearTimeout(timeout);
                setStep(3);
              }
            }}
          >
            <Flag
              className={`${buttonStates.pickGoal && "stroke-[#FF9A34]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={isTour && step === 2}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".goal"
            content="Pick a destination point."
          />

          <button
            className={`clear-grid toolbar-button active-stroke flex h-10 w-10 items-center justify-center active:border-[#B1000E] active:bg-clear-btn ${
              buttonStates.clearGrid && "bg-clear-btn"
            }`}
            onClick={() => {
              props.clearGrid();
              setButtonStates((prev) => {
                let curr = { ...prev };
                for (let key in curr) curr[key] = false;
                return curr;
              });
              if (isTour && step !== 4) setIsTour(false);
            }}
          >
            <Trash2
              className={`${buttonStates.clearGrid && "stroke-[#FFB5AE]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={isTour && step === 4}
            afterShow={() => {
              timeout = setTimeout(() => setIsTour(false), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".clear-grid"
            content="Click to clear the grid. Feel free to play around!"
          />

          <button
            className={`bfs toolbar-button h-10 ${buttonStates.bfs && "bg-green-600"}`}
            onClick={async () => {
              if (step === 4 && isTour) {
                setButtonStates((prev) => {
                  const newSt = { ...prev };
                  newSt.pickStart = true;
                  newSt.pickGoal = true;
                  newSt.clearGrid = false;
                  return newSt;
                });
              }
              setStep(Infinity);
              await props.startBfs();
              if (isTour) {
                if (step !== 3) setIsTour(false);
                clearTimeout(timeout);
                setStep(4);
                setButtonStates((prev) => ({ ...prev, clearGrid: true }));
              }
            }}
          >
            <p className="px-3 text-xs">Breadth First Search</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 3}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".bfs"
            content="Click to visualize BFS algorithm."
          />
        </div>
        {/* <Info style={{ marginLeft: "40px" }} /> */}
      </div>
    </>
  );
}

export default Toolbar;
