// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const thankYou = document.getElementById('ThankYouMsg');

thankYou.textContent = "Thanks for Contacting Us" + getQueryParam('name') + "!";

// Set received data into HTML
document.getElementById('receiveName').textContent = "Name: " + getQueryParam('name');
document.getElementById('receiveEmail').textContent = "Email: " + getQueryParam('email');
document.getElementById('receivePhoneNumber').textContent = "Phone Number: " + getQueryParam('phone');
