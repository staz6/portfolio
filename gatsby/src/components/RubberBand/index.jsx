import React from "react";

function RubberBand({ text }) {
  const splitText = (text) => {
    let arr = Array.from(text);
    return arr.map((val, key) => (
      <span className="rubberBand" key={key}>
        {val}
      </span>
    ));
  };
  return splitText(text);
}

export default RubberBand;
