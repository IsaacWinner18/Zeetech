document.addEventListener("DOMContentLoaded", function() {
    const personName = localStorage.getItem('personName');
    const notificationElement = document.querySelector('.showPerson');
    if (personName) {
        notificationElement.textContent = ` ${personName}!`;
    } else {
        notificationElement.textContent = "No name stored in localStorage.";
    }
});


const countdownElement = document.getElementById('countdown');
    
    let countdownTime = 5;

    function updateCountdown() {
        countdownElement.textContent = `00.0${countdownTime}`;
        countdownTime--;

       
        if (countdownTime < 1) {
            window.location.href = "index.html";
        }
    }

    updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);