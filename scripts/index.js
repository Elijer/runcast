document.addEventListener("DOMContentLoaded", event => {

  var geoSpan = document.getElementById("geolocationAvailability");

  if('geolocation' in navigator) {
    geoSpan.innerHTML = "yes"
    console.log("geolocation is available ")
  } else {
    geoSpan.innerHTML = "no"
    console.log("geolocation IS NOT available")
  }

  var speed = 0.00;
  var speedLog = [];
  var av = 0;
  var total = 0;

  setInterval(function(){
    
  }, 1000)
  
  window.addEventListener('devicemotion', function(event) {
    speed = parseFloat((speed + event.acceleration.x).toFixed(2));
    //document.getElementById("tracker").innerHTML = speed;
    //console.log(speed)
    speedLog.append(speed)
  });

})

function displaySpeed(s){
  document.getElementById("tracker").innerHTML = s
}