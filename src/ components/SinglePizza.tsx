import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzasProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizzas: FC<SinglePizzasProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false); // Corrected useState declaration

  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    deletePizza(pizza.id);
  };
  return (
    <div className="pizza">
      <img src={`/img/${pizza.img}`} alt={pizza.title}></img>
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizzaControls">
        <div onClick={handleToggleEdit}>
          <CiEdit />
        </div>
        <div className="pizzaDelete" onClick={handleDelete}>
          <MdDeleteForever />
        </div>
      </div>
      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizzas;
