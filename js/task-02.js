const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

const ulIngredients = document.querySelector("ul");
  
  
ingredients.forEach(element => {
   // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  const ingredientsli = document.createElement('li')
  // Додасть елементу клас item.
  ingredientsli.setAttribute('class', 'item')
  // Додасть назву інгредієнта як його текстовий вміст.
  ingredientsli.textContent = `${element}`
  console.log(ingredientsli)
  // Після чого, вставить усі <li> за одну операцію у список ul.ingredients.
  ulIngredients.appendChild(ingredientsli)
});
 