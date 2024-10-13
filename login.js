
// Get the form elements and buttons by their IDs
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');

const signupForm = document.getElementById('signupForm');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const confirmPassword = document.getElementById('confirmPassword');
const signupBtn = document.getElementById('signupBtn');

// Toggle password visibility
function togglePassword(fieldId) {
  const passwordField = document.getElementById(fieldId);
  const toggleIcon = passwordField.nextElementSibling;

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

// Regular expression for validating email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add click event listeners to the buttons
loginBtn.addEventListener('click', function() {
  // Check if login fields are not empty, email format is valid, and password is at least 5 characters long
  if (
    loginEmail.value.trim() === '' ||
    loginPassword.value.trim() === '' ||
    !emailRegex.test(loginEmail.value.trim())
  ) {
    alert('Please enter a valid email and password.');
  } else if (loginPassword.value.length < 5) {
    alert('Password must be at least 5 characters long.');
  } else {
    // Navigate to the specified login page
    window.location.href = 'page1.html';
  }
});

signupBtn.addEventListener('click', function() {
  // Check if signup fields are not empty and passwords match
  if (
    signupEmail.value.trim() === '' ||
    signupPassword.value.trim() === '' ||
    confirmPassword.value.trim() === '' ||
    !emailRegex.test(signupEmail.value.trim())
  ) {
    alert('Please fill in all fields with a valid email.');
  } else if (signupPassword.value.length < 5 || !/\d/.test(signupPassword.value)) {
    alert('Password should be at least 5 characters long and contain at least one number.');
  } else if (signupPassword.value !== confirmPassword.value) {
    alert('Passwords do not match.');
  } else {
    // Navigate to the specified signup page
    window.location.href = 'page1.html';
  }
});
