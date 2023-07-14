const day =  Date();
let strDay = day.split(" ");

let month = strDay[1];
let ngay = strDay[2];
let gio = strDay[4];
function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
let hour =  tConvert(gio);   

let weather = {
    apiKey: "062d92a2646152d39eb7845a608226cb",   
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&lang=vi&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Không có địa điểm");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data)  {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity, feels_like, pressure } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        const  visibility  = data.visibility;
        const {all} = data.clouds;
        
        
        
        document.querySelector(".city").innerText = name + " , " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = "Feels like" + " " + feels_like + "°C," + " " + description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText ="Humidity:" + " " + humidity + "%";
        document.querySelector(".wind").innerText = speed + " m/s WNW";
        document.querySelector(".pressure").innerText = pressure + "hPa";
        document.querySelector(".visibility").innerText ="Visibility:" + " " + visibility / 1000 + "km";
        document.querySelector(".all").innerText = "Độ phủ mây:" + " " + all + "%";
        document.querySelector(".dt").innerHTML = month + " " + ngay + "," + " " + hour;
    },
    search: function () {
        this.fetchWeather(document.querySelector(".seach_temp").value);
      },
};
document.querySelector(".button_search").addEventListener("click", function () {
    weather.search();
});
document
  .querySelector(".seach_temp")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("ha noi");
