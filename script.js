const Searched = document.querySelector(".Searched");
const cityName = document.querySelector(".cityName");
const dateandtime= document.querySelector(".dateandtime");
const weatherforecast = document.querySelector(".weatherforecast");
// const weatherforecast = document.querySelector(".weatherforecast");
const weathericon = document.querySelector(".weathericon");
const mintemp = document.querySelector(".mintemp");
const maxtemp = document.querySelector(".maxtemp");
const feelslike_data = document.querySelector(".feelslike_data");
const humidity_data = document.querySelector(".humidity_data");
const wind_data = document.querySelector(".wind_data");
const pressure_data = document.querySelector(".pressure_data");
const container = document.querySelector(".container");
const weathertemperature = document.querySelector(".weathertemperature");
const citysearch = document.querySelector(".citysearch");
 
citysearch.addEventListener("submit",(e)=>{
    e.preventDefault();
    city = Searched.value;
    getWeatherdata();
   
})


function getCountry(p){

    return new Intl.DisplayNames([p], { type: "region" }).of(p);

}
 
function getDateandTime(dt){
     const newdate = new Date(dt*1000)
     const options= {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};
       const formatted = new Intl.DateTimeFormat("en-US",options);
       return formatted.format(newdate);

}

let city =  "kathmandu"
const getWeatherdata = async ()=>{

    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21e5c164bd740e911e96b5054f1fa9de&units=metric`;
    
    try {
        
        const response = await fetch(url);
        const  data =  await response.json();

       if (data.cod != 200) {
    cityName.textContent = "City not found";
    weatherforecast.style.display = "none";
    weathericon.innerHTML = "";
    weathertemperature.textContent = "--";
    feelslike_data.textContent="";
    humidity_data.textContent="";
    pressure_data.textContent="";
    wind_data.textContent="";
    mintemp.textContent="Min : ";
    maxtemp.textContent=" Max : "
    return;
}
        
        console.log(data);
        const {main,sys,weather, wind, name,dt, cod, message}= data;
        cityName.innerHTML = `${name}, ${getCountry(sys.country)} `;
         dateandtime.innerHTML = getDateandTime(dt);
         weatherforecast.innerHTML =weather[0].main;
         weathericon.innerHTML = `<img src ="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`
         weathertemperature.textContent = `${Math.round(main.temp)}°C`;
         maxtemp.textContent = `Max : ${main.temp_max.toFixed()}°C`;
         mintemp.textContent =`Min : ${main.temp_min.toFixed()}°C`;
         feelslike_data.textContent = `${main.feels_like.toFixed()}°C`;
         humidity_data.textContent =`${main.humidity}%`;
         wind_data.textContent =`${wind.speed}m/s`;
         pressure_data.textContent =`${main.pressure}hPa`;
          Searched.value="";
          


    } catch (error) {
        console.log(error);
        // https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=21e5c164bd740e911e96b5054f1fa9de&units=metric
    }

}
document.body.addEventListener('load',getWeatherdata())

