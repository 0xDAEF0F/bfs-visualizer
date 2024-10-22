import { useState } from "react";
import { Flag, Trash2, House, Info } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";

function Toolbar(props) {
  const { mazeOrAlgoRunning } = props;
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
    <div className="mb-5 sm:mb-10">
      <Modal setIsTour={setIsTour} />
      <div className="toolbar">
        <div className="mx-10 flex flex-wrap gap-2 gap-y-3 md:gap-4">
          <button
            className={`generate-maze toolbar-button h-10 rounded-full ${buttonStates.generateMaze && "border-white"}`}
            onClick={async () => {
              setButtonStates((prev) => {
                let curr = { ...prev };
                for (let key in curr) curr[key] = false;
                curr.generateMaze = true;
                return curr;
              });
              setStep(Infinity);
              await props.generateMaze();
              setButtonStates((prev) => {
                let curr = { ...prev };
                curr.generateMaze = false;
                return curr;
              });
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
            opacity={1}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            style={{ padding: "1rem 1.5rem" }}
            place="bottom"
            anchorSelect=".generate-maze"
          >
            <p className="font-sans text-xs sm:text-sm">
              Click “generate maze” {<br></br>} to create a maze.
            </p>
          </Tooltip>

          <button
            className="home toolbar-button flex h-10 w-10 items-center justify-center rounded-full"
            onClick={() => {
              if (mazeOrAlgoRunning) return;
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
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".home"
            content="Pick a starting point."
          />

          <button
            className="goal toolbar-button flex h-10 w-10 items-center justify-center rounded-full"
            onClick={() => {
              if (mazeOrAlgoRunning) return;
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
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".goal"
            content="Pick a destination point."
          />

          <button
            className={`clear-grid toolbar-button active-stroke flex h-10 w-10 items-center justify-center rounded-full active:border-[#B1000E] active:bg-clear-btn ${
              buttonStates.clearGrid && "bg-clear-btn"
            }`}
            onClick={() => {
              if (mazeOrAlgoRunning) return;
              props.clearGrid();
              setButtonStates((prev) => {
                let curr = { ...prev };
                for (let key in curr) curr[key] = false;
                return curr;
              });
              setIsTour(false);
            }}
          >
            <Trash2
              className={`${buttonStates.clearGrid && "stroke-[#FFB5AE]"} h-auto w-5 stroke-1`}
            />
          </button>
          <Tooltip
            isOpen={isTour && step === 4}
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
            afterShow={() => {
              timeout = setTimeout(() => setIsTour(false), 5000);
            }}
            className="font-sans text-xs"
            place="bottom"
            anchorSelect=".clear-grid"
            content="Click to clear the grid. Feel free to play around!"
          />

          <button
            className={`bfs toolbar-button h-10 rounded-full ${buttonStates.bfs && "bg-green-600"}`}
            onClick={async () => {
              setButtonStates((prev) => {
                let curr = { ...prev };
                curr.bfs = true;
                return curr;
              });
              setStep(Infinity);
              await props.startBfs();
              setButtonStates((prev) => {
                let curr = { ...prev };
                curr.bfs = false;
                return curr;
              });
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
            style={{ padding: "1rem 1.5rem" }}
            opacity={1}
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
    </div>
  );
}

export default Toolbar;
