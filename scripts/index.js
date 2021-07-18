import {setDeviceMotion} from './deviceMotion'
import {geolocation} from './geolocation'

document.addEventListener("DOMContentLoaded", event => {
  setDeviceMotion();
  geolocation();
})