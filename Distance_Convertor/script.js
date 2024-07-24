// Function to convert meters to feet
function metersToFeet(meters) {
    const feet = meters * 3.281;
    return `${meters} meters is equal to ${feet.toFixed(2)} feet.`;
}

// Function to convert feet to meters
function feetToMeters(feet) {
    const meters = feet * 0.3048;
    return `${feet} feet is equal to ${meters.toFixed(2)} meters.`;
}

// Function to display results on the screen
function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('p');
    resultElement.textContent = message;
    resultsDiv.appendChild(resultElement);
}

// Handle form submission
document.getElementById('distanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const distance = parseFloat(document.getElementById('distance').value);
    const unit = document.getElementById('unit').value;

    let result;
    if (unit === 'meters') {
        result = metersToFeet(distance);
    } else {
        result = feetToMeters(distance);
    }

    displayResult(result);
});
