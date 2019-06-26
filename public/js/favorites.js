// USER AUTHENICATION
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
// END USER AUTHENTICATION

// DATABASE
  const favoritesList = document.querySelector('#favorites-list');

  // create element and render list of favorites
  function renderFaves(doc){
    let li = document.createElement('li');
    let type = document.createElement('span');
    let name = document.createElement('span');
    let link = document.createElement('span');
    let cross = document.createElement('div');


    // set data on the elements created
    li.setAttribute('data-id', doc.id);
    type.textContent = doc.data().type;
    name.textContent = doc.data().name;
    link.textContent = doc.data().link;
    cross.textContent = "x"

    li.appendChild(type);
    li.appendChild(name);
    li.appendChild(link);
    li.appendChild(cross);

    favoritesList.appendChild(li);
  }

  // gets db data
db.collection('users').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        renderFaves(doc);
    console.log(snapshot.docs);
    });
})

// saving data to db

// END DATABASE

// MENU
// function that moves all content in main div to the right when the menu is open
// then shows the menu
function openNav(){
  document.getElementById("menu").classList.toggle("show");
}

// Sets the left margin of the main div content to 0 
// then hides the menu
function closeNav() {
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("menu").classList.toggle("show");
}
//END MENU

// API
// //this is the code to add the current weather
// // variables for each element of api call and api key
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
// END API