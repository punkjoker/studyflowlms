document.addEventListener('DOMContentLoaded', () => {
  const studentLoginBtn = document.querySelector('#student-login-btn');
  const instructorLoginBtn = document.querySelector('#instructor-login-btn');
  const accountLink = document.querySelector('#account-link');
  const signupLink = document.querySelector('#signup-link');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  
  // Event listener for student login button
  studentLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogin('student');
  });

  // Event listener for instructor login button
  instructorLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogin('instructor');
  });

  // Event listener for account link
  accountLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to the login page.');
    // Here you can add the logic to redirect to the login page if needed
  });

  // Event listener for signup link
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to the sign-up page.');
    // Here you can add the logic to redirect to the sign-up page if needed
  });

  // Function to handle login
  function handleLogin(userType) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }

    alert(`Logging in as ${userType}`);
    // Here you can add the logic to handle login for student or instructor
  }
});
