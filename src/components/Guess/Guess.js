import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const lettersCheck = checkGuess(value, answer);

  const getCellClass = (number) => {
    if (!value) return;
    return lettersCheck[number].status;
  };

  return (
    <p className="guess">
      {range(5).map((number) => (
        <span className={`cell ${getCellClass(number)}`} key={number}>
          {value ? value[number] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
