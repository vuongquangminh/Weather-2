function currentDay() {
  //set up ngày bắt đầu và ngày kết thúc (dự báo trong 1 tuần)
  const a = new Date();
  const year = a.getFullYear();
  let month = a.getMonth();
  month = month.toString().padStart(2, "0");
  let day = a.getDate();
  day = day.toString().padStart(2, "0");
  const start = `${year}-${month}-${day}`;
  day = a.getDate() + 6;
  day = day.toString().padStart(2, "0");
  const end = `${year}-${month}-${day}`;

  // get api

  let lon = 105.8412;
  let lat = 21.0245;

  const check = document.querySelector(".Minh_check");

  check.onclick = () => {
    const value_input = document.querySelector("#Minh_Left input").value;
    // Value input
    const getL = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${value_input}&lang=vi&units=metric&appid=062d92a2646152d39eb7845a608226cb`
        );
        const data = await response.json();
        lon = data.coord.lon;
        lat = data.coord.lat;
            console.log(data)
        const nameCity = document.querySelector('.Minh_name')
        const temp = document.querySelector('#Minh_temp .Minh_temp')
        temp.innerHTML = `${Math.floor(data.main.temp)}°C`
        nameCity.innerHTML = data.name

        const img_icon = document.querySelector('#Minh_Left .Minh_icon')
        img_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        const feel = document.querySelector('#Minh_Left .Minh_feel')
        feel.innerHTML = `Feels like ${data.main.feels_like}°C ${data.weather[0].main}. ${data.weather[0].description}`

        const speed = document.querySelector('#Minh_Left .Minh_speed')
        speed.innerHTML = `${data.wind.speed}m/s SE`

        const Pa = document.querySelector('#Minh_Left .Pa')
        Pa.innerHTML = `${data.main.pressure}hPa`

        const humidity = document.querySelector('#Minh_Left .Minh_humidity')
        humidity.innerHTML = `${data.main.humidity}%`

        const visible = document.querySelector('#Minh_Left .Minh_visible')
        visible.innerHTML = `${data.visibility/1000}km`

      } catch (error) {
        console.log("ban da nhap sai");
      }
    };
    const Minh_listItem = document.querySelector('.Minh_listItem')
    Minh_listItem.innerHTML = ''
    getL();
    getApi()
  };


  async function getApi() {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&current_weather=true&current_weather=true&timezone=auto&start_date=${start}&end_date=${end}`
    );
    const data = await response.json();
    // console.log(data);
    const Minh_list_Time = data.daily.time;
    let Minh_list_temperature_max = data.daily.temperature_2m_max;
    let Minh_list_temperature_min = data.daily.temperature_2m_min;

    const Minh_listItem = document.querySelector(".Minh_listItem");
    const time = document.querySelector("#Minh_Weather .Minh_time");
    const current_Month = a.getMonth();
    
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "August",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let currentDay = a.getDate() - 1;

    // add month + day
    Minh_list_Time.forEach((item, index) => {
      currentDay += 1;
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      Minh_listItem.innerHTML += `<div class="Minh_item"><p> ${days[index]}, ${months[current_Month]} ${currentDay}</p></div>`;
    });

    day = a.getDate();
    day = day.toString().padStart(2, "0");

    let hour = a.getHours()
    const minute = a.getMinutes().toString().padStart(2, "0");
    let hour_minute 
    if(hour.length==1) {
        hour_minute = `${hour.toString().padStart(2,'0')}:${minute}am`
    } else{
        hour_minute = `${hour}:${minute}pm`
    }


    time.innerHTML = `${months[current_Month]} ${day} ${hour_minute}`;

    // Add icon weather + temp

    const Minh_item = document.querySelectorAll(".Minh_item");
    Minh_item.forEach((item, index) => {
      const icon_Weather = [
        `<svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon"><path d="M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892" fill="#3b3c40"></path><path d="M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>`,
        `<svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon"><path d="M46.533 68.506c.762 0 1.507.07 2.24.17a18.34 18.34 0 01-.409-3.834c0-10.112 8.198-18.31 18.313-18.31 9.838 0 17.843 7.765 18.269 17.5a10.935 10.935 0 017.367-2.852c6.067 0 10.986 4.922 10.986 10.989 0 1.382-.267 2.7-.734 3.918a13.1 13.1 0 012.565-.256c7.08 0 12.818 5.74 12.818 12.817 0 7.08-5.738 12.82-12.818 12.82H46.533c-9.103 0-16.481-7.38-16.481-16.482 0-9.101 7.378-16.48 16.481-16.48" fill="#efefed"></path></svg>`,
        `<svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon"><path d="M112.411 57.87c0 11.433-9.27 20.702-20.7 20.702-11.435 0-20.702-9.27-20.702-20.702 0-11.433 9.267-20.701 20.702-20.701 11.43 0 20.7 9.268 20.7 20.701" fill="#f15d46"></path><path d="M48.874 61.244c.612 0 1.21.055 1.805.137a14.679 14.679 0 01-.332-3.087c0-8.152 6.607-14.759 14.759-14.759 7.93 0 14.38 6.26 14.725 14.104a8.81 8.81 0 015.936-2.298 8.854 8.854 0 018.854 8.856 8.772 8.772 0 01-.59 3.157 10.425 10.425 0 012.065-.207c5.707 0 10.331 4.625 10.331 10.33 0 5.706-4.624 10.331-10.33 10.331H48.873c-7.335 0-13.285-5.948-13.285-13.282s5.95-13.282 13.285-13.282" fill="#efefed"></path><path d="M83.052 95.131l.423-1.13a2.172 2.172 0 10-4.069-1.523l-.422 1.132a2.172 2.172 0 104.068 1.521M77.548 109.845l1.483-3.962a1.517 1.517 0 00-.89-1.953l-1.226-.46a1.517 1.517 0 00-1.951.89l-1.483 3.965a1.515 1.515 0 00.889 1.951l1.226.459a1.514 1.514 0 001.952-.89M68.555 100.83l1.781-4.766a1.516 1.516 0 00-.89-1.953l-1.226-.458a1.515 1.515 0 00-1.952.89l-1.781 4.765a1.516 1.516 0 00.889 1.952l1.227.46a1.517 1.517 0 001.952-.89M65.864 108.023l.272-.73a2.173 2.173 0 00-4.068-1.523l-.274.732a2.172 2.172 0 004.07 1.521M60.885 89.073l.724-1.935a2.17 2.17 0 10-4.068-1.52l-.723 1.934a2.173 2.173 0 104.068 1.52M55.884 102.45l1.781-4.763a1.517 1.517 0 00-.889-1.955l-1.227-.458a1.519 1.519 0 00-1.953.89l-1.78 4.765a1.516 1.516 0 00.89 1.952l1.224.46a1.519 1.519 0 001.954-.89" fill="#3b3c40"></path></svg>`,
        `<svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon"><path d="M121.66 68.27c0 14.186-11.5 25.687-25.687 25.687-14.187 0-25.687-11.5-25.687-25.688 0-14.186 11.5-25.687 25.687-25.687 14.187 0 25.688 11.5 25.688 25.687" fill="#f15d46"></path><path d="M42.82 72.456c.76 0 1.505.07 2.24.17a18.256 18.256 0 01-.41-3.833c0-10.112 8.2-18.31 18.313-18.31 9.838 0 17.842 7.765 18.269 17.5a10.938 10.938 0 017.366-2.853c6.067 0 10.987 4.922 10.987 10.989 0 1.383-.267 2.7-.731 3.918a12.966 12.966 0 012.561-.255c7.081 0 12.82 5.738 12.82 12.817 0 7.078-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.484 0-9.1 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>`
      ];
      const description_weather = [
        'overcast clouds',
        'moderate rain',
        'scattered clouds',
        'few clouds',
      ]
      const current_weather = Math.floor(Math.random() * 3);
      // console.log(current_weather)
      item.innerHTML += `<div class = 'Minh_temp'>${
        icon_Weather[current_weather]
      } ${Math.floor(Minh_list_temperature_max[index])}/${Math.floor(
        Minh_list_temperature_min[index]
      )}${data.hourly_units.apparent_temperature}</div> <p class='desc'>${description_weather[current_weather]}</p> <i class="fa-solid fa-caret-down drop_icon"></i>`;
    });

  }
  getApi();
}
currentDay();
