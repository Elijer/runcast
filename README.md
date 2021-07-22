# Run Inventivizer

# Using Parcel.js
Parcel.js is an awesome js bundling tool and local development server. All you need to know is that, from the home directory of this project, run `parcel index.html' and it will serve up the project on a port that is also specified in the terminal. Note that parcel serves hot reloads, so you shouldn't need to refresh the page to see your changes reflected. Nothing is perfect though...sometimes a hard reload doesn't hurt.

# Using NGROK to locally test on mobile
Download ngrok [here](https://ngrok.com/download), or maybe you can get it on a version manager. I just downloaded it, unzipped the file in my file explorer, and moved it to my home directory for easy use. You should also make an account on ngrok's website to unlock faster usage apparently -- they give you a command with your specific account token embedded in it. Run that command.

THEN just run `./ngrok http {{your current parcel.js port here}}`. This will open an ngrok dashboard in your terminal, showing you a URL that ngrok created that exposes your local server on the internet. It's gonna be a gnarly mess of numbers and letters, so just pop it in fb messenger or something, open it up on your phone, and voila! You now have the same local server running on your phone! No hot reload here -- you have to refresh your phone, but it's still pretty smoove.

KEEP IN MIND. When you run the ngrok command in the terminal, it will give you several URLs to use. There are TWO called "forwarding". The first is an http site the other is https. That's with an S at the end. Use this one for this project, not the plain http one -- the geolocation API requires HTTPS because it doesn't want to ask for your geolocation data in a non-secure exchange of information.