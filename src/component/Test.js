import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Test = () => {
  const [color, setColor] = useState();
  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    console.log("changeColor:" + color);
  }, [color]);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "10px auto",
          backgroundColor: color,
          border: "1px solid black",
        }}
      ></div>
      <div>
        <button onClick={() => changeColor("#fff")}>white</button>
        <button onClick={() => changeColor("#FFB6C1")}>CherryBlossom</button>
        <button onClick={() => changeColor("#87CEEB")}>Skyblue</button>
      </div>
    </div>
  );
};
