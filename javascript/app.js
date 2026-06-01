
const USERS_DB = [
  {
    id: 1,
    nom: "ReCh",
    prenom: "AyLa",
    email: "rebihi.chemani@email.com",
    password: "aymenelamine123!",
    phone: "0770707070"
  },
];


const Auth = {
  login(email, password) {
    const user = USERS_DB.find(
      u => u.email === email && u.password === password
    );
    if (user) {
      const session = {
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem("currentUser", JSON.stringify(session));
      return { success: true, user: session };
    }
    return { success: false, message: "Email ou mot de passe incorrect." };
  },

  logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "../index.html";
  },

  getCurrentUser() {
    const data = localStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  register(nom, prenom, email, password, phone) {
    const exists = USERS_DB.find(u => u.email === email);
    if (exists) {
      return { success: false, message: "Cet email est déjà utilisé." };
    }
    const newUser = {
      id: USERS_DB.length + 1,
      nom, prenom, email, password, phone
    };
    USERS_DB.push(newUser);
    return { success: true, message: "Compte créé avec succès !" };
  }
};


const Cart = {
  get() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  },

  save(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.updateBadge();
  },

  add(product) {
    const cart = this.get();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    this.save(cart);
  },

  remove(productId) {
    const cart = this.get().filter(item => item.id !== productId);
    this.save(cart);
  },

  updateQty(productId, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      if (item.qty <= 0) return this.remove(productId);
    }
    this.save(cart);
  },

  total() {
    return this.get().reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  count() {
    return this.get().reduce((sum, item) => sum + item.qty, 0);
  },

  clear() {
    localStorage.removeItem("cart");
    this.updateBadge();
  },

  updateBadge() {
    const badge = document.getElementById("cart-badge");
    if (badge) {
      const count = this.count();
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  }
};


const Regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  phone: /^(05|06|07)[0-9]{8}$/,
  name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,

  test(type, value) {
    return this[type]?.test(value);
  }
};


function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(inputId + "-error");
  if (input) input.classList.add("input-error");
  if (input) input.classList.remove("input-success");
  if (error) error.textContent = message;
}

function showSuccess(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(inputId + "-error");
  if (input) input.classList.remove("input-error");
  if (input) input.classList.add("input-success");
  if (error) error.textContent = "";
}

function showAlert(message, type = "success") {
  const existing = document.querySelector(".alert-toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = `alert-toast alert-${type}`;
  toast.innerHTML = `<span>${type === "success" ? "✓" : "✕"}</span> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}


document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadge();

  const user = Auth.getCurrentUser();
  const navUser = document.getElementById("nav-user");
  const navLogin = document.getElementById("nav-login");
  const navRegister = document.getElementById("nav-register");
  const logoutBtn = document.getElementById("logout-btn");

  if (user) {
    if (navUser) {
      navUser.textContent = `Bonjour, ${user.prenom}`;
      navUser.style.display = "inline";
    }
    if (navLogin) navLogin.style.display = "none";
    if (navRegister) navRegister.style.display = "none";
    if (logoutBtn) {
      logoutBtn.style.display = "inline";
      logoutBtn.addEventListener("click", () => Auth.logout());
    }
  } else {
    if (navUser) navUser.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }


  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      burger.classList.toggle("active");
    });
  }
});
