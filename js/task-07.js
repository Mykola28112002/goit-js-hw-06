const inputRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontsize = inputRange.addEventListener("input", (event) => {
    textEl.style.fontSize = "event.currentTarget.value";
    console.log(fontsize);
});
