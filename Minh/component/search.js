class Hight_Light {
    constructor(input, regex) {
      this.input = input;
      this.regex = regex;
    }
    HightLight() {
      const regex = new RegExp(this.regex, "gi");
      const app = document.querySelector(".app");

      for (let index = 0; index < this.input.length; index++) {
        const element = this.input[index];
  
        if (regex.test(element)) {
          const output = element.replace(
            regex,
            `<span class = "text-danger">${this.regex}</span>`
          );

          const child = document.createElement("p");
          child.innerHTML = output; 
  
          app.insertBefore(child, app.firstChild); // Thêm phần thẻ vừa đc set vào đầu tiên của thẻ cha
        } else {
          app.innerHTML += `<p>${element}</p>`;
        }
      }
    }
  }
  
  
  const arr = [];
  const getAPI = async() => {
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=ha%20noi&lang=vi&units=metric&appid=062d92a2646152d39eb7845a608226cb");
      const data = await response.json();
      console.log(data.coord.lon)
      console.log(data.coord.lat)
  };
  
  getAPI();
  
  const value_input = document.querySelector(".input input"); //Thẻ input
  value_input.onkeyup = () => {
    // Lắng nghe mỗi lần change thì mình gọi lại class
    document.querySelector(".app").innerHTML = "";
    const hihi = new Hight_Light(arr, `${value_input.value}`);
    hihi.HightLight();
    if (value_input.value == "") {
      document.querySelector(".app").innerHTML = "";
    }
  };
  