let totalChar = document.getElementById("total_char");
let textArea = document.getElementById("text_area");
let remainChar = document.getElementById("remain_char");

textArea.addEventListener("keyup", () => {
    totalChar.innerText = textArea.value.length;
    remainChar.innerText = textArea.getAttribute("maxlength") - textArea.value.length;
});