//import {setDeviceMotion} from './deviceMotion'
//import {geolocation} from './geolocation'

document.addEventListener("DOMContentLoaded", event => {
  //setDeviceMotion();
  document.getElementById("speed").innerHTML = "LOADING";
  geolocation();
})

function geolocation(){

  if('geolocation' in navigator) {
      console.log("geolocation is available")
      useLocation();
    } else {
      console.log("geolocation IS NOT available")
    }
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 1000,
  timeout: 5000
};



function useLocation(){
  navigator.geolocation.watchPosition((position) => {
      doSomething(position.coords.latitude, position.coords.longitude, position.coords);
    }, showError, options);
}

function showError(e){
  console.log("error: ", e)
}

function doSomething(x, y, coords){
  var d = new Date();
  var n = d.getSeconds();
  console.log(x, y, n);
  console.log(n, coords.speed)
  var speedConverted = mpsToMph(coords.speed);
  var speedRounded = digiter(speedConverted, 1);
  document.getElementById("speed").innerHTML = speedRounded + " mph";
}

function digiter(num, digits){
  var exp = 10 ** digits
  var output = (Math.floor(num*exp)/exp)
  return output;
  // number you want to cut off, then the number of digits AFTER decimal you want
}

function mpsToMph(m){
  // converts metersPerSecond to miles per hour
  var feetPerMeter = 3.28084;
  var feetPerMile = 5280;
  var output;

  output = (m * feetPerMeter)/feetPerMile*60*60;
  return output;
}