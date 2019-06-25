

// find sign out button
const signOutBtn = document.getElementById("signOutBtn");

// Call googleLogin function when button is clicked
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const promise = firebase.auth().signInWithPopup(provider)
    // if the login is sucessfull then console log the user object
    promise.then(function(result) {
        // if there is a user authenticated
    // ...
    // if the login is unsucessfull then show alert
  }).catch(function(error) {
    window.alert("Login failed");
          // ...
  });
}

// listen for any change in the state of the user authorization
firebase.auth().onAuthStateChanged(function(user) {
  // if there is a user authenticated..
    if (user != null){
            // variables for gmail user info
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
      // display user photo and name, but hide the login button
      document.getElementById("photo").src = photoURL;
      document.getElementById('userName').innerHTML = "Hello " + displayName;
      document.getElementById("signInBtn").style.visibility = 'hidden';    
      console.log(displayName);
    
    // if there is no user authenticated
  } else {
    // hide the log out button and hide contents of the test div
    document.getElementById("signOutBtn").style.visibility = 'hidden';
    document.getElementById('photo').style.visibility = "hidden";
    document.getElementById('userName').style.visibility = "hidden";
    document.getElementById('signInBtn').style.visibility = "visible";
    document.getElementById("signInBtn").style.margin = '5px 0 0 15px';
    // User is signed out.
    // ...
  }
});

// when the log out button is clicked call the signOut function
signOutBtn.addEventListener('click', e=>{
  firebase.auth().signOut();
  // then hide the contents of the test div and console log that the user has logged out
  document.getElementById("test").style.visibility = 'hidden';
  document.getElementById('signInBtn').style.visibility = 'visible';
  document.getElementById('signOutBtn').style.visibility = 'hidden';
  console.log('logged out')
})


// weather 
// variables for each element of api call and api key
var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // api endpoint
var city = 'Fresno';
var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // api key assigned to account
var units = '&units=imperial'; // express temps in farenheit
var url = api + city + units + apiKey; // concatenate api elements into url 
console.log(url); // display url

var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  

  var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + 
    '.png';// url for icon and its place in the json obj
  var iconImage = document.getElementById('icon').src = icon; // set the img on the #icon element

  var weather = data.weather[0].description; // grab weather description
  document.getElementById('weather').innerHTML = weather; // set var weather on #weather element

  var temp = data.main.temp; // grap temp data
  var formattedTemp = Math.round(temp); // round temp up/down to int
    console.log(formattedTemp); // display temp as int
  document.getElementById('temp').innerHTML = formattedTemp + '°'; // display temperature as an int in #temp
}
request.send()