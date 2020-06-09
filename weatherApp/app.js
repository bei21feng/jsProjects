window.addEventListener('load',()=>{
   let long;
   let lat;
   let temperatureDescription = document.querySelector('.temperature-description');
   let temperatureDegree = document.querySelector('.temperature-degree');
   let locationTimezone  = document.querySelector('.location-timezone');
   let temperatureSection = document.querySelector('.temperature');

   const temperatureSpan = document.querySelector('.temperature span');

   if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            //const api = `${proxy}https://api.weather.gov/points/${lat},${long}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    //console.log(data);
                    const {temperature, summary, icon} = data.currently;

                    //set the DOM elements from the api
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                    //forumula fo celsius
                    let celsius = (temperature - 32)*(5 / 9);

                    setIcons(icon, document.querySelector('.icon'));

                    //change temperature to celsius/Farenheit
                    temperatureSection.addEventListener('click', () =>{
                       if(temperatureSpan.textContent === "F"){
                           temperatureSpan.textContent = "C";
                           temperatureDegree.textContent = Math.floor(celsius);
                       }else {
                           temperatureSpan.textContent = "F";
                           temperatureDegree.textContent = temperature;
                       }
                    });
                });
        });
   }else {
       h1.textContent = "hi, this is not working"
   }

   function setIcons(icon, iconID) {
        const skycons = new Skycons({color : "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
       skycons.set(iconID, Skycons[currentIcon]);
   }
});