import React, { useContext } from "react";
import { DeponseContext } from "../App";

function ListDéponses() {
  const { state } = useContext(DeponseContext);
  return (
    <>
      {state.dépenses.map((dep, index) => (
        <div key={index}>
          <h1> {dep.description} </h1>
          <h2>{dep.prix} </h2>
          <p>{dep.categorie}</p>
        </div>
      ))}
    </>
  );
}

export default ListDéponses;
