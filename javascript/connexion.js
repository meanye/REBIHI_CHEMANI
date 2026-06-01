
if (Auth.isLoggedIn()) {
  window.location.href = "../index.html";
}

const loginForm = document.getElementById("login-form");
const submitBtn = document.getElementById("submit-btn");
const loginError = document.getElementById("login-error");
const togglePwd = document.getElementById("toggle-pwd");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");


togglePwd.addEventListener("click", () => {
  const isText = passwordInput.type === "text";
  passwordInput.type = isText ? "password" : "text";
  togglePwd.textContent = isText ? "👁" : "🙈";
});


emailInput.addEventListener("blur", () => validateEmail());
passwordInput.addEventListener("blur", () => validatePassword());

function validateEmail() {
  const val = emailInput.value.trim();
  if (!val) {
    showError("email", "L'adresse email est requise.");
    return false;
  }
  if (!Regex.test("email", val)) {
    showError("email", "Format d'email invalide (ex: nom@domaine.com)");
    return false;
  }
  showSuccess("email");
  return true;
}

function validatePassword() {
  const val = passwordInput.value;
  if (!val) {
    showError("password", "Le mot de passe est requis.");
    return false;
  }
  showSuccess("password");
  return true;
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailOk = validateEmail();
  const passOk = validatePassword();
  if (!emailOk || !passOk) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Disable button during "processing"
  submitBtn.disabled = true;
  submitBtn.textContent = "Connexion...";

  setTimeout(() => {
    const result = Auth.login(email, password);

    if (result.success) {
      loginError.style.display = "none";
      showAlert(`Bienvenue, ${result.user.prenom} !`);
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1200);
    } else {
      loginError.textContent = result.message;
      loginError.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Se connecter";
    }
  }, 600);
});
