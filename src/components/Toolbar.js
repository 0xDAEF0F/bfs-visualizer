import React, { useState } from "react";
import { Flag, Trash2, Info, House } from "lucide-react";

function Toolbar(props) {
  return (
    <>
      <div className='toolbar'>
        <div>
          <button className='toolbar-button' onClick={props.generateMaze}>
            <p>Generate Maze</p>
          </button>
          <button
            className='toolbar-button svg'
            onClick={props.pickRandomStart}
          >
            <House className='svgs' />
          </button>
          <button className='toolbar-button svg' onClick={props.pickRandomEnd}>
            <Flag className='svgs' />
          </button>
          <button className='toolbar-button svg' onClick={props.clearGrid}>
            <Trash2 className='svgs' />
          </button>
          <button className='toolbar-button' onClick={props.startBfs}>
            <p>Breadth First Search</p>
          </button>
        </div>
        {/* <Info style={{ marginLeft: "40px" }} /> */}
      </div>
    </>
  );
}

export default Toolbar;
