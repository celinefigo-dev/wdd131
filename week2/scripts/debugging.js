const radiusOutput = document.getElementById("radius");
const areaOutput = document.getElementById("area");

const PI = 3.14159;

function calculateArea(radius) {
    return PI * radius * radius;
}

// Initial radius
let radius = 10;
let area = calculateArea(radius);

radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Update radius
radius = 20;
area = calculateArea(radius);

radiusOutput.textContent = radius;
areaOutput.textContent = area;
