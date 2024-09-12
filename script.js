// script.js

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginMessage = document.getElementById('login-message');
const signupMessage = document.getElementById('signup-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Assuming a successful login, display a message
    loginMessage.textContent = `Welcome, ${username}! You have logged in successfully.`;
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.getElementById('role').value;
    const membership = document.getElementById('membership').value;
    // Assuming a successful signup, display a message
    signupMessage.textContent = `Welcome, ${username}! You have signed up successfully as a ${role} with ${membership} membership.`;
});