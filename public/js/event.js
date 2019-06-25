// listen for any change in the state of the user authorization
firebase.auth().onAuthStateChanged(function(user) {
    // if there is a user authenticated..
    if (user != null) {
      // User is signed in. Find user properties 
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(displayName);
  document.getElementById('userName').innerHTML = "Hello " + displayName;
  document.getElementById("photo").src = photoURL;
  } else {
    // hide the log out button and hide contents of the test dive
    document.getElementById('photo').style.visibility = "hidden";
    document.getElementById('userName').style.visibility = "hidden";
    // User is signed out.
    // ...
  }
  });


var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // api endpoint
var city = 'Fresno';
var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // api key assigned to account
var units = '&units=imperial'; // express temps in farenheit
var url = api + city + units + apiKey; // concatenate api elements into url 
console.log(url);

let request =  new XMLHttpRequest();

request.open('GET', url, true);

request.onload = function() {
let data = JSON.parse(this.response);

let icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'; // url for icon and its place in the json obj
let iconImage = document.getElementById('icon').src = icon;

let weather = data.weather[0].description;
document.getElementById('weather').innerHTML = weather;

let temp = data.main.temp;
let formattedTemp = Math.round(temp);
console.log(formattedTemp);
document.getElementById('temp').innerHTML = formattedTemp + '°';}

request.send();

function openNav(){
    document.getElementById("main").style.marginLeft = "250px";
    console.log(openNav);
}


