import React, { FC, ChangeEvent, useState, FormEvent } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Name >>", name);
    console.log("Name >>", value);
    setNewPizza((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({ title, price: Number(price), img, id: Date.now() });
    }
    setNewPizza(initState);
  };
  console.log("New Pizza >>A>> ", newPizza);
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text "
        placeholder="Price"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Img"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Add Menu</button>
    </form>
  );
};

export default AddPizzaForm;
