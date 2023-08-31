var calculatbtn = document.getElementById("calculate_btn");
var tipLabel = document.getElementById("tipAmmount");
tipLabel.style.display = "none";
calculatbtn.addEventListener("click", () => {
    var bill = document.getElementById("billAmmount").value;
    let serviceTip = document.getElementById("serviceTip").value;
    var peoples = document.getElementById("persons").value;
    var tipPerPerson = document.getElementById("totalAmmount").value;
    tipPerPerson = "Rs" + (bill * serviceTip) / peoples;
    tipLabel.style.display = "inline";
});
