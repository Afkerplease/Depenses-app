import React, { useContext, useState } from "react";
import { DeponseContext } from "../App";
import { Select, Input, Button, Flex, Box, Center } from "@chakra-ui/react";

function FormDepenses() {
  const { state, dispatch } = useContext(DeponseContext);
  console.log(state);
  const categories = [
    "Alimentation",
    "Logement",
    "Transport",
    "Divertissement",
    "Santé",
    "Éducation",
    "Autres",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Alimentation");
  const [description, setDescription] = useState("");
  const [prix, setprix] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        categorie: selectedCategory,
        description,
        prix,
      },
    });
    setDescription("");
    setprix("");
  };
  return (
    <form onSubmit={submitHandler} style={{ marginTop: "4rem" }}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"14px"}>
        <Box>
          <label style={{ fontFamily: "Dancing Script", fontWeight: "700" }}>
            Description
            <Input
              style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
              color="black"
              placeholder="Description..."
              _placeholder={{ opacity: 0.4, color: "inherit" }}
              alignSelf={"start"}
              size={"md"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
          </label>
        </Box>
        <Box>
          <label
            style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
            htmlFor=""
          >
            Prix
            <Input
              color="black"
              placeholder="Le prix..."
              _placeholder={{ opacity: 0.4, color: "inherit" }}
              value={prix}
              onChange={(e) => setprix(e.target.value)}
              type="number"
            />
          </label>
        </Box>
        <Box>
          <Select
            style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
            marginTop={"21px"}
            size={"md"}
            name={"category"}
            value={selectedCategory}
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
      <Center color="white" marginTop={"40px"}>
        <Button colorScheme="purple" type="submit" size="lg" variant="outline">
          {" "}
          Ajouter
        </Button>
      </Center>
    </form>
  );
}

export default FormDepenses;
