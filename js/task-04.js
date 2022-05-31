// Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуй її значенням 0.
const incrBtn = document.querySelector("[data-action='increment']");
const decrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");
let currentValue = 0;

incrBtn.addEventListener("click", () => {
    currentValue += 1;
    valueNum.textContent = currentValue;
})

decrBtn.addEventListener("click", () => {
    currentValue -= 1;
    valueNum.textContent = currentValue;
})

// Додай слухачів кліків до кнопок, всередині яких 
// збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.