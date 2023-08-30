document.addEventListener("keydown", (e) => {
    const key_name = e.key;
    const key_num = e.keyCode;

    document.getElementById("key").innerText = key_name;


    document.getElementById("key_number").innerText = key_num;


});