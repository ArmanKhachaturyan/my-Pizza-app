import React, { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizzas from "./SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizzas
            key={pizza.id}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
            pizza={pizza}
          ></SinglePizzas>
        ); // Corrected 'key'
      })}
    </div>
  );
};

export default DisplayPizzas;
