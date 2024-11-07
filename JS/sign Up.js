//Sign Up for events form
window.submitForm = function() {
    // Form field elements
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('PhoneNumber').value.trim();
    
    // Get selected event radio button value
    const selectedEvent = document.querySelector('input[name="event"]:checked');

    // Validate all required fields
    if (!name || !surname || !email || !age || !phone || !selectedEvent) {
        alert("Please fill in all required fields.");
        return; // Stop form submission if validation fails
    }

    // Redirect to thank you page with form data in the URL
    const url = `Thanks for Registering.html?name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}&email=${encodeURIComponent(email)}&age=${encodeURIComponent(age)}&phone=${encodeURIComponent(phone)}&event=${encodeURIComponent(selectedEvent.value)}`;
    window.location.href = url;
};
