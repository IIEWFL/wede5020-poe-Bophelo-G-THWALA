// Calendar
document.addEventListener('DOMContentLoaded', function() {
    // Months stored in an Array
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    
    // Step 1: Initilized and declared month, year, day variables to get the current date. 
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

     // Step 2: Create a function to manage the calendar. 
    function generateCalendar(month, year) {
        //Initialize variables for the functionality of the calendar 
        const calendarBody = document.getElementById("calendar-body");
        calendarBody.innerHTML = "";
        document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            
            // Iterate through 7 days of the week
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                // Handle empty cells for days before the 1st and after the last day of the month
                if (i === 0 && j < firstDay) {
                    cell.classList.add("empty");
                    cell.textContent = "";
                } else if (date > daysInMonth) {
                    cell.classList.add("empty");
                    cell.textContent = "";
                } else {
                    cell.textContent = date;

                    // Highlight today's date
                    if (date === todayDate && month === todayMonth && year === todayYear) {
                        cell.classList.add("current-day");
                    }
                    date++;
                }

                row.appendChild(cell);
            }
            
            // Stop once we've filled all the days
            calendarBody.appendChild(row);
            if (date > daysInMonth) break;
        }
    }

    window.changeMonth = function(direction) {
        currentMonth += direction;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }

    generateCalendar(currentMonth, currentYear);


    // Donate Form
    const amount = document.getElementById('amount');
    const otherAmount = document.getElementById('OtherAmount');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    amount.addEventListener("change", () => {
        if (amount.value === "other") {
            otherAmount.style.display = "block";
            otherAmount.required = true;
        } else {
            otherAmount.style.display = "none";
            otherAmount.required = false;
        }
    });

    window.submitForm = function() {
        const donationAmount = amount.value === "other" ? otherAmount.value.trim() : amount.value;
        if (!name.value.trim() || !email.value.trim() || amount.value === "Select Amount" || (amount.value === "other" && !otherAmount.value.trim())) {
            alert("Please fill in all required fields.");
            return;
        }
        const url = `Thanks for Donating.html?name=${encodeURIComponent(name.value.trim())}&email=${encodeURIComponent(email.value.trim())}&amount=${encodeURIComponent(donationAmount)}&message=${encodeURIComponent(message.value.trim())}`;
        window.location.href = url;
    }
});
