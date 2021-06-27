<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
</head>
    <title><img src="images\logo_signup.png">Sample Quiz</title>
</head>
<body>
    <div class="navbar">
        <div id="navbar__header">
            <img src="./images/quizony_logo_black.png" id="navbar__icon">
            <div class="navbar__centerOptions">
                <div class="dropdown">
                    Categories
                <div class="dropdown-content">
                    <a href="#">Quizzes</a>
                    <a href="#">All</a>
                    <a href="#">Top</a>
                    <a href="#">Users Quizzes</a>
                    <a href="#">Women</a>
                    <a href="#">Couples</a>
                    <a href="#">Trivia</a>
                    <a href="#">Sport</a>

                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
                </div>
                <a href="" class=""></a>
                <div class="dropdown">
                    Create
                <div class="dropdown-content">
                    <a href="#">Create Quiz</a>
                    <a href="#">Create Story</a>
                    <a href="#">How it works</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                </div>
                </div>

                <a href="" class="">Waiting Room</a>
                <a href="" class="">Our Story</a>
            </div>

            <div class="navbar__leftOptions">
                <!-- Trigger/Open The Modal -->
                    <a href="#" id="signUp">Sign Up</a>
                    <!-- The Modal -->
                    <div id="signUp__modal" class="modal">

                    <!-- Modal content -->s
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <center>
                            <img src="images\logo_signup.png">
                            <p id="modal__title">Welcome to Quizony</p>
                            <input type="text" id="username" placeholder="Username" required>
                            <input type="password" id="password"  placeholder="Password" required>
                            <input type="email" id="email"  placeholder="Email" required>
                            <button id="signUpBtn">Sign Up</button>
                            <centre><p style="margin-top: 5px; margin-bottom:5px;">OR</p></centre>
                            <button class="googleSignInBtn"><img src="D:\AlignBox_Internship\images\g-logo.png">Log In</button>
                            <br><small>By continuing, you agree to Quizony's<a href="#" > Privacy Policy</a> and <a href="#">Cookie use.</a></small><br>
                            <p>Already a member?<a href="#"> Log In</a></p>
                        </center>
                    </div>

                    </div>
        
                <a href="#" id="login">Log in</a>
                <!-- The Modal -->
                <div id="login__modal" class="modal">

                    <!-- Modal content -->s
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="images\logo_signup.png">
                        <p id="modal__title">Welcome to Quizony</p>
                        <input type="text" id="username" placeholder="Username or email" required>
                        <input type="password" id="password"  placeholder="Password" required>
                        <p style="font-weight: bold; font-size:12px; color: black;">Forgot your password?</p>
                        <br>
                        <button id="loginBtn">Log in</button>
                        <centre><p style="margin-top: 5px; margin-bottom:5px;">OR</p></centre>
                        <button class="googleSignInBtn"><img src="D:\AlignBox_Internship\images\g-logo.png">Sign In</button>
                        <br><small>By continuing, you agree to Quizony's<a href="#" > Privacy Policy</a> and <a href="#">Cookie use.</a></small><br>
                        <p>Not on Quizony yet?<a href="#"> Sign up</a></p>
                    </div>

                    </div>

            </div>
        </div>
 
    </div>
    <!-- A long body is coming up -->
    <div class="main__container">


    </div>
<script type="text/javascript" src="index.js"></script>
    
</body>
</html>