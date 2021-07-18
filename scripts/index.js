document.addEventListener("DOMContentLoaded", event => {
  setDeviceMotion();
})

function setDeviceMotion(){
    var speed = 0.00;

    window.addEventListener('devicemotion', function(event) {
      speed = parseFloat((speed + event.acceleration.x).toFixed(2));
      document.getElementById("tracker").innerHTML = speed;
    });

}