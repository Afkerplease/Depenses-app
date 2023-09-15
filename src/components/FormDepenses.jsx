import React, { useContext, useState } from "react";
import { DeponseContext } from "../App";

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
    <form onSubmit={submitHandler}>
      <label>
        Description
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </label>
      <label htmlFor="">
        Prix
        <input
          value={prix}
          onChange={(e) => setprix(e.target.value)}
          type="number"
        />
      </label>
      <select
        name={"category"}
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit"> Ajouter</button>
    </form>
  );
}

export default FormDepenses;
