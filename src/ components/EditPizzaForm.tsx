import React, { FC, ChangeEvent, useState, FormEvent } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Name >>", name);
    console.log("Value >>", value);
    setEditPizza((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  console.log("New Pizza >> ", editPizza);
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Img"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditPizzaForm;
