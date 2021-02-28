import React from "react"

function DoneTask(props) {
  return (
    <div className="completed-tasks">
      <div className="done-task">
        <label className="c-custom-checkbox">
          <input type="checkbox" className="hidden-checkbox" checked />
          <svg 
          width="32"
          height="32"
          viewBox="-4 -4 39 39"
          aria-hidden="true"
          focusable="false"
        >
          {/* <!-- The background --> */}
          <rect
            className="cb-bg"
            width="37"
            height="37"
            x="-3"
            y="-3"
            stroke="currentColor"
            fill="none"
            stroke-width="5"
            rx="2"
            ry="2"
          ></rect>
          {/* <!-- The checkmark--> */}
          <polyline
            className="cb-cm"
            points="2,14 12,23 28,5"
            stroke="transparent"
            stroke-width="7"
            fill="none"
          ></polyline>
        </svg>
          <span>{props.text}</span>
          <img src="assets/bin.svg" className="bin" />
        </label>
      </div>
    </div>
  );
}

export default DoneTask
