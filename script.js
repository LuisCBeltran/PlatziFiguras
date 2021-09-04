// Circle Functions

var calculatePerimeterCircle = function (radius) {
    return radius * 2 * Math.PI;
}

var calculateAreaCircle = function (radius) {
    return Math.PI * radius * radius;
}

function perimeterCircle() {
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const perimeter = calculatePerimeterCircle(value);
    document.getElementById("circleAnswer").innerHTML = perimeter.toFixed(1);
}

function areaCircle() {
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const area = calculateAreaCircle(value);
    document.getElementById("circleAnswer").innerHTML = area.toFixed(1);
}


// Square Functions

var calculatePerimeterSquare = function (side) {
    return side * 4;
}

var calculateAreaSquare = function (side) {
    return side * side;
}

function perimeterSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const perimeter = calculatePerimeterSquare(value);
    document.getElementById("squareAnswer").innerHTML = perimeter.toFixed(1);
}

function areaSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const area = calculateAreaSquare(value);
    document.getElementById("squareAnswer").innerHTML = area.toFixed(1);
}


// Triangle Functions

var calculateAreaTriangle = function(sideA, sideB) {
    return (sideA * sideB) / 2;
}

function areaTriangle() {
    const input1 = document.getElementById("inputTriangle1");
    const input2 = document.getElementById("inputTriangle2");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const area = calculateAreaTriangle(value1, value2);
    document.getElementById("triangleAnswer").innerHTML = area.toFixed(1);
}