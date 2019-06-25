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

  const favoritesList = document.querySelector('#favorites-list');

  // create element and render list of favorites
  function renderFaves(doc){
    let li = document.createElement('li');
    let type = document.createElement('span');
    let name = document.createElement('span');
    let link = document.createElement('span');

    // set data on the elements created
    li.setAttribute('data-id', doc.id);
    type.textContent = doc.data().type;
    name.textContent = doc.data().name;
    link.textContent = doc.data().link;

    li.appendChild(type);
    li.appendChild(name);
    li.appendChild(link);

    favoritesList.appendChild(li);
  }

db.collection('users').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        renderFaves(doc);
    console.log(snapshot.docs);
    });
})