const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const sessionElement = document.getElementById('session');
const toggleButton = document.getElementById('toggle-btn');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let twentyFourHourFormat = true;

function updateClock() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const dayOfWeek = daysOfWeek[now.getDay()];
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const session = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    
    dateElement.textContent = `${month} ${day}, ${year}`;
    dayElement.textContent = dayOfWeek;
    
    if (twentyFourHourFormat) {
        hoursElement.textContent = hours.toString().padStart(2, '0');
        sessionElement.textContent = '';
        toggleButton.textContent = '12-hr';
    } else {
        hoursElement.textContent = twelveHourFormat.toString().padStart(2, '0');
        sessionElement.textContent = session;
        toggleButton.textContent = '24-hr';
    }
    
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

updateClock();
setInterval(updateClock, 1000);

toggleButton.addEventListener('click', () => {
    twentyFourHourFormat = !twentyFourHourFormat;
});

toggleButton.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'pointer';
});

toggleButton.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
});
