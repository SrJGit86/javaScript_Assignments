const textarea = document.getElementById("text_area");
const btn = document.getElementById("add_btn");
const paragraph = document.getElementById("para");

btn.addEventListener('click', () => {
    const currentText = textarea.value;
    const currentPara = document.createElement("p");
    currentPara.textContent = currentText;
    paragraph.appendChild(currentPara);
    textarea = "";
});