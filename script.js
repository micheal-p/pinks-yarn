// Digital Clock Functionality
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'
    hours = hours.toString().padStart(2, '0');
    
    clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navbar = document.getElementById('navbar');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
