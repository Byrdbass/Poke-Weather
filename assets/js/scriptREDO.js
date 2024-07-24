//Weather variables
var apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = '';
var latitude = '';
var longitude = '';
//Pokemon Variables
var pokeRow = document.getElementById('pokeRow');
var pokeArray;
var typeMasterArray = []; //hold all the pokemon affected by current weather
var userPokeChoice = []; //pick 6 random from typeMasterArray
var currentWeather, currentPlus, currentNegative, currentWeatherIndex;
