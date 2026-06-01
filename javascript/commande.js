

let deliveryCost = 400;
let currentStep = 1;
let deliveryData = {};

document.addEventListener("DOMContentLoaded", () => {
  const user = Auth.getCurrentUser();
  const cart = Cart.get();

  if (!user) {
    document.getElementById("login-required").style.display = "block";
    return;
  }

  if (cart.length === 0) {
    document.getElementById("empty-cart").style.display = "block";
    return;
  }

  document.getElementById("order-layout").style.display = "grid";

  // Pre-fill form with user data
  document.getElementById("d-prenom").value = user.prenom || "";
  document.getElementById("d-nom").value = user.nom || "";

  renderSummary();
  initDeliveryOptions();
  initPaymentOptions();
  initDeliveryForm();
});

function renderSummary() {
  const cart = Cart.get();
  const container = document.getElementById("summary-items");
  const subtotalEl = document.getElementById("summary-subtotal");
  const totalEl = document.getElementById("summary-total");

  container.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span class="summary-item-name">${item.title} × ${item.qty}</span>
      <span class="summary-item-price">${(item.price * item.qty).toLocaleString("fr-DZ")} DA</span>
    </div>
  `).join("");

  const subtotal = Cart.total();
  subtotalEl.textContent = `${subtotal.toLocaleString("fr-DZ")} DA`;
  updateTotal(subtotal);
}

function updateTotal(subtotal) {
  const total = subtotal + deliveryCost;
  document.getElementById("summary-total").textContent = `${total.toLocaleString("fr-DZ")} DA`;
  document.getElementById("summary-delivery").textContent = `${deliveryCost} DA`;
}

function initDeliveryOptions() {
  document.querySelectorAll(".delivery-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".delivery-opt").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      const val = opt.querySelector("input").value;
      deliveryCost = val === "express" ? 800 : 400;
      updateTotal(Cart.total());
    });
  });
}

function initPaymentOptions() {
  document.querySelectorAll(".payment-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".payment-opt").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
    });
  });
}

function goToStep(n) {
  document.getElementById(`step-${currentStep}`).style.display = "none";
  document.getElementById(`step-${currentStep}-indicator`).classList.remove("active");
  document.getElementById(`step-${currentStep}-indicator`).classList.add(n > currentStep ? "done" : "");

  currentStep = n;
  document.getElementById(`step-${n}`).style.display = "block";
  document.getElementById(`step-${n}-indicator`).classList.add("active");

  if (n === 3) {
    confirmOrder();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function confirmOrder() {
  const orderId = "WB-" + Date.now().toString().slice(-6);
  document.getElementById("order-number").textContent = orderId;
  Cart.clear();
}


function initDeliveryForm() {
  const form = document.getElementById("delivery-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const prenom = document.getElementById("d-prenom").value.trim();
    const nom = document.getElementById("d-nom").value.trim();
    const phone = document.getElementById("d-phone").value.trim();
    const address = document.getElementById("d-address").value.trim();
    const wilaya = document.getElementById("d-wilaya").value;
    const code = document.getElementById("d-code").value.trim();

    let valid = true;

    if (!Regex.test("name", prenom)) {
      showError("d-prenom", "Prénom invalide.");
      valid = false;
    } else { showSuccess("d-prenom"); }

    if (!Regex.test("name", nom)) {
      showError("d-nom", "Nom invalide.");
      valid = false;
    } else { showSuccess("d-nom"); }

    if (!Regex.test("phone", phone)) {
      showError("d-phone", "Numéro algérien invalide (05, 06 ou 07 + 8 chiffres).");
      valid = false;
    } else { showSuccess("d-phone"); }

    if (address.length < 10) {
      showError("d-address", "Adresse trop courte (min. 10 caractères).");
      valid = false;
    } else { showSuccess("d-address"); }

    if (!wilaya) {
      showError("d-wilaya", "Veuillez sélectionner une wilaya.");
      valid = false;
    } else { showSuccess("d-wilaya"); }

    if (!/^\d{5}$/.test(code)) {
      showError("d-code", "Code postal invalide (5 chiffres).");
      valid = false;
    } else { showSuccess("d-code"); }

    if (valid) {
      deliveryData = { prenom, nom, phone, address, wilaya, code };
      goToStep(2);
    }
  });
}
