var tipLabel = document.getElementById("tipAmmount")
tipLabel.style.display = "none";
var calculatbtn = document.getElementById("calculate_btn");
calculatbtn.addEventListener('click', () => {
    var bill = document.getElementById("billAmmount").value;
    var serviceTip = document.getElementById("serviceTip").value;
    var peoples = document.getElementById("persons").value;
    document.getElementById("totalAmmount").value = " RS " + (bill * serviceTip) / peoples + " !";
    tipLabel.style.display = "inline";
})