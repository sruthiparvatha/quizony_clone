// Get the Sign Up modal
var signUpModal = document.getElementById("signUp__modal");

// Get the button that opens the modal
var signUpOpt = document.getElementById("signUp");

// Get the button that opens the modal
var signUpOpt_col = document.getElementById("signUp_col");

// Get the <span> element that closes the modal
var signUpSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
signUpOpt.onclick = function() {
    signUpModal.style.display = "block";
}

// When the user clicks on the button, open the modal
signUpOpt_col.onclick = function() {
    // alert("Sign Up clicked");
    signUpModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
    signUpModal.style.display = "none";
}




// Get the modal
var loginModal = document.getElementById("login__modal");

// Get the button that opens the modal
var loginOpt = document.getElementById("login");
// Get the button that opens the modal
var loginOpt_col = document.getElementById("login_col");

// Get the <span> element that closes the modal
var loginSpan = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
loginOpt.onclick = function() {
    loginModal.style.display = "block";
}
loginOpt_col.onclick = function() {
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loginSpan.onclick = function() {
    loginModal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == signUpModal ) 
        signUpModal.style.display = "none";
    
    else if (event.target == loginModal ) 
        loginModal.style.display = "none";
}


