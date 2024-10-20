import React, { useState } from "react";
import { Flag, Trash2, Info, House } from "lucide-react";
import Modal from "./Modal";

function Toolbar(props) {
  const styles = {
    tooltipContent: {
      padding: "8px",
      backgroundColor: "white",
      borderRadius: "4px",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      border: "1px solid #e5e7eb",
    },
    tooltipText: {
      color: "#1f2937",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#3b82f6",
      color: "white",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
  };

  const customContent = (
    <div style={styles.tooltipContent}>
      <p style={styles.tooltipText}>This is a custom tooltip content</p>
    </div>
  );

  return (
    <>
      <Modal />
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
