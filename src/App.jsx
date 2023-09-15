import { useReducer, useContext, createContext } from "react";

import "./App.css";

import FormDepenses from "./components/FormDepenses";
import ListDéponses from "./components/ListDéponses";
import Aside from "./components/Aside";
export const DeponseContext = createContext();

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
      <DeponseContext.Provider value={{ state, dispatch }}>
        <FormDepenses />
        <h6> {state.total} </h6>
        <Aside />
        <ListDéponses />
      </DeponseContext.Provider>
    </>
  );
}

export default App;
