const clr = document.getElementById("color");
const bg = document.getElementById("background_color");
const padding = document.getElementById("padding");
const fontSize = document.getElementById("font_size");
const fontWeight = document.getElementById("font_weight");
const target = document.getElementById("target_div");

clr.addEventListener('change', () => {
    target.style.color = clr.value;
});

bg.addEventListener('change', () => {
    target.style.backgroundColor = bg.value;
});

padding.addEventListener('change', () => {
    target.style.padding = padding.value;
});

fontSize.addEventListener('change', () => {
    target.style.fontSize = fontSize.value;
});

fontWeight.addEventListener('change', () => {
    target.style.fontWeight = fontWeight.value;
});