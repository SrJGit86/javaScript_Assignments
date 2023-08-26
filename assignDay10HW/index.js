const container = document.getElementById("container");
const btn = document.getElementById("btn");

let changeClr = ["blue", "white", "red", "green", "brown", "cyan", "blueviolet", "aqua", "chocolate", "darkolivegreen", "darkred"];

let i = 0;
btn.addEventListener("click", () => {

    if (i === changeClr.length) {
        i = 0;
    }
    container.style.backgroundColor = changeClr[i];
    i++;
});