// Select the forms and inputs
let toggleBtn = document.querySelector("#Signin");
let signUpForm = document.querySelector("#Sign-upForm");
let signInForm = document.querySelector("#sign-inForm");

// Toggle between Sign Up and Sign In forms
toggleBtn.addEventListener("click", () => {
  signUpForm.style.display = "none";
  signInForm.style.display = "block";
});

// Function to show Sign Up form
function showSignUp() {
  signUpForm.style.display = "block";
  signInForm.style.display = "none";
}

// Handle Sign-Up form submission
document.querySelector("#Sign-upForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save the username and password to localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // You can add a success message or redirect to the sign-in page
  alert("Account created successfully! You can now sign in.");
  signUpForm.style.display = "none";
  signInForm.style.display = "block"; // Show sign-in form after sign-up
});

// Handle Sign-In form submission
document.querySelector("#sign-inForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get entered email and password from sign-in form
  let email = document.querySelector("#email-signin").value;
  let password = document.querySelector("#password-signin").value;

  // Retrieve stored values from localStorage
  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  // Check if the entered credentials match the stored credentials
  if (email === storedEmail && password === storedPassword) {
    alert("Sign-in successful!");
    // Redirect to another page or show logged-in content here
  } else {
    alert("Invalid credentials. Please try again.");
  }
  window.location.href = "../index.html";
});
