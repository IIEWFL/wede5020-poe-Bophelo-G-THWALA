// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const thankYou = document.getElementById('ThankYouMsg');

thankYou.textContent = "Thanks for Registering to our Event " + getQueryParam('name') + " " + getQueryParam('surname') + "!";

// Set received data into HTML
document.getElementById('receiveName').textContent = "Name: " + getQueryParam('name');
document.getElementById('receiveSurname').textContent = "Surname: " + getQueryParam('surname');
document.getElementById('receiveEmail').textContent = "Email: " + getQueryParam('email');
document.getElementById('receiveAge').textContent = "Age: " + getQueryParam('age');
document.getElementById('receivePhoneNumber').textContent = "Phone Number: " + getQueryParam('phone');
document.getElementById('receiveEventType').textContent = "Event: " + getQueryParam('event');
