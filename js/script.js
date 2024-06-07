let text = "Outside : " + typeof carName;
document.getElementById("demo").innerHTML = text;

function myFunction() {
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName;
}

document.getElementById("demoone").innerHTML = text