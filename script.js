// Countdown to the next stream
const countdown = () => {
    const countDate = new Date("Dec 25, 2024 18:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (gap < 0) {
        document.getElementById('countdown-timer').innerHTML = "The stream is live!";
    }
};

setInterval(countdown, 1000);