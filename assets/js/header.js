document.querySelector("header").innerHTML = 

`<h1>Amy & Neil</h1>



<div id="april">
<p>April</p>
</div>

<div id="wedding-day">

<p id="day-of-week">Friday</p>
<p id="day-of-month">25</p>
<p id="year">2025</p>


</div>

</div>`



document.getElementById("myTopnav").innerHTML = 

`
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
</a>
<a href= "index.html" class="active">Home</a>
<a href="rsvp.html">RSVP</a>
<a href="schedule.html">Schedule</a>
<a href="q-and-a.html">Q & A</a>
<a href="amy-and-neil.html">Amy & Neil</a>
`


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }