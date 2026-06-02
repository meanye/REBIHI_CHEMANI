
const PRODUCTS_DATA = [
  {
    "id": 1,
    "title": "Le Monde de Sophie",
    "author": "Jostein Gaarder",
    "category": "philosophie",
    "price": 850,
    "rating": 4.8,
    "image": "https://covers.openlibrary.org/b/id/8739161-L.jpg",
    "description": "Un roman philosophique fascinant qui retrace l'histoire de la philosophie à travers une adolescente norvégienne.",
    "stock": 12
  },
  {
    "id": 2,
    "title": "L'Alchimiste",
    "author": "Paulo Coelho",
    "category": "roman",
    "price": 720,
    "rating": 4.7,
    "image": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    "description": "Un conte philosophique sur un jeune berger andalou qui voyage vers l'Égypte à la recherche d'un trésor.",
    "stock": 20
  },
  {
    "id": 3,
    "title": "Nedjma",
    "author": "Kateb Yacine",
    "category": "roman",
    "price": 650,
    "rating": 4.9,
    "image": "https://covers.openlibrary.org/b/id/10527836-L.jpg",
    "description": "Chef-d'œuvre de la littérature algérienne, une fresque poétique et politique de l'Algérie colonisée.",
    "stock": 8
  },
  {
    "id": 4,
    "title": "Structures de Données en C",
    "author": "Jean-Pierre Jacquot",
    "category": "informatique",
    "price": 1200,
    "rating": 4.5,
    "image": "https://covers.openlibrary.org/b/id/9255566-L.jpg",
    "description": "Un guide complet sur les structures de données fondamentales avec des exemples en langage C.",
    "stock": 15
  },
  {
    "id": 5,
    "title": "Mathématiques pour l'Ingénieur",
    "author": "Erwin Kreyszig",
    "category": "sciences",
    "price": 1800,
    "rating": 4.6,
    "image": "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    "description": "La référence incontournable des mathématiques appliquées pour les étudiants en ingénierie.",
    "stock": 10
  },
  {
    "id": 6,
    "title": "Le Petit Prince",
    "author": "Antoine de Saint-Exupéry",
    "category": "classique",
    "price": 500,
    "rating": 5.0,
    "image": "https://covers.openlibrary.org/b/id/8476616-L.jpg",
    "description": "Un conte poétique et philosophique sous l'apparence d'un conte pour enfants.",
    "stock": 30
  },
  {
    "id": 7,
    "title": "Introduction aux Algorithmes",
    "author": "Thomas H. Cormen",
    "category": "informatique",
    "price": 2200,
    "rating": 4.8,
    "image": "https://covers.openlibrary.org/b/id/8692777-L.jpg",
    "description": "La bible de l'algorithmique, utilisée dans les meilleures universités du monde.",
    "stock": 7
  },
  {
    "id": 8,
    "title": "La Peste",
    "author": "Albert Camus",
    "category": "classique",
    "price": 680,
    "rating": 4.7,
    "image": "https://covers.openlibrary.org/b/id/9255569-L.jpg",
    "description": "Le roman emblématique de Camus qui décrit une épidémie de peste à Oran, en Algérie.",
    "stock": 18
  },
  {
    "id": 9,
    "title": "Einstein et les révolutions quantiques",
    "author": "Alain Aspect",
    "category": "sciences",
    "price": 2000,
    "rating": 4.4,
    "image": "https://covers.openlibrary.org/b/id/10909258-L.jpg",
    "description": "Une introduction accessible aux mystères fascinants de la physique quantique.",
    "stock": 9
  },
  {
    "id": 10,
    "title": "1984",
    "author": "George Orwell",
    "category": "roman",
    "price": 750,
    "rating": 4.9,
    "image": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    "description": "Un roman dystopique saisissant sur la surveillance totale et la manipulation de la vérité.",
    "stock": 22
  },
  {
    "id": 11,
    "title": "Cahier Oxford A4 (lot 5)",
    "author": null,
    "category": "papeterie",
    "price": 350,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=300&h=400&fit=crop",
    "description": "Lot de 5 cahiers Oxford grands carreaux, couverture rigide, 100 pages.",
    "stock": 50
  },
  {
    "id": 12,
    "title": "Stylos Bic (boîte 20)",
    "author": null,
    "category": "papeterie",
    "price": 280,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=400&fit=crop",
    "description": "Boîte de 20 stylos Bic cristal bleus, écriture fluide et durable.",
    "stock": 100
  }
];

let allProducts = [];
let currentCategory = "all";
let currentSearch = "";
let currentMaxPrice = 2500;
let currentSort = "default";

const urlParams = new URLSearchParams(window.location.search);
const urlCat = urlParams.get("cat");
if (urlCat) currentCategory = urlCat;

