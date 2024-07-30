const apiKey = import.meta.env.VITE_WEATHER_API_KEY || process.env.VITE_WEATHER_API_KEY;
export default function getCityWeather() {
    //TODO - default city name to grabbing someone's location
    let cityName = 'austin';
    let latitude = '';
    let longitude = '';
    let recentSearches = [];
    //TODO: make this a string literal
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey
    fetch(url)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log("this is current weather", data);
            // let iconData = data.weather[0].icon;
            //     var iconImg = $('<img>');
            //     $('#iconImg').addClass("card.small left")
            //     $('#iconImg').attr('src', 'https://openweathermap.org/img/wn/' + iconData + '@4x.png')
            //     $('#icon').append(iconImg)
            //     var temp = data.main.temp
            //     $('#temp').text(temp + " degrees")
            //     var windSpeed = data.wind.speed
            //     $('#windSpeed').text(windSpeed + " is the Wind Speed")
            //    console.log(data.name);
            //     latitude = data.coord.lat;
            //     longitude = data.coord.lon;
            //     console.log("the latitude is " + latitude, "the longitude is " + longitude);
            //     getForecastUvi(latitude, longitude);
            //     $('#date').text(moment().format('dddd, MM/DD/YYYY'))
            //     add the date for the next five days?  using moment or weather API?
            //     save the cityName to local storage
            //     localStorage.setItem("cityName", data.name)
            //     pass the coordinates to other url call for Lat and lon??
            return data.name;
        });
}