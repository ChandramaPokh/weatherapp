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
//   cityName.textContent= "Kathmandu, Nepal"

function getCountry(p){

    return new Intl.DisplayNames([p], { type: "region" }).of(p);

}


const getWeatherdata = async ()=>{
     let city =  "kathmandu"

    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21e5c164bd740e911e96b5054f1fa9de&units=metric`;
    
    try {

        
        const response = await fetch(url);
        const  data =  await response.json();
        console.log(data);
       const {main,sys,weather, wind, name,dt}= data;
       cityName.innerHTML = `${name}, ${getCountry(sys.country)} `;


    } catch (error) {
        console.log(error);
        // https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=21e5c164bd740e911e96b5054f1fa9de&units=metric
    }

}
document.body.addEventListener('load',getWeatherdata())