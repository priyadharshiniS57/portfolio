/**
 * ==============================================================================
 * login.js - Authentication, Form Validation, and Session Management
 * ==============================================================================
 * 
 * Features implemented:
 * 1. Auth Guard (redirects already logged-in users to index.html).
 * 2. Real-time form validation (required checks & error clearing on typing).
 * 3. Toggle Password visibility (Show/Hide password).
 * 4. Hardcoded demo credentials validation.
 * 5. LocalStorage session persistence & "Remember Me" handling.
 * 6. Global logout() utility function.
 */

// -----------------------------------------------------------------------------
// 1. DEMO CREDENTIALS CONFIGURATION
// -----------------------------------------------------------------------------
// For demonstration in this portfolio project, we use these hardcoded credentials:
const DEMO_CREDENTIALS = {
  username: 'admin',
  email: 'demo@example.com',
  password: 'portfolio123'
};

// -----------------------------------------------------------------------------
// 2. DOM ELEMENTS SELECTION
// -----------------------------------------------------------------------------
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const rememberMeCheckbox = document.getElementById('rememberMeCheckbox');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const eyeIcon = document.getElementById('eyeIcon');
const eyeOffIcon = document.getElementById('eyeOffIcon');
const loginBtn = document.getElementById('loginBtn');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const authAlert = document.getElementById('authAlert');
const authAlertMessage = document.getElementById('authAlertMessage');
const autoFillBtn = document.getElementById('autoFillBtn');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

// -----------------------------------------------------------------------------
// 3. AUTH GUARD: REDIRECT IF ALREADY LOGGED IN
// -----------------------------------------------------------------------------
/**
 * Checks if the user already has an active session in localStorage.
 * If yes, immediately redirect them to the portfolio home page (index.html).
 */
function checkExistingSession() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    // User is already authenticated, redirect to home page
    window.location.replace('index.html');
  }
}

// Run check immediately when script loads
checkExistingSession();

// -----------------------------------------------------------------------------
// 4. RESTORE "REMEMBER ME" PREFERENCES
// -----------------------------------------------------------------------------
/**
 * If the user previously selected "Remember me", pre-fill the username input.
 */
function restoreRememberedUser() {
  const rememberedUser = localStorage.getItem('portfolio_remembered_user');
  if (rememberedUser && usernameInput) {
    usernameInput.value = rememberedUser;
    rememberMeCheckbox.checked = true;
  }
}

// -----------------------------------------------------------------------------
// 5. HELPER FUNCTIONS: DISPLAY & CLEAR ERRORS
// -----------------------------------------------------------------------------
/**
 * Displays an error message beneath a specific input field and adds red styling.
 * @param {HTMLInputElement} inputElement - The input element with an error
 * @param {HTMLElement} errorContainer - The container element for the error message
 * @param {string} message - The error message text to show
 */
function showError(inputElement, errorContainer, message) {
  inputElement.classList.add('is-invalid');
  const errorTextSpan = errorContainer.querySelector('.error-text');
  if (errorTextSpan) {
    errorTextSpan.textContent = message;
  }
  errorContainer.classList.add('visible');
}

/**
 * Hides the error message and resets input border styles.
 * @param {HTMLInputElement} inputElement - The input element to clear
 * @param {HTMLElement} errorContainer - The container element to hide
 */
function clearError(inputElement, errorContainer) {
  inputElement.classList.remove('is-invalid');
  errorContainer.classList.remove('visible');
  hideAuthAlert();
}

/**
 * Shows an alert banner at the top of the form (e.g. Invalid credentials).
 * @param {string} message - The text message
 * @param {'error'|'success'} type - Alert type style
 */
function showAuthAlert(message, type = 'error') {
  authAlert.className = `auth-alert visible alert-${type}`;
  authAlertMessage.textContent = message;
}

/**
 * Hides the top alert banner.
 */
function hideAuthAlert() {
  authAlert.className = 'auth-alert';
}

// -----------------------------------------------------------------------------
// 6. REAL-TIME INPUT LISTENERS (REMOVE ERRORS AS USER TYPES)
// -----------------------------------------------------------------------------
// When the user starts typing in the username input, remove the error
usernameInput.addEventListener('input', () => {
  if (usernameInput.value.trim() !== '') {
    clearError(usernameInput, usernameError);
  }
});

// When the user starts typing in the password input, remove the error
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.trim() !== '') {
    clearError(passwordInput, passwordError);
  }
});

// -----------------------------------------------------------------------------
// 7. SHOW / HIDE PASSWORD TOGGLE
// -----------------------------------------------------------------------------
/**
 * Toggles the password field between hidden ("password") and visible ("text") type.
 */
function togglePasswordVisibility() {
  const isCurrentlyPassword = passwordInput.getAttribute('type') === 'password';

  if (isCurrentlyPassword) {
    // Show password
    passwordInput.setAttribute('type', 'text');
    eyeIcon.style.display = 'none';
    eyeOffIcon.style.display = 'block';
    togglePasswordBtn.setAttribute('aria-label', 'Hide password');
    togglePasswordBtn.setAttribute('title', 'Hide password');
  } else {
    // Hide password
    passwordInput.setAttribute('type', 'password');
    eyeIcon.style.display = 'block';
    eyeOffIcon.style.display = 'none';
    togglePasswordBtn.setAttribute('aria-label', 'Show password');
    togglePasswordBtn.setAttribute('title', 'Show password');
  }
}

togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

// -----------------------------------------------------------------------------
// 8. FORM VALIDATION & SUBMISSION HANDLER
// -----------------------------------------------------------------------------
loginForm.addEventListener('submit', function (event) {
  // Prevent page refresh on submit
  event.preventDefault();

  // Reset any previous top alert
  hideAuthAlert();

  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value;
  let isValid = true;

  // Validation 1: Username / Email is required
  if (!enteredUsername) {
    showError(usernameInput, usernameError, 'Username or Email is required.');
    isValid = false;
  } else {
    clearError(usernameInput, usernameError);
  }

  // Validation 2: Password is required
  if (!enteredPassword) {
    showError(passwordInput, passwordError, 'Password is required.');
    isValid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  // If validation fails, focus the first invalid field and stop
  if (!isValid) {
    if (!enteredUsername) {
      usernameInput.focus();
    } else {
      passwordInput.focus();
    }
    return;
  }

  // ---------------------------------------------------------------------------
  // Check Hardcoded Credentials
  // ---------------------------------------------------------------------------
  const isUsernameMatch = (
    enteredUsername.toLowerCase() === DEMO_CREDENTIALS.username.toLowerCase() ||
    enteredUsername.toLowerCase() === DEMO_CREDENTIALS.email.toLowerCase()
  );
  const isPasswordMatch = (enteredPassword === DEMO_CREDENTIALS.password);

  if (!isUsernameMatch || !isPasswordMatch) {
    // Show error if credentials do not match
    showAuthAlert('Invalid credentials. Hint: use admin / portfolio123', 'error');
    passwordInput.classList.add('is-invalid');
    return;
  }

  // ---------------------------------------------------------------------------
  // Successful Login Flow
  // ---------------------------------------------------------------------------
  // 1. Indicate loading state on the button
  loginBtn.classList.add('loading');
  loginBtn.disabled = true;
  const btnText = loginBtn.querySelector('.btn-text');
  if (btnText) btnText.textContent = 'Signing in...';

  // 2. Save authentication session in localStorage
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('currentUser', enteredUsername);
  localStorage.setItem('loginTimestamp', new Date().toISOString());

  // 3. Handle "Remember Me"
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('portfolio_remembered_user', enteredUsername);
  } else {
    localStorage.removeItem('portfolio_remembered_user');
  }

  // 4. Show success alert briefly and redirect to index.html
  showAuthAlert('Login successful! Redirecting to portfolio...', 'success');

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 650);
});

// -----------------------------------------------------------------------------
// 9. LOGOUT FUNCTION (EXPOSED GLOBALLY)
// -----------------------------------------------------------------------------
/**
 * Clears user session from localStorage and redirects to login.html.
 * Can be called from any page or directly from console.
 */
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('loginTimestamp');
  // Note: We keep 'portfolio_remembered_user' intact if user checked remember me
  window.location.href = 'login.html';
}

// Attach logout function to window object so index.html or buttons can call it
window.logout = logout;

// -----------------------------------------------------------------------------
// 10. EXTRA CONVENIENCE FEATURES: AUTO-FILL & FORGOT PASSWORD
// -----------------------------------------------------------------------------
// Quick Autofill button to make testing seamless
if (autoFillBtn) {
  autoFillBtn.addEventListener('click', () => {
    usernameInput.value = DEMO_CREDENTIALS.username;
    passwordInput.value = DEMO_CREDENTIALS.password;
    clearError(usernameInput, usernameError);
    clearError(passwordInput, passwordError);
    hideAuthAlert();
    usernameInput.focus();
  });
}

// "Forgot Password?" feedback
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Portfolio Demo:\nPlease use the demo credentials provided below:\n\nUsername: admin\nPassword: portfolio123');
  });
}

// -----------------------------------------------------------------------------
// 11. INITIALIZATION ON DOM CONTENT LOADED
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  restoreRememberedUser();
});
