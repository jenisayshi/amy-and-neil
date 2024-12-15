// Set the date we're counting down to
var countDownDate = new Date("Apr 25, 2025 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown-text").innerHTML = days + " days<br> "  + hours + " hours "
  

  document.getElementById("countdown-placeholder").style.display = "none";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerHTML = "Congratulations to Amy and Neil!";
  }
}, 1000);



