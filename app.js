const cookieButton = document.getElementById('cookie-button');
const cookieDisplay = document.querySelector('.cookie-display');

let cookieCount = 0;

// Function to handle button clicks
function handleButtonClick() {
    cookieCount += 1; // Increment cookie count

    // Check if cookie count exceeds 100
    if (cookieCount > 100) {
        cookieDisplay.textContent = 'Good job on clicking 100 times! your next click will reset the counter.'; // Display message
        cookieCount = 0; // Reset the count
    } else {
        cookieDisplay.textContent = cookieCount; // Display the count
    }
}

cookieButton.addEventListener('click', handleButtonClick);



