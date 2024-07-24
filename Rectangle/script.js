// Function to calculate the perimeter of a rectangle
function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return `The perimeter is ${perimeter}.`;
}

// Function to calculate the area of a rectangle
function calcArea(length, width) {
    const area = length * width;
    return `The area is ${area}.`;
}

// Function to display results on the screen
function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('p');
    resultElement.textContent = message;
    resultsDiv.appendChild(resultElement);
}

// Handle form submission
document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    const perimeterResult = calcPerimeter(length, width);
    const areaResult = calcArea(length, width);

    displayResult(perimeterResult);
    displayResult(areaResult);
});
