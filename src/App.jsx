import { useReducer, useContext, createContext } from "react";
import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";

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
        <Center marginTop={"2rem"}>
          <Heading style={{ fontFamily: "Dancing Script", fontWeight: "700" }}>
            {" "}
            Dépenses App 💰{" "}
          </Heading>
        </Center>
        <Grid
          gridTemplateColumns={" 1fr 400px"}
          templateAreas={`"header header" "aside main" `}
        >
          <GridItem area={"header"}>
            <FormDepenses />
          </GridItem>
          <GridItem area={"aside"}>
            <ListDéponses />
          </GridItem>
          <GridItem area={"main"}>
            <Aside />
          </GridItem>
        </Grid>
      </DeponseContext.Provider>
    </>
  );
}

export default App;
