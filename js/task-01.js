// Number of categories: 3

const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);

// Category: Animals
// Elements: 4
    
// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
for (const item of ulCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const constItems = item.querySelectorAll("li");
    console.log(`Elements: ${constItems.length}`);
}
