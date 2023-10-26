//definitions
let curCity= "Nairobi";
let units= "metric";

//Get HTML elements using selectors
let city= document.querySelector(".weather_city");
let datetime= document.querySelector(".weather_datetime");
let weather_forecast= document.querySelector(".weather_forecast");
let weather_temperature= document.querySelector(".weather_temperature");
let weather_icon= document.querySelector(".weather_icon");
let weather_minmax= document.querySelector(".weather_minmax");
let weather_realfeel= document.querySelector(".weather_realfeel");
let weather_humidity= document.querySelector(".weather_humidity");
let weather_wind= document.querySelector(".weather_wind");
let weather_pressure= document.querySelector(".weather_pressure");

//search
document.querySelector(".weather_search").addEventListener('submit', e=>{
    let search =document.querySelector(".weather_searchform");
    //prevent default reload
    e.preventDefault();
    //change current city
    curCity= search.value;
    //get weather forecast
    getWeather();
    //clear form
    search.value = ""
})

//convert units
document.querySelector(".weather_unit_celcius").addEventListener('click', ()=>{
    if(units!=="metric"){
        //change to metric
        units ="metric"
        //get weather forecast
        getWeather()
    }
})

document.querySelector(".weather_unit_farenheit").addEventListener('click', ()=>{
    if(units!=="imperial"){
        //change to imperial
        units ="imperial"
        //get weather forecast
        getWeather()
    }
})

function convertTimeStamp(timestamp,timezone){
    const convertTimeZone = timezone /3600; //to change the seconds into hours
    const date = new Date(timestamp*1000);
    const options = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        hour:"numeric",
        minute:"numeric",
        timezone:`Etc/GMT${convertTimeZone>=0?"-":"+"}${Math.abs(convertTimeZone)}`,
        hour12:true,
    }
    return date.toLocaleString("en-US", options)
}

//Convert country code to full name
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"],{type:"region"});
    return regionNames.of(country)
}

