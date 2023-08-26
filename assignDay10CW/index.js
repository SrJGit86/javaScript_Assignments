const circle = document.getElementById("circle");
const shape = document.querySelector(".shape");
const changeClr = document.getElementById("changeClr");
const changeShp = document.getElementById("changeShp");


let colorChange = ["chocolate", "blue", "red", "orange", "yellow", "brown", "green", "grey", "wheat", "chartereuse", "blueviolet"]
let i = 0;
changeClr.addEventListener("click", () => {

    if (i === colorChange.length) {
        i = 0;
    }
    circle.style.backgroundColor = colorChange[i];
    i++;

});

let halfLeftTriangle = -1;
changeShp.addEventListener("click", () => {
    if (halfLeftTriangle === -1) {
        shape.className = "right-angle-triangle";
        halfLeftTriangle = 1;
    } else {
        shape.className = "shape";
        halfLeftTriangle = -1;
    }
});