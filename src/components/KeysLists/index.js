import React from "react";

function KeyLists() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>KeyLists: </h1>
      <p>
        <ul>
          {numbers.map((number) => (
            <li>{number * 2}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default KeyLists;
