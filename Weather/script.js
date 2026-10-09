let input =  document.getElementById('input');
let search = document.getElementById('btn');

let img = document.getElementById('img');
let temp = document.getElementById('temp');
let Location = document.getElementById('city');


let humidity = document.getElementById('humidity');
let winds = document.getElementById('winds');
weather = async()=>{
     const api =`Your api key from WEATHERAPI.COM`;
    
    // console.log(11)
      const response = await fetch(api);
      const data = await response.json();
      
      console.log(data);

      img.src = data.current.condition.icon;
      temp.innerHTML = data.current.temp_c + "°C";
      Location.innerHTML = data.location.name;

      humidity.innerHTML = " " + data.current.humidity + "%" + " Humidity";
      winds.innerHTML = " " +data.current.wind_kph + "km/h" + " Winds";

    }

    let forecast = document.getElementById('forecast');
    Forecast = async()=>{
      const F =`Your api key from WEATHERAPI.COM`;
      // const F = `https://api.weatherapi.com/v1/forecast.json?key=&q=${input.value}&days=5&aqi=no&alerts=no`;
      const Fresponse = await fetch(F);
      const Fdata = await Fresponse.json();
      console.log(Fdata);


      Fdata.forecast.forecastday.forEach(day =>{
      let date = new Date(day.date);

      let dayName = date.toLocaleDateString("en-US", {
         weekday: "short"});

          forecast.innerHTML += `
        <div class="forecast-card">
            <p>${dayName}</p>

            <img src="https:${day.day.condition.icon}">
            
            <p>
                ${day.day.avgtemp_c}°C
            </p>

            <p>${day.day.condition.text}</p>
        </div>
    `;
         


      });
    }




    search.addEventListener('click',()=>{
      forecast.innerHTML = "";
        weather();
        Forecast();
    });

    weather();
    Forecast();



