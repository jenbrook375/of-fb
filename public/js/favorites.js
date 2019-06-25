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

db.collection('users').get().then((snapshot)=>{
    console.log(snapshot.docs);
})