import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import Search from "../components/Search";

function FoodList(props) {
  const [foodItems, setFoodItems] = useState(props.food);
  const [filteredFood, setFilteredFood] = useState(props.food);

  function createFood(body) {
    console.log(body);
    body._id = parseInt(Math.random() * 1000);
    setFoodItems([body].concat(foodItems));
  }

  function handleFilterFood(string) {
    if (string === "") {
      setFoodItems(foodItems);
    } else {
      setFilteredFood(
        foodItems.filter((food) =>
          food.name.toLowerCase().includes(string.toLowerCase())
        )
      );
    }
  }

  return (
    <>
      <AddFoodForm parentCb={createFood} />
      <Search filterFood={handleFilterFood} />
      {foodItems.map((food) => {
        return <FoodBox food={food} />;
      })}
    </>
  );
}

export default FoodList;
