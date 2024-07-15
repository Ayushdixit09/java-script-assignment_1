function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter of the triangle
    const s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Given triangle sides
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate the area of the triangle
const area = calculateTriangleArea(side1, side2, side3);

// Print the result
console.log("Area of the triangle with sides 5, 6, 7 is: " + area);
