
function loadFeaturedProducts() {
  const featured = PRODUCTS_DATA.slice(0, 4);
  const grid = document.getElementById("featured-products");
  if (!grid) return;

  grid.innerHTML = featured.map(p => `
    <div class="product-card">
      <img class="product-img" src="${p.image}" alt="${p.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x220/F7F3ED/C8873A?text=📚'">
      <div class="product-body">
        <p class="product-category">${p.category}</p>
        <h3 class="product-title">${p.title}</h3>
        ${p.author ? `<p class="product-author">${p.author}</p>` : ''}
        <div class="product-footer">
          <div>
            <div class="product-price">${p.price} <span>DA</span></div>
            <div class="star-rating">${"★".repeat(Math.round(p.rating))} ${p.rating}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="addToCartIndex(${p.id})">+ Panier</button>
        </div>
      </div>
    </div>
  `).join("");
}

function addToCartIndex(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (product) {
    Cart.add(product);
    showAlert(`"${product.title}" ajouté au panier !`);
  }
}

document.addEventListener("DOMContentLoaded", loadFeaturedProducts);
