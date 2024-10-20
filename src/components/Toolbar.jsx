import { useState } from "react";
import { Flag, Trash2, Info, House } from "lucide-react";
import Modal from "./Modal";
import { Tooltip } from "react-tooltip";

function Toolbar(props) {
  const [isTour, setIsTour] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Modal setIsTour={setIsTour} />
      <div className='toolbar'>
        <div>
          <button
            className='generate-maze toolbar-button'
            onClick={() => {
              props.generateMaze();
              if (isTour) setStep(1);
            }}
          >
            <p>Generate maze</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 0}
            afterShow={() => {
              setTimeout(() => setStep(undefined), 3000);
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
              if (isTour) setStep(2);
            }}
          >
            <House className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 1}
            afterShow={() => {
              setTimeout(() => setStep(undefined), 3000);
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
              if (isTour) setStep(3);
            }}
          >
            <Flag className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 2}
            afterShow={() => {
              setTimeout(() => setStep(undefined), 3000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.goal'
            content='Pick a destination point.'
          />

          <button
            className='clear-grid toolbar-button svg flex items-center justify-center'
            onClick={props.clearGrid}
          >
            <Trash2 className='stroke-1 w-5 h-auto' />
          </button>
          <Tooltip
            isOpen={isTour && step === 4}
            afterShow={() => {
              setTimeout(() => setStep(undefined), 3000);
            }}
            className='text-xs font-sans'
            place='bottom'
            anchorSelect='.clear-grid'
            content='Click to clear the grid. Feel free to play around!'
          />

          <button
            className='bfs toolbar-button'
            onClick={() => {
              props.startBfs();
              if (isTour) setStep(4);
            }}
          >
            <p>Breadth First Search</p>
          </button>
          <Tooltip
            isOpen={isTour && step === 3}
            afterShow={() => {
              setTimeout(() => setStep(undefined), 3000);
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
