document.querySelector('#copyright').textContent = new Date().getFullYear();


// Set the date we're counting down to
var countDownDate = new Date("Jul 17, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    // Output the result in an element with id="demo"
    document.getElementById("the-countdown").innerHTML = days + " DAYS TO DEPARTURE!";
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("the-countdown").innerHTML = "<img src='images/mushroom.png'>";
    }
}, 1000);