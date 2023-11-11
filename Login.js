const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
// Your existing JavaScript code
function authenticateUser() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    // Replace the condition below with your actual authentication logic
    if (usernameInput.value === 'username' && passwordInput.value === 'password') {
      // Authentication successful, navigate to index.html
      window.location.href = 'home.html';
    } else {
      // Authentication failed, show an alert
      alert('Incorrect username or password');
    }
  }
