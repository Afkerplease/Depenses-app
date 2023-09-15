import React, { useContext } from "react";
import { DeponseContext } from "../App";

function Aside() {
  const { state } = useContext(DeponseContext);
  return (
    <>
      {Object.values(state.categorieDépense).map((category, index) => (
        <h1 key={index}> {category} $ </h1>
      ))}
      {Object.keys(state.categorieDépense).map((category, index) => (
        <h1 key={index}> {category} </h1>
      ))}
    </>
  );
}

export default Aside;
