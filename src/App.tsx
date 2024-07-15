import React, { FC, useState } from "react";
import AddPizzaForm from "./ components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./ components/DisplayPizza";
import "./App.css";

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  console.log(pizzaList);
  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(
      pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  const deletePizza = (id: number) => {
    const newPizzaList = pizzaList.filter((pizza) => pizza.id !== id);
    setPizzaList(newPizzaList);
  };
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">My Pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzaList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        ></DisplayPizzas>
      </div>
    </div>
  );
};

export default App;
