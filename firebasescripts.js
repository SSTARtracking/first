// Initialize Cloud Firestore through Firebase
var db;

var progress = 8;
var currentUser;


window.onload = function() {
    $("#myForm").show();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#back").hide();
}
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBAJpkMR0_UkefBf6q89yLg72AgKZOcwzk",
    authDomain: "sstartracking-63a75.firebaseapp.com",
    databaseURL: "https://sstartracking-63a75.firebaseio.com",
    projectId: "sstartracking-63a75",
    storageBucket: "sstartracking-63a75.appspot.com",
    messagingSenderId: "37301800758"
};
firebase.initializeApp(config);

document.querySelector('#register').addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    firebase.auth().createUserWithEmailAndPassword (email, password)
      //if it works
      .then( function(user){
      
        //log to the console that a user was created
        console.log("Successfully created user account: ", user.uid);
        //popup (toast) that the user account was created
        Materialize.toast("Successfully created user account!", 4000);

        $("#myForm")[0].reset();
    })

      //if it doesn't work
      .catch(function(error){
        //log to console the error
        console.log ('register error', error);
        //tell the user in a popup toast the error
        Materialize.toast(error.message + " Please try again!", 4000);

        if (error.code === 'auth/email-already-in-use'){
          var credential = firebase.auth.EmailAuthProvider.credential (email, password);
        }
      });
})

document.querySelector('#sign-in').addEventListener('click', function(e) {
  
    e.preventDefault();
    e.stopPropagation();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    
   
    var auth = firebase.auth();
    currentUser = auth.currentUser;
    
    firebase.auth().signInWithEmailAndPassword (email, password).then( function(user){    
            
            console.log("Sign in successful", user);
            Materialize.toast("Sign in successful!", 4000);

            showLevelList();

            auth = user;

        }).catch (function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log ('signIn error', error);
            
            Materialize.toast("Sign In Error: " + errorMessage, 4000);
        });
})
      
document.querySelector('#sign-out').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    firebase.auth().signOut();
    Materialize.toast("Signed Out", 4000);
    $("#myForm").show();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#plotting_canvas").addClass("hidden");
})

function showLevelList(){
    synchronizeProgress();
    $("#levels").show();
    $("#myForm").hide();
    $("#back").hide();
    $("#sign-out").show();
    $("#levelLoad").hide();
}

function loadLevel(i) {
    showLevel();
    $("#levelLoad").load("levels/level"+i+".html");
}

function showLevel() {
    $("#myForm").hide();
    $("#levels").hide();
    $("#sign-out").hide();
    $("#back").show();
    $("#levelLoad").show();
    $("#plotting_canvas").show();
}

function synchronizeProgress() {
    for (i=0; i<progress;i++) {
        $($(".load-level")[i]).removeClass("disabled");
    }
    $($(".load-level")[i-1]).addClass("pulse");
}