// Function to calculate pet age
function calculatePetAge(petAge, conversionRate = 7) {
    const petAgeInHumanYears = petAge * conversionRate;
    return petAgeInHumanYears;
}

// Function to display results on the screen
function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('p');
    resultElement.textContent = message;
    resultsDiv.appendChild(resultElement);
}

// Handle form submission
document.getElementById('petAgeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const petAge = parseFloat(document.getElementById('petAge').value);
    const conversionRate = parseFloat(document.getElementById('conversionRate').value) || 7;

    const petAgeInHumanYears = calculatePetAge(petAge, conversionRate);
    displayResult(`Your pet is ${petAgeInHumanYears} years old in human years!`);
});
