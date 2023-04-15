function GetInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--"




fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&appid=151eadf472eb4ef7c40d5a200f04dc76&units=imperial")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + data.list[i].main.temp_min  + "°";
        }

        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Max").innerHTML = "Man:" +data.list[i].main.temp_max + "°";
        }

        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Max").innerHTML = "Man:" +data.list[i].main.temp_max  + "°";
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("img" + (i + 1)).setAttribute("src" ," https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png");
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "wind").innerHTML = "wind speed: "+ data.list[i].wind.speed  + "MPH";
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Humid").innerHTML ="Humidty: "+ data.list[i].main.humidity  + "%";
        }
    })
}
function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "Minneapolis";
    GetInfo();
}
const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = days[checkDay(i)];
}
console.log(localStorage)