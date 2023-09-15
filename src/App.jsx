import { useReducer, useContext, createContext } from "react";

import "./App.css";

import FormDepenses from "./components/FormDepenses";

const initalState = {
  dépenses: [],
  total: 0,
  categorieDépense: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const { categorie } = action.payload;
      const updateCategorie = { ...state.categorieDépense };
      updateCategorie[categorie] =
        (updateCategorie[categorie] || 0) + +action.payload.prix;
      return {
        ...state,
        dépenses: [...state.dépenses, action.payload],
        total: state.total + +action.payload.prix,
        categorieDépense: updateCategorie,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state.categorieDépense);
  return (
    <>
      <FormDepenses dispatch={dispatch} />

      <h6> {state.total} </h6>
      {Object.values(state.categorieDépense).map((category, index) => (
        <h1 key={index}> {category} </h1>
      ))}
      {Object.keys(state.categorieDépense).map((category, index) => (
        <h1 key={index}> {category} </h1>
      ))}

      {state.dépenses.map((dep, index) => (
        <div style={{ border: "1px solid black" }} key={index}>
          <h1> {dep.description} </h1>
          <h2>{dep.prix} </h2>
          <p>{dep.categorie}</p>
        </div>
      ))}
    </>
  );
}

export default App;
