//Contact Details form logic
window.submitForm = function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('PhoneNumber').value.trim();
    
    // Validate all required fields
    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return; // Stop form submission if validation fails
    }

    // Redirect to thank you page with form data in the URL
    const url = `Thanks for Contacting.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;
    window.location.href = url;
};
