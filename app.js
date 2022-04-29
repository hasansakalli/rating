var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var submit = document.getElementById("submit");
var result = document.getElementById("result");
var kullaniciSecimi;

var container = document.querySelector(".container");
var thankwrapper = document.querySelector(".thankwrapper");
var liElement = document.querySelectorAll("liElement");

function select(item) {
   kullaniciSecimi = item.getAttribute("data");

    if (kullaniciSecimi == "1") {
        one.style.backgroundColor = "#D9CFD9";
    } else {
        one.style.backgroundColor = "#28303A";
    }
    if (kullaniciSecimi == "2") {
        two.style.backgroundColor = "#D9CFD9";
    } else {
        two.style.backgroundColor = "#28303A";
    }
    if (kullaniciSecimi == "3") {
        three.style.backgroundColor = "#D9CFD9";
    } else {
        three.style.backgroundColor = "#28303A";
    }
    if (kullaniciSecimi == "4") {
        four.style.backgroundColor = "#D9CFD9";
    } else {
        four.style.backgroundColor = "#28303A";
    }
    if (kullaniciSecimi == "5") {
        five.style.backgroundColor = "#D9CFD9";
    } else {
        five.style.backgroundColor = "#28303A";
    }

}
function send() {
    container.style.display = "none";
    thankwrapper.style.display = "block";

    result.innerHTML = "You selected " + kullaniciSecimi + " out of 5";
}
