//import {setDeviceMotion} from './deviceMotion'
import {geolocation} from './geolocation'

document.addEventListener("DOMContentLoaded", event => {
  //setDeviceMotion();
  document.getElementById("speed").innerHTML = "LOADING";
  
  geolocation();
})