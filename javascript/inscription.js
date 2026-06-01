

const form = document.getElementById("register-form");
const submitBtn = document.getElementById("submit-btn");
const registerError = document.getElementById("register-error");
const registerSuccess = document.getElementById("register-success");
const pwdInput = document.getElementById("password");
const confirmPwd = document.getElementById("confirm-password");
const togglePwd = document.getElementById("toggle-pwd");

// Toggle password visibility
togglePwd.addEventListener("click", () => {
  const isText = pwdInput.type === "text";
  pwdInput.type = isText ? "password" : "text";
  togglePwd.textContent = isText ? "👁" : "🙈";
});

// Password strength indicator
pwdInput.addEventListener("input", () => {
  const val = pwdInput.value;
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar2el = document.getElementById("bar2");
  const label = document.getElementById("pwd-label");

  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength++;
  if (/\d/.test(val) && /[!@#$%^&*]/.test(val)) strength++;

  const bars = [bar1, bar2el, document.getElementById("bar3")];
  const states = ["weak", "medium", "strong"];
  const labels = ["Faible", "Moyen", "Fort 💪"];
  const labelColors = ["var(--error)", "var(--brown)", "var(--success)"];

  bars.forEach((b, i) => {
    b.className = "pwd-bar";
    if (i < strength) b.classList.add(states[strength - 1]);
  });

  if (val.length === 0) {
    label.textContent = "Entrez un mot de passe";
    label.style.color = "var(--gray)";
  } else {
    label.textContent = labels[strength - 1] || "Faible";
    label.style.color = labelColors[strength - 1] || "var(--error)";
  }
});


function validatePrenom() {
  const val = document.getElementById("prenom").value.trim();
  if (!val) { showError("prenom", "Le prénom est requis."); return false; }
  if (!Regex.test("name", val)) { showError("prenom", "Prénom invalide (lettres uniquement, 2-50 caractères)."); return false; }
  showSuccess("prenom");
  return true;
}

function validateNom() {
  const val = document.getElementById("nom").value.trim();
  if (!val) { showError("nom", "Le nom est requis."); return false; }
  if (!Regex.test("name", val)) { showError("nom", "Nom invalide (lettres uniquement, 2-50 caractères)."); return false; }
  showSuccess("nom");
  return true;
}

function validateEmail() {
  const val = document.getElementById("email").value.trim();
  if (!val) { showError("email", "L'adresse email est requise."); return false; }
  if (!Regex.test("email", val)) { showError("email", "Format d'email invalide (ex: nom@domaine.com)."); return false; }
  showSuccess("email");
  return true;
}

function validatePhone() {
  const val = document.getElementById("phone").value.trim();
  if (!val) { showError("phone", "Le numéro de téléphone est requis."); return false; }
  if (!Regex.test("phone", val)) { showError("phone", "Format invalide. Doit commencer par 05, 06 ou 07 et avoir 10 chiffres."); return false; }
  showSuccess("phone");
  return true;
}

function validatePassword() {
  const val = pwdInput.value;
  if (!val) { showError("password", "Le mot de passe est requis."); return false; }
  if (!Regex.test("password", val)) {
    showError("password", "8 car. min., avec majuscule, minuscule, chiffre et symbole (!@#$%^&*).");
    return false;
  }
  showSuccess("password");
  return true;
}

function validateConfirm() {
  const val = confirmPwd.value;
  if (!val) { showError("confirm-password", "Veuillez confirmer votre mot de passe."); return false; }
  if (val !== pwdInput.value) { showError("confirm-password", "Les mots de passe ne correspondent pas."); return false; }
  showSuccess("confirm-password");
  return true;
}


document.getElementById("prenom").addEventListener("blur", validatePrenom);
document.getElementById("nom").addEventListener("blur", validateNom);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
pwdInput.addEventListener("blur", validatePassword);
confirmPwd.addEventListener("blur", validateConfirm);


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const checks = [validatePrenom(), validateNom(), validateEmail(), validatePhone(), validatePassword(), validateConfirm()];
  if (checks.includes(false)) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Création du compte...";

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = pwdInput.value;
  const phone = document.getElementById("phone").value.trim();

  setTimeout(() => {
    const result = Auth.register(nom, prenom, email, password, phone);

    if (result.success) {
      registerError.style.display = "none";
      registerSuccess.style.display = "block";
      form.reset();
      setTimeout(() => {
        window.location.href = "connexion.html";
      }, 2000);
    } else {
      registerError.textContent = result.message;
      registerError.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Créer mon compte";
    }
  }, 700);
});
