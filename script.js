document.addEventListener('DOMContentLoaded', () => {
    const day = new Date().getDay();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear().toString().slice(-2); // Get last two digits of the year
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    switch (day) {
        case 0: var dayName = 'SUNDAY'; break;
        case 1: var dayName = 'MONDAY'; break;
        case 2: var dayName = 'TUESDAY'; break;
        case 3: var dayName = 'WEDNESDAY'; break;
        case 4: var dayName = 'THURSDAY'; break;
        case 5: var dayName = 'FRIDAY'; break;
        case 6: var dayName = 'SATURDAY'; break;
    }

    var monthNumber = (month + 1).toString().padStart(2, '0');

    document.querySelector('.data-day').innerHTML = `${dayName}`;
    document.querySelector('.data-date').innerHTML = `${date} / ${monthNumber} / ${year}`;
    document.querySelector('.data-time').innerHTML = time;
    const greeting = document.querySelector('.small-heading');

    if(time>= '08:00' && time < '12:00') {
        greeting.innerHTML = 'Good Morning!';
    }    
    else if(time >= '12:00' && time < '18:00') {
        greeting.innerHTML = 'Good Afternoon!';
    } else if (time >= '18:00' && time < '01:00') {
        greeting.innerHTML = 'Good Evening!';
    }
    else {
        greeting.innerHTML = 'Good Night!';
    }
});