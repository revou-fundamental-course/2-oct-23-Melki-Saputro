function reverse() {
    var x = document.getElementById("celsius");
    if (document.getElementById("celsius")) {
        document.getElementById("celsius").innerHTML = "Fahrenheit";
        document.getElementById("celsius").setAttribute("id", "fahrenheit");
        document.getElementById("resultlabel").innerHTML = "Celsius";
        document.getElementById("rinput").setAttribute("onclick", "convertToCelsius()");
        document.getElementById("datainput").value = "";
        document.getElementById("result").value = "";
    }
    else {
        document.getElementById("resultlabel").innerHTML = "Fahrenheit";
        document.getElementById("fahrenheit").innerHTML = "Celsius";
        document.getElementById("rinput").setAttribute("onclick", "convertToFahrenheit()");
        document.getElementById("fahrenheit").setAttribute("id", "celsius");
        document.getElementById("datainput").value = "";
        document.getElementById("result").value = "";
    }
}
function reset() {
    document.getElementById("datainput").value = "";
    document.getElementById("result").value = "";
}
function convertToFahrenheit() {
    let celsius = document.getElementById("datainput").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").value = fahrenheit + "°F";
}
function convertToCelsius() {
    let fahrenheit = document.getElementById("datainput").value;
    let celsius = (fahrenheit - 32) / (9 / 5);
    document.getElementById("result").value = celsius + "°C";
}