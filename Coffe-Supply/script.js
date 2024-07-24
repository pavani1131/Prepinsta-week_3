// Function to calculate coffee supply
function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 100;
    const yearsLeft = maxAge - age;
    const totalCups = Math.round(yearsLeft * 365 * cupsPerDay);
    return `You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`;
}

// Function to display results on the screen
function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('p');
    resultElement.textContent = message;
    resultsDiv.appendChild(resultElement);
}

// Handle form submission
document.getElementById('coffeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const age = parseFloat(document.getElementById('age').value);
    const cupsPerDay = parseFloat(document.getElementById('cupsPerDay').value);

    const result = calculateCoffeeSupply(age, cupsPerDay);
    displayResult(result);
});
