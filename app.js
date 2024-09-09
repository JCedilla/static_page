const cookieButton = document.getElementById('cookie-button');
const resetButton = document.getElementById('reset-button');
const cookieDisplay = document.querySelector('.cookie-display');
let cookieCount = 0;

// Function to handle button clicks
cookieButton.onclick = function(){
    cookieCount++; // Increment cookie count
    cookieDisplay.textContent = cookieCount; 
}

resetButton.onclick = function(){
    cookieCount = 0;
    cookieDisplay.textContent = 0;
}





