document.addEventListener("DOMContentLoaded", function () {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");

    // logic Responsible For Signin up Users.
    signup.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        // Check if username already exists in localStorage.
        if (localStorage.getItem(username)) {
            alert("Username already exists. Please choose a different one.");
        } else {
            // Store username and password in localStorage if user does not exist.
            localStorage.setItem(username, password);
            alert("Signup successful! You can now login.");
        }

        // Clear signup form
        signup.reset();
    });

    // Login logic
    login.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Check if username exists and the password is correct
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === null) {
            alert("Username not found. Please signup.");
        } else if (password === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Incorrect password. Please try again.");
        }

        // Clear login form
        login.reset();
    });
});