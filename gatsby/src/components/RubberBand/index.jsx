import React from "react";

function RubberBand({ text, onLoad }) {
  const splitText = (text) => {
    let arr = Array.from(text);
    return arr.map((val, key) => (
      <span className={onLoad ? "rubberBand rubberBandLoad" : "rubberBand"} key={key}>
        {val}
      </span>
    ));
  };
  return splitText(text);
}

export default RubberBand;
