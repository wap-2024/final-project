// Initiate the script
window.onload = function() {
  console.log('Script loaded');
  login();
}

function login() {
  // login function
  document.getElementById('loginForm').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('login');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => {
        console.log(data, data.status);
        if (data.status === false) {
          alert("Your email or password is incorrect. Please try again.");
          return;
        } else {
          alert('Login successful', data.data);
          localStorage.setItem("userId", data.data.id);
          localStorage.setItem("token", data.data.token);
          window.location.href = '/frontend/views/dashboard.html';
        }
      });
  });
}