function initProducts() {
  allProducts = PRODUCTS_DATA;
  updateCategoryCounts();
  setActiveCategory(currentCategory);
  renderProducts();
}

function updateCategoryCounts() {
  const cats = ["all", "roman", "classique", "informatique", "sciences", "philosophie", "papeterie"];
  cats.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (!el) return;
    const count = cat === "all" ? allProducts.length : allProducts.filter(p => p.category === cat).length;
    el.textContent = count;
  });
}

function filterAndSort() {
  let products = [...allProducts];

  if (currentCategory !== "all") {
    products = products.filter(p => p.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    products = products.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.author && p.author.toLowerCase().includes(q))
    );
  }

  products = products.filter(p => p.price <= currentMaxPrice);

  switch (currentSort) {
    case "price-asc":  products.sort((a, b) => a.price - b.price); break;
    case "price-desc": products.sort((a, b) => b.price - a.price); break;
    case "rating":     products.sort((a, b) => b.rating - a.rating); break;
    case "title":      products.sort((a, b) => a.title.localeCompare(b.title)); break;
  }

  return products;
}

function renderProducts() {
  const products = filterAndSort();
  const grid = document.getElementById("products-grid");
  const noResults = document.getElementById("no-results");
  const countEl = document.getElementById("product-count");

  countEl.textContent = `${products.length} produit${products.length !== 1 ? "s" : ""} trouvé${products.length !== 1 ? "s" : ""}`;

  if (products.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <img class="product-img"
           src="${p.image}"
           alt="${p.title}"
           loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x200/F7F3ED/C8873A?text=📚'">
      <div class="product-body">
        <p class="product-category">${getCategoryEmoji(p.category)} ${p.category}</p>
        <h2 class="product-title">${p.title}</h2>
        ${p.author ? `<p class="product-author">par ${p.author}</p>` : ""}
        <p class="product-desc">${p.description}</p>
        <div class="star-rating">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))} ${p.rating}/5</div>
        <div class="product-footer">
          <div>
            <div class="product-price">${p.price.toLocaleString("fr-DZ")} <small>DA</small></div>
            <div class="stock-badge">✓ En stock (${p.stock})</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="addToCartFromPage(${p.id})">
            🛒 Ajouter
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function getCategoryEmoji(cat) {
  const map = { roman: "📖", classique: "🏛️", informatique: "💻", sciences: "🔬", philosophie: "🧠", papeterie: "✏️" };
  return map[cat] || "📚";
}

function setActiveCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".filter-option").forEach(el => {
    el.classList.toggle("active", el.dataset.cat === cat);
  });
  renderProducts();
}

function addToCartFromPage(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    Cart.add(product);
    showAlert(`"${product.title}" ajouté au panier !`);
    renderCartSidebar();
  }
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("open");
  renderCartSidebar();
}

function renderCartSidebar() {
  const items = Cart.get();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total-price");

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Votre panier est vide</p>
      </div>`;
    totalEl.textContent = "0 DA";
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}"
           onerror="this.src='https://via.placeholder.com/56x72/F7F3ED/C8873A?text=📚'">
      <div class="cart-item-info">
        <p class="cart-item-title">${item.title}</p>
        <p class="cart-item-price">${(item.price * item.qty).toLocaleString("fr-DZ")} DA</p>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="cart-remove" onclick="removeFromCart(${item.id})">🗑 Retirer</button>
        </div>
      </div>
    </div>
  `).join("");

  totalEl.textContent = `${Cart.total().toLocaleString("fr-DZ")} DA`;
}

function changeQty(id, delta) {
  const cart = Cart.get();
  const item = cart.find(i => i.id === id);
  if (item) {
    const newQty = item.qty + delta;
    if (newQty <= 0) Cart.remove(id);
    else Cart.updateQty(id, newQty);
  }
  renderCartSidebar();
}

function removeFromCart(id) {
  Cart.remove(id);
  renderCartSidebar();
}

document.addEventListener("DOMContentLoaded", () => {
  initProducts();

  document.querySelectorAll(".filter-option").forEach(el => {
    el.addEventListener("click", () => setActiveCategory(el.dataset.cat));
  });

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });

  const priceRange = document.getElementById("price-range");
  const priceLabel = document.getElementById("price-max-label");
  priceRange.addEventListener("input", (e) => {
    currentMaxPrice = parseInt(e.target.value);
    priceLabel.textContent = `${currentMaxPrice} DA`;
    renderProducts();
  });

  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
});

function resetFilters() {
  currentCategory = "all";
  currentSearch = "";
  currentMaxPrice = 2500;
  currentSort = "default";
  document.getElementById("search-input").value = "";
  document.getElementById("price-range").value = 2500;
  document.getElementById("price-max-label").textContent = "2500 DA";
  document.getElementById("sort-select").value = "default";
  setActiveCategory("all");
}
