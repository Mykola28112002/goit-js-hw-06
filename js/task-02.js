const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector("ul");

// ulIngredients.appendChild(cardsMarkup);

const ulIngredientsEl = ingredients.map(ingredient => {
  const ingredientsli = document.createElement("li")
  ingredientsli.classList = "item"

  const paragraphEl =  document.createElement("p")
  paragraphEl.textContent = `${ingredient}`

  ingredientsli.append(paragraphEl)
  
  return ingredientsli
})

ulIngredients.append(...ulIngredientsEl)
