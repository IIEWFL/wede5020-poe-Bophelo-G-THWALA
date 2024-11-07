// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const thankYou = document.getElementById('ThankYouMsg');

thankYou.textContent = "Thanks For Donating " + getQueryParam('name') + "!";

// Set received data into HTML and display dorm details
document.getElementById('receiveName').textContent = "Name: " + getQueryParam('name');
document.getElementById('receiveEmail').textContent = "Email: " + getQueryParam('email');
document.getElementById('receiveAmount').textContent = "Amount Donated: R" + getQueryParam('amount');
document.getElementById('receiveMessage').textContent = "Message: " + getQueryParam('message');
