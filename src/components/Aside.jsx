import React, { useContext } from "react";
import { DeponseContext } from "../App";
import { Center, Flex, Heading } from "@chakra-ui/react";

function Aside() {
  const { state } = useContext(DeponseContext);
  const nameCat = Object.keys(state.categorieDépense).map((category, index) => (
    <h1 key={index}> {category} </h1>
  ));
  const prixCat = Object.values(state.categorieDépense).map(
    (category, index) => <h1 key={index}> {category} $ </h1>
  );
  return (
    <>
      <Center>
        <Heading
          style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
          as={"h1"}
        >
          Prix par Categorie
        </Heading>
      </Center>
      <Center marginTop={"3rem"}>
        <Flex gap={"3rem"} alignItems={"center"}>
          <Heading
            size={"md"}
            style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
          >
            {" "}
            {nameCat}{" "}
          </Heading>
          <Heading
            size={"md"}
            style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
          >
            {" "}
            {prixCat}{" "}
          </Heading>
        </Flex>
      </Center>
      <Center marginTop={"3rem"}>
        <Flex direction={"column"} alignItems={"center"}>
          <Heading style={{ fontFamily: "Dancing Script", fontWeight: "700" }}>
            Prix Total
          </Heading>
          <Heading>{state.total} € </Heading>
        </Flex>
      </Center>
    </>
  );
}

export default Aside;
