import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <span className="cell" key={number}>
          {value ? value[number] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
