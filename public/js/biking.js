// USER AUTHENTICATION

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
  // hide the log out button and hide contents of the test div
  document.getElementById('photo').style.visibility = "hidden";
  document.getElementById('userName').style.visibility = "hidden";
  // User is signed out.
  // ...
}
});
// END USER AUTHENTICATION

// DATABASE

// find button that saves to wishlist
const submitFaves = document.querySelector('.save');

// saving data to database
submitFaves.addEventListener('submit', (e)=>{
  e.preventDefault();
  db.collection('users').add({
    
  })
})

// END DATABASE

// MAIN NAV
// Function that moves all content in main div to the right when the menu is open
function openNav(){
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("menu").classList.toggle("show");
}


// Set the width of the navbar to 0 and the left margin of the page content to 0 
function closeNav() {
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("menu").classList.toggle("show");
}

// END OF MAIN NAV



// API FOR WEATHER

// This is the code to add the current weather
// Variables for each element of api call and API key
var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // API endpoint
var city = 'Fresno';
var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // API key assigned to account
var units = '&units=imperial'; // Express temps in farenheit
var url = api + city + units + apiKey; // Concatenate API elements into URL
console.log(url); // display url

var request = new XMLHttpRequest()


request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  

  var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + 
    '.png'; // Url for icon and its place in the json obj
  var iconImage = document.getElementById('icon').src = icon; // Set the img on the #icon element

  var weather = data.weather[0].description; // Grab weather description
  document.getElementById('weather').innerHTML = weather; // Set var weather on #weather element

  var temp = data.main.temp; // Grab temp data
  var formattedTemp = Math.round(temp); // Round temp up/down to integer
    console.log(formattedTemp); // Display temperature as integer
  document.getElementById('temp').innerHTML = formattedTemp + '°'; // Display temperature as an integer in #temperature
}
request.send()