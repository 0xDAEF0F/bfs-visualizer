import { useState } from "react";
import { Flag, Trash2, House, Info } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";

function Toolbar(props) {
  const [isTour, setIsTour] = useState(false);
  const [step, setStep] = useState(0);

  let timeout;

  return (
    <>
      <Modal setIsTour={setIsTour} />
      <div className='toolbar'>
        <div>
          <button
            className='generate-maze toolbar-button'
            onClick={async () => {
              setStep(Infinity);
              await props.generateMaze();
              if (isTour) {
                clearTimeout(timeout);
                setStep(1);
              }
            }}
          >
            <p>Generate maze</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 0}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.generate-maze'
            content='Click “generate maze” to create a maze.'
          />

          <button
            className='home toolbar-button svg flex items-center justify-center'
            onClick={() => {
              props.pickRandomStart();
              if (isTour) {
                if (step !== 1) setIsTour(false);
                clearTimeout(timeout);
                setStep(2);
              }
            }}
          >
            <House className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 1}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.home'
            content='Pick a starting point.'
          />

          <button
            className='goal toolbar-button svg flex items-center justify-center'
            onClick={() => {
              props.pickRandomEnd();
              if (isTour) {
                if (step !== 2) setIsTour(false);
                clearTimeout(timeout);
                setStep(3);
              }
            }}
          >
            <Flag className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 2}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.goal'
            content='Pick a destination point.'
          />

          <button
            className='clear-grid toolbar-button svg flex items-center justify-center'
            onClick={() => {
              props.clearGrid();
              if (isTour && step !== 4) setIsTour(false);
            }}
          >
            <Trash2 className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 4}
            afterShow={() => {
              timeout = setTimeout(() => setIsTour(false), 5000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.clear-grid'
            content='Click to clear the grid. Feel free to play around!'
          />

          <button
            className='bfs toolbar-button'
            onClick={async () => {
              setStep(Infinity);
              await props.startBfs();
              if (isTour) {
                if (step !== 3) setIsTour(false);
                clearTimeout(timeout);
                setStep(4);
              }
            }}
          >
            <p>Breadth First Search</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 3}
            afterShow={() => {
              timeout = setTimeout(() => setStep(undefined), 5000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.bfs'
            content='Click to visualize BFS algorithm.'
          />
        </div>
        {/* <Info style={{ marginLeft: "40px" }} /> */}
      </div>
    </>
  );
}

export default Toolbar;
