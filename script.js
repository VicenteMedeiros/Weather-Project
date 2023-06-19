window.addEventListener('load', () => {
   let long;
   let lat;
   let temperatureDescription = document.querySelector('.temperature-description');
   let temperatureDegree = document.querySelector('.temperature-degree');
   let locationTimezone = document.querySelector('.location-timezone');
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
       
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const api = `${proxy}https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid={8b2b2bfa6f231df64e9dfc612d84f96f}`;
   
       

       fetch(api)
       .then(response =>{
        return response.json();
       })
       .then(data =>{
        console.log(data);
       });
   
    });
   }
});