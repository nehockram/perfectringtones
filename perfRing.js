var total = 0;
var display;

function addToCart() {
    "use strict";
    var ringtoneName = "ringtone";
    var howMany = 1;

    document
    total = total + howMany;
    display = document.getElementById("display-amount");

    ringtoneName = document.getElementById("pr").innerHTML;

    console.log("You added " + howMany + " " + ringtoneName + " ringtone for a total of " + total);

    display.innerHTML = total + " items in cart";
}
