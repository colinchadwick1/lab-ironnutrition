import { useState } from "react";
import React from "react";


export default function AddFoodForm(props) {
  const [formState, setFormState] = useState({});


  function handleInput(event){
    let {name, value} = event.target
    setFormState(Object.assign({}, formState, {[name]: value}))
}

  function handleSubmit(event) {
    event.preventDefault();
    props.parentCb(formState)
    setFormState({})
  }



  return (
    <div className="AddFood">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name="name" placeholder="Name" value={formState.name || ""} onChange={handleInput}/>

        <label htmlFor='image'>Image:</label>
        <input type='text' name='image' placeholder="image" value={formState.image || ""} onChange={handleInput} />


        <label htmlFor='calories'>Calories:</label>
        <input type="number" name="calories" placeholder="Calories" value={formState.calories || ""} onChange={handleInput} />

        <label htmlFor='servings' >Servings:</label>
        <input type="number" name="servings" value={formState.servings || ""} onChange={handleInput} />

        <br/>
       <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

