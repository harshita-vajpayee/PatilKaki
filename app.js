// Function to start the countdown
function startCountdown(duration, displayMinutes, displaySeconds) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // Calculate the time difference between now and start time
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // Convert time difference into minutes and seconds
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        // Format minutes and seconds to have at least two digits
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Display minutes and seconds in their respective elements
        displayMinutes.textContent = minutes;
        displaySeconds.textContent = seconds;

        if (diff <= 0) {
            // When countdown reaches zero, stop the timer
            clearInterval(timerInterval);
            alert("Countdown finished!");
        }
    };

    // Immediately run the timer function and then set it to run every 1000ms (1 second)
    timer();
    var timerInterval = setInterval(timer, 1000);
}

window.onload = function() {
    var twentyMinutes = 60 * 20, // 20 minutes in seconds
        displayMinutes = document.querySelector('#minutes'),
        displaySeconds = document.querySelector('#seconds'),
        displayMinutes2 = document.querySelector('#minutes2'),
        displaySeconds2 = document.querySelector('#seconds2');
    startCountdown(twentyMinutes, displayMinutes, displaySeconds);
    startCountdown(twentyMinutes, displayMinutes2, displaySeconds2);
};