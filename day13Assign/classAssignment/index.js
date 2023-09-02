const btn = document.getElementById("catchMe");

btn.addEventListener("mouseover", () => {
    const top = Math.floor(Math.random() * 580);
    const left = Math.floor(Math.random() * 1300);

    btn.style.top = top + "px";
    btn.style.left = left + "px";
});