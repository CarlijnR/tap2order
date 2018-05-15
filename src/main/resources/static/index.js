	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
//btn.onclick = function() {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username === "admin" && password === "admin"){
alert ("Login is successful!");
window.location.href = 'manager.html';
  }
  else{
    alert("Invalid username or password");
    window.location.href = 'index.html';
    }
  return false;
  }
