// MOTION STREETWEAR - APPLICATION ENGINE

// 1. Database of Products
const PRODUCTS = [
  {
    id: 1,
    name: "MOTION Graphic Tee",
    price: 500.00,
    category: "apparel",
    image: "assets/black.jpg",
    images: ["assets/black.jpg", "assets/both.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Engineered with heavyweight organic cotton. Designed with a structured, relaxed boxy fit. Printed with the bold 'MOTION' signature manifesto chest print. Silent strength, built for the daily grind.",
    featured: false
  },
  {
    id: 2,
    name: "MOTION Summer Tee",
    price: 550.00,
    category: "apparel",
    image: "assets/summer tee.jpg",
    images: ["assets/summer tee.jpg", "assets/T1.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Crafted from 280gsm luxury combed cotton for a premium, heavy drop. Thick ribbed collar and clean drop shoulder profile. Simple but powerful, calm but relentless.",
    featured: false
  },
  {
    id: 4,
    name: "MOTION Distressed Trucker",
    price: 150.00,
    category: "headwear",
    image: "assets/trucker hat.jpg",
    images: ["assets/trucker hat.jpg", "assets/both.jpg"],
    sizing: ["One Size"],
    description: "Mid-profile distressed grey mesh trucker cap. Features a solid black stitched rectangular canvas patch on front. Breathable backing with washed vintage cotton panels.",
    featured: false
  },
  {
    id: 16,
    name: "MOTION 'EMOTION' Tee (Edition I)",
    price: 500.00,
    category: "apparel",
    image: "assets/XW1st.jpg",
    images: ["assets/XW1st.jpg", "assets/XW2nd.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Bold typographic statement piece: the word 'EMOTION' rendered with the E struck through, leaving MOTION standing alone. A signature graphic on stripping away the noise and running on instinct.",
    featured: true,
    shopVisible: false
  },
  {
    id: 5,
    name: "MOTION Graphic Tee (Back Print)",
    price: 500.00,
    category: "apparel",
    image: "assets/back.jpg",
    images: ["assets/back.jpg", "assets/both.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Premium organic cotton tee featuring the bold signature 'MOTION' manifesto screen print across the back. Clean aesthetic, engineered for relentless progress.",
    featured: false
  },
  {
    id: 6,
    name: "MOTION Graphic Tee (Front Print)",
    price: 500.00,
    category: "apparel",
    image: "assets/front.jpg",
    images: ["assets/front.jpg", "assets/both.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Heavyweight premium cotton tee with clean, front-facing signature 'MOTION' brand statement logo. Crafted for silent strength.",
    featured: false
  },
  {
    id: 7,
    name: "MOTION Graphic Tee (Both Sides)",
    price: 500.00,
    category: "apparel",
    image: "assets/both.jpg",
    images: ["assets/both.jpg", "assets/black.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Double-sided showcase of the signature MOTION collection. Highlights both the front identity mark and the full back brand manifesto.",
    featured: false
  },
  {
    id: 8,
    name: "MOTION 'EMOTION' Tee (Edition II)",
    price: 500.00,
    category: "apparel",
    image: "assets/XW2nd.jpg",
    images: ["assets/customer.jpg", "assets/customer 2.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "The second take on the EMOTION wordmark — E crossed out, MOTION left to speak for itself. Same statement, different angle.",
    featured: true,
    shopVisible: false
  },
  {
    id: 9,
    name: "MOTION Summer Tee (White)",
    price: 500.00,
    category: "apparel",
    image: "assets/SummerW.jpg",
    images: ["assets/b2.jpg", "assets/customer 2.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight warm-weather tee in clean white. Built for the heat without losing the signature MOTION drop-shoulder silhouette.",
    featured: true,
    shopVisible: false
  },
  {
    id: 10,
    name: "MOTION Minimalist Tee",
    price: 500.00,
    category: "apparel",
    image: "assets/T1.jpg",
    images: ["assets/T1.jpg", "assets/summer tee.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Sleek minimalist edition graphic tee showing off classic clean lines and signature branding. Part of our core daily rotation.",
    featured: false
  },
  {
    id: 11,
    name: "MOTION Summer Tee (Black)",
    price: 500.00,
    category: "apparel",
    image: "assets/SummerB.jpg",
    images: ["assets/branding.jpg", "assets/b3.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight warm-weather tee in classic black. Built for the heat without losing the signature MOTION drop-shoulder silhouette.",
    featured: true,
    shopVisible: false
  },
  {
    id: 12,
    name: "MOTION Club Top (Look I)",
    price: 500.00,
    category: "apparel",
    image: "assets/club1.jpg",
    images: ["assets/mockup black.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "The MOTION Club Top — built for nights that move fast. Fitted silhouette designed for the floor, signature branding included.",
    featured: true,
    shopVisible: false
  },
  {
    id: 13,
    name: "MOTION Club Top (Look II)",
    price: 500.00,
    category: "apparel",
    image: "assets/club2.jpg",
    images: ["assets/mockup white.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "The MOTION Club Top, second look — same fitted silhouette built for the floor, styled for a different night out.",
    featured: true,
    shopVisible: false
  },
  {
    id: 14,
    name: "MOTION Flower Edition (Black)",
    price: 500.00,
    category: "apparel",
    image: "assets/flower b.jpg",
    images: ["assets/flower b.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Limited flower-print edition in black. Bold botanical detailing meets the signature MOTION silhouette.",
    featured: true,
    shopVisible: false
  },
  {
    id: 15,
    name: "MOTION Flower Edition (White)",
    price: 500.00,
    category: "apparel",
    image: "assets/flower w.jpg",
    images: ["assets/flower w.jpg"],
    sizing: ["S", "M", "L", "XL", "XXL"],
    description: "Limited flower-print edition in white. Bold botanical detailing meets the signature MOTION silhouette.",
    featured: true,
    shopVisible: false
  },

];

// Images shown in the Shop's "NEW ARRIVALS" filter until real new-arrival
// products are added. Swap these paths to real teaser/mockup images anytime.
const NEW_ARRIVALS_TEASER_IMAGES = ["assets/prettygirl w.jpg", "assets/prettygirl b.jpg"];

// Paystack Configuration
// NOTE: This is your LIVE public key — real transactions will be charged.
// Switch to your pk_test_... key while you're still testing the flow.
const PAYSTACK_PUBLIC_KEY = "pk_live_2edaf67ecb1be342813419cf2e1a495f4a016c0f";
let selectedPaymentMethod = "";

function selectCheckoutPayment(method, labelEl) {
  selectedPaymentMethod = method;
  document.querySelectorAll(".pay-option-label").forEach(l => l.classList.remove("selected"));
  labelEl.classList.add("selected");
  labelEl.querySelector("input[type='radio']").checked = true;
}

// 2. Application State
let cart = [];
let activePage = "home";
let selectedProduct = null;
let selectedSize = "";

// 3. Document Elements
const elMainContent = document.getElementById("main-content");
const elNavLinks = document.querySelectorAll(".nav-menu .nav-link");
const elBrandLogo = document.getElementById("nav-brand");
const elCartCountLabels = document.querySelectorAll(".cart-count");
const elCartDrawer = document.getElementById("cart-drawer");
const elCartOverlay = document.getElementById("cart-overlay");
const elCartItemsContainer = document.getElementById("cart-items-container");
const elCartTotalLabel = document.querySelector(".cart-total");
const elCheckoutTriggerBtn = document.getElementById("checkout-trigger-btn");

const elProductModal = document.getElementById("product-modal");
const elProductModalDetail = document.getElementById("modal-product-detail");

const elCheckoutModal = document.getElementById("checkout-modal");
const elCheckoutForm = document.getElementById("checkout-form");
const elCheckoutSummaryItems = document.getElementById("checkout-summary-items");
const elCheckoutSubtotalVal = document.querySelector(".checkout-subtotal-val");
const elCheckoutTotalVal = document.querySelectorAll(".checkout-total-val");

const elSuccessModal = document.getElementById("success-modal");
const elOrderNumberLabel = document.getElementById("order-number");

// 4. Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// Load and Save Cart Local Storage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("motion_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Could not load cart data", e);
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("motion_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart data", e);
  }
}

const GALLERY_IMAGES = [
  "assets/customer.jpg",
  "assets/g4.jpg",
  "assets/g8.jpg",
  "assets/g6.jpg",
  "assets/g10.jpg",
  "assets/customer 2.jpg",
  "assets/g back.jpg",
  "assets/g5.jpg",
  "assets/g9.jpg",
  "assets/cap on.jpg",
  "assets/g1.jpg",
  "assets/g11.jpg",
  "assets/ga1.jpg",
  "assets/ga2.jpg",
  "assets/ga3.jpg",
  "assets/ga4.jpg",
];

function renderProducts() {
  const elFeaturedGrid = document.getElementById("featured-products");
  const elShopGrid = document.getElementById("shop-products");
  const elGalleryGrid = document.getElementById("gallery-products");

  if (elFeaturedGrid) {
    elFeaturedGrid.innerHTML = PRODUCTS
      .filter(p => p.featured)
      .map(p => generateFeaturedCardHTML(p))
      .join("");
  }

  if (elShopGrid) {
    elShopGrid.innerHTML = PRODUCTS
      .filter(p => p.shopVisible !== false)
      .map(p => generateProductCardHTML(p))
      .join("");
  }

  if (elGalleryGrid) {
    elGalleryGrid.innerHTML = GALLERY_IMAGES.map((imgUrl, idx) => `
      <div class="product-card featured-card" onclick="viewGalleryImage('${imgUrl}')">
        <div class="product-image-wrap">
          <img src="${imgUrl}" alt="Gallery Image ${idx + 1}" class="product-image" loading="lazy">
        </div>
      </div>
    `).join("");
  }
}

function viewGalleryImage(imgUrl) {
  elProductModalDetail.innerHTML = `
    <div style="
      grid-column: 1 / -1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: #1a1a1f;
      margin-top: 1.5rem;
    ">
      <img src="${imgUrl}" alt="Gallery Image"
           style="
             width: 100%;
             max-height: 75vh;
             object-fit: contain;
             display: block;
           ">
    </div>
  `;

  elProductModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function generateProductCardHTML(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-wrap" onclick="viewProductDetails(${product.id})">
        <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${product.id === 1 ? '<span class="product-badge">BESTSELLER</span>' : ''}
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name" onclick="viewProductDetails(${product.id})">${product.name}</h3>
        <div class="product-sizes">
          ${product.sizing.map(size => `<span class="size-tag">${size}</span>`).join("")}
        </div>
        <div class="product-price-row">
          <span class="product-price">GHS ${product.price.toFixed(2)}</span>
          <button class="btn btn-outline product-card-btn" onclick="viewProductDetails(${product.id})">
            SELECT SIZE
          </button>
        </div>
      </div>
    </div>
  `;
}

function generateFeaturedCardHTML(product) {
  return `
    <div class="product-card featured-card" data-id="${product.id}" onclick="viewFeaturedImage(${product.id})">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${product.id === 1 ? '<span class="product-badge">BESTSELLER</span>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
      </div>
    </div>
  `;
}

// Placeholder cards shown in the "NEW ARRIVALS" shop filter until real
// new-arrival products exist. Not clickable — just a teaser + tag.
function generateComingSoonCardHTML() {
  return NEW_ARRIVALS_TEASER_IMAGES.map(imgUrl => `
    <div class="product-card coming-soon-card">
      <div class="product-image-wrap">
        <img src="${imgUrl}" alt="New Arrivals — Coming Soon" class="product-image" loading="lazy">
        <span class="product-badge coming-soon-badge">COMING SOON</span>
      </div>
      <div class="product-info">
        <span class="product-category">new arrivals</span>
        <h3 class="product-name">Next Drop Loading</h3>
        <p class="coming-soon-text">New pieces are on the way. Check back soon or join the newsletter to get notified first.</p>
      </div>
    </div>
  `).join("");
}

function filterShopProducts(filter = "all") {
  const elShopGrid = document.getElementById("shop-products");
  if (!elShopGrid) return;

  if (filter === "new") {
    const newArrivals = PRODUCTS.filter(p => p.shopVisible !== false && p.category === "new");
    elShopGrid.innerHTML = newArrivals.length
      ? newArrivals.map(p => generateProductCardHTML(p)).join("")
      : generateComingSoonCardHTML();
    return;
  }

  const filtered = PRODUCTS.filter(p => {
    if (p.shopVisible === false) return false;
    if (filter === "all") return true;
    return p.category === filter;
  });

  elShopGrid.innerHTML = filtered.length
    ? filtered.map(p => generateProductCardHTML(p)).join("")
    : `<p class="empty-shop-message">No products found in this category.</p>`;
}

// 6. Navigation Router
function navigateTo(pageId, categoryFilter = "all") {
  document.querySelectorAll(".page-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const elTargetSec = document.getElementById(`section-${pageId}`);
  if (elTargetSec) {
    elTargetSec.classList.add("active");
    window.scrollTo(0, 0);
  }

  elNavLinks.forEach(link => {
    if (link.getAttribute("data-target") === pageId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (pageId === "shop") {
    const elFilterButtons = document.querySelectorAll(".filter-btn");
    elFilterButtons.forEach(btn => {
      if (btn.getAttribute("data-filter") === categoryFilter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    filterShopProducts(categoryFilter);
  }

  activePage = pageId;
}

// 7. Product Modal Details View
function viewProductDetails(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  selectedProduct = product;
  selectedSize = product.sizing[0] || "One Size";

  const sizePillsHTML = product.sizing.map(size => {
    return `
      <button class="size-pill ${size === selectedSize ? 'active' : ''}" 
              onclick="selectSize('${size}', this)">
        ${size}
      </button>
    `;
  }).join("");

  const productImages = product.images || [product.image];
  let galleryHTML = "";
  if (productImages.length > 1) {
    galleryHTML = `
      <div class="modal-thumbnails" style="display: flex; gap: 0.5rem; margin-top: 1rem; overflow-x: auto;">
        ${productImages.map((imgUrl, idx) => `
          <img src="${imgUrl}" alt="${product.name} View ${idx + 1}" 
               class="modal-thumb ${imgUrl === product.image ? 'active' : ''}" 
               style="width: 65px; height: 65px; object-fit: cover; border: 1px solid var(--color-border); cursor: pointer; transition: border-color var(--transition-fast);"
               onclick="changeModalMainImage('${imgUrl}', this)">
        `).join("")}
      </div>
    `;
  }

  elProductModalDetail.innerHTML = `
    <div class="modal-images-container" style="display: flex; flex-direction: column;">
      <div class="modal-images" style="background-color: #1a1a1f; aspect-ratio: 1/1; overflow: hidden; position: relative;">
        <img src="${product.image}" alt="${product.name}" class="modal-main-img" id="modal-main-image-el" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      ${galleryHTML}
    </div>
    <div class="modal-info">
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-price">GHS ${product.price.toFixed(2)}</div>
      <p class="modal-desc">${product.description}</p>
      <div class="sizing-section">
        <span class="sizing-title">SIZE</span>
        <div class="sizing-grid">
          ${sizePillsHTML}
        </div>
      </div>
      <button class="btn btn-primary btn-block mt-4" onclick="addProductFromModal()">
        ADD TO BAG
      </button>
    </div>
  `;

  elProductModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeModalMainImage(imgUrl, thumbElement) {
  const mainImg = document.getElementById("modal-main-image-el");
  if (mainImg) {
    mainImg.src = imgUrl;
  }

  const thumbs = elProductModalDetail.querySelectorAll(".modal-thumb");
  thumbs.forEach(t => t.classList.remove("active"));
  thumbElement.classList.add("active");
}

function selectSize(size, element) {
  selectedSize = size;
  const pills = elProductModalDetail.querySelectorAll(".size-pill");
  pills.forEach(p => p.classList.remove("active"));
  element.classList.add("active");
}

function closeProductModal() {
  elProductModal.classList.remove("active");
  document.body.style.overflow = "";
  selectedProduct = null;
}


// Featured Quick View with Swipe
let featuredProducts = [];
let currentFeaturedIndex = 0;

function viewFeaturedImage(id) {
  featuredProducts = PRODUCTS.filter(p => p.featured);
  currentFeaturedIndex = featuredProducts.findIndex(p => p.id === id);

  renderFeaturedModal();

  elProductModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderFeaturedModal() {
  const product = featuredProducts[currentFeaturedIndex];
  const total = featuredProducts.length;

  elProductModalDetail.innerHTML = `
    <div style="
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
    ">

      <!-- Navigation Arrows -->
      <button onclick="swipeFeatured(-1)" style="
        position: absolute; left: 0; top: 50%; transform: translateY(-50%);
        background: rgba(255,255,255,0.05); border: 1px solid var(--color-border);
        color: var(--color-text); width: 40px; height: 40px;
        cursor: pointer; z-index: 10; font-size: 1.1rem;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.2s;
      ">&#8592;</button>

      <button onclick="swipeFeatured(1)" style="
        position: absolute; right: 0; top: 50%; transform: translateY(-50%);
        background: rgba(255,255,255,0.05); border: 1px solid var(--color-border);
        color: var(--color-text); width: 40px; height: 40px;
        cursor: pointer; z-index: 10; font-size: 1.1rem;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.2s;
      ">&#8594;</button>

      <!-- Image -->
      <div id="featured-modal-image-wrap" style="
        background: #1a1a1f;
        width: 100%;
        max-width: 480px;
        overflow: hidden;
        margin: 1.5rem auto 0;
      ">
        <img id="featured-modal-img" src="${product.image}" alt="${product.name}"
             style="width: 100%; max-height: 65vh; object-fit: contain; display: block;
                    transition: opacity 0.25s ease;">
      </div>

      <!-- Product Info -->
      <div style="text-align: center; padding: 1.5rem 2rem;">
        <h2 style="font-family: var(--font-heading); font-size: 1.1rem; letter-spacing: 0.12em; margin-bottom: 0.5rem;">
          ${product.name}
        </h2>
        <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.7; max-width: 420px; margin: 0 auto 1rem;">
          ${product.description}
        </p>
        <div style="font-family: var(--font-heading); font-size: 0.95rem; letter-spacing: 0.1em; margin-bottom: 1.2rem;">
          GHS ${product.price.toFixed(2)}
        </div>
        <button class="btn btn-primary" onclick="closeProductModal(); viewProductDetails(${product.id})"
                style="letter-spacing: 0.1em; padding: 0.75rem 2rem;">
          SELECT SIZE
        </button>
      </div>

      <!-- Dot Indicators -->
      <div style="display: flex; gap: 0.4rem; margin-bottom: 1rem;">
        ${featuredProducts.map((_, i) => `
          <span onclick="goToFeatured(${i})" style="
            width: 6px; height: 6px; border-radius: 50%;
            background: ${i === currentFeaturedIndex ? 'var(--color-text)' : 'var(--color-border)'};
            cursor: pointer; transition: background 0.2s;
          "></span>
        `).join("")}
      </div>

    </div>
  `;

  // Touch/swipe support
  const wrap = document.getElementById("featured-modal-image-wrap");
  if (wrap) {
    let touchStartX = 0;
    wrap.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrap.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        swipeFeatured(diff > 0 ? 1 : -1);
      }
    }, { passive: true });
  }
}

function swipeFeatured(direction) {
  const total = featuredProducts.length;
  currentFeaturedIndex = (currentFeaturedIndex + direction + total) % total;

  const img = document.getElementById("featured-modal-img");
  if (img) {
    img.style.opacity = 0;
    setTimeout(() => {
      renderFeaturedModal();
    }, 200);
  } else {
    renderFeaturedModal();
  }
}

function goToFeatured(index) {
  currentFeaturedIndex = index;
  renderFeaturedModal();
}

function addProductFromModal() {
  if (!selectedProduct) return;

  addToCart(selectedProduct.id, selectedSize, 1);
  closeProductModal();
  openCart();
}

// 8. Cart Logic
function addToCart(id, size, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === id && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      qty: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(id, size) {
  cart = cart.filter(item => !(item.id === id && item.size === size));
  saveCartToStorage();
  updateCartUI();
}

function updateQty(id, size, delta) {
  const item = cart.find(item => item.id === id && item.size === size);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id, size);
  } else {
    saveCartToStorage();
    updateCartUI();
  }
}

function updateCartUI() {
  const totalItemsCount = cart.reduce((total, item) => total + item.qty, 0);
  const subTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  elCartCountLabels.forEach(lbl => {
    lbl.textContent = totalItemsCount;
  });

  elCartTotalLabel.textContent = `GHS ${subTotal.toFixed(2)}`;

  if (totalItemsCount > 0) {
    elCheckoutTriggerBtn.removeAttribute("disabled");
  } else {
    elCheckoutTriggerBtn.setAttribute("disabled", "true");
  }

  if (cart.length === 0) {
    elCartItemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>YOUR BAG IS EMPTY</p>
        <button class="btn btn-primary mt-3" onclick="closeCart(); navigateTo('shop')">START SHOPPING</button>
      </div>
    `;
  } else {
    elCartItemsContainer.innerHTML = cart.map(item => {
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-meta">Size: ${item.size}</div>
            <div class="cart-item-actions">
              <div class="qty-selector">
                <button class="qty-btn" onclick="updateQty(${item.id}, '${item.size}', -1)" aria-label="Decrease quantity">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, '${item.size}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="remove-item-btn" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
            </div>
          </div>
          <div class="cart-item-price">GHS ${(item.price * item.qty).toFixed(2)}</div>
        </div>
      `;
    }).join("");
  }
}

function openCart() {
  elCartDrawer.classList.add("active");
  elCartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  elCartDrawer.classList.remove("active");
  elCartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// 9. Checkout Flow
// NOTE: The real checkout form (name/email/address/payment method picker) already
// lives in index.html — we do NOT overwrite elCheckoutForm.innerHTML here anymore.
// We just populate the order summary and reset the payment-method selection.
function openCheckoutModal() {
  if (cart.length === 0) return;

  closeCart();

  const subTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  elCheckoutSummaryItems.innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-summary-item-info">
        <h4>${item.name}</h4>
        <p>Size: ${item.size} | Qty: ${item.qty}</p>
      </div>
      <div class="checkout-summary-item-price">GHS ${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join("");

  elCheckoutSubtotalVal.textContent = `GHS ${subTotal.toFixed(2)}`;
  elCheckoutTotalVal.forEach(val => {
    val.textContent = `GHS ${subTotal.toFixed(2)}`;
  });

  // Reset payment method selection each time checkout opens
  selectedPaymentMethod = "";
  document.querySelectorAll(".pay-option-label").forEach(l => l.classList.remove("selected"));

  elCheckoutModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  elCheckoutModal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const firstName = document.getElementById("c-first-name").value.trim();
  const lastName = document.getElementById("c-last-name").value.trim();
  const email = document.getElementById("c-email").value.trim();
  const address = document.getElementById("c-address").value.trim();
  const city = document.getElementById("c-city").value.trim();
  const region = document.getElementById("c-region").value;

  if (!firstName || !lastName) {
    alert("Please enter your full name.");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    document.getElementById("c-email").focus();
    return;
  }
  if (!address) {
    alert("Please enter your shipping address.");
    document.getElementById("c-address").focus();
    return;
  }
  if (!city) {
    alert("Please enter your city.");
    document.getElementById("c-city").focus();
    return;
  }
  if (!region) {
    alert("Please select your region.");
    document.getElementById("c-region").focus();
    return;
  }
  if (!selectedPaymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  const subTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const amountInPesewas = Math.round(subTotal * 100); // Paystack expects the smallest currency unit

  const channels = (selectedPaymentMethod === "visa" || selectedPaymentMethod === "mastercard")
    ? ["card"]
    : ["mobile_money"];

  const placeBtn = document.getElementById("place-order-btn");
  const origBtnHTML = placeBtn.innerHTML;
  placeBtn.textContent = "OPENING SECURE PAYMENT...";
  placeBtn.disabled = true;

  const orderRef = "MOTION-" + Math.floor(Date.now() / 1000) + "-" + Math.floor(Math.random() * 10000);

  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: amountInPesewas,
    currency: "GHS",
    channels: channels,
    ref: orderRef,
    metadata: {
      custom_fields: [
        { display_name: "Customer Name", variable_name: "customer_name", value: firstName + " " + lastName },
        { display_name: "Shipping Address", variable_name: "shipping_address", value: address + ", " + city + ", " + region }
      ]
    },
    callback: function (response) {
      handlePaymentSuccess(response.reference);
    },
    onClose: function () {
      placeBtn.innerHTML = origBtnHTML;
      placeBtn.disabled = false;
    }
  });

  handler.openIframe();
}

function handlePaymentSuccess(reference) {
  elOrderNumberLabel.textContent = reference;

  cart = [];
  saveCartToStorage();
  updateCartUI();

  closeCheckoutModal();
  elSuccessModal.classList.add("active");
  document.body.style.overflow = "hidden";

  elCheckoutForm.reset();
  selectedPaymentMethod = "";
  document.querySelectorAll(".pay-option-label").forEach(l => l.classList.remove("selected"));

  const placeBtn = document.getElementById("place-order-btn");
  if (placeBtn) {
    placeBtn.disabled = false;
    placeBtn.innerHTML = `PLACE ORDER — <span class="checkout-total-val">GHS 0.00</span>`;
  }
}

function closeSuccessModal() {
  elSuccessModal.classList.remove("active");
  document.body.style.overflow = "";
  navigateTo("home");
}

// 11. Support Modal
function openSupportModal() {
  document.getElementById("support-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSupportModal() {
  document.getElementById("support-modal").classList.remove("active");
  document.body.style.overflow = "";
}

// 12. Terms Modal
function openTermsModal() {
  document.getElementById("terms-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeTermsModal() {
  document.getElementById("terms-modal").classList.remove("active");
  document.body.style.overflow = "";
}

// 13. Mobile Sidebar
function openSidebar() {
  document.getElementById("mobile-sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("active");
  document.getElementById("hamburger-btn").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("mobile-sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("active");
  document.getElementById("hamburger-btn").classList.remove("open");
  document.body.style.overflow = "";
}

// 10. Core Setup & Global Listeners
function setupEventListeners() {
  elNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      navigateTo(target);
    });
  });

  // Hamburger
  const btnHamburger = document.getElementById("hamburger-btn");
  if (btnHamburger) {
    btnHamburger.addEventListener("click", () => {
      const isOpen = document.getElementById("mobile-sidebar").classList.contains("open");
      isOpen ? closeSidebar() : openSidebar();
    });
  }

  // Sidebar overlay click to close
  const elSidebarOverlay = document.getElementById("sidebar-overlay");
  if (elSidebarOverlay) {
    elSidebarOverlay.addEventListener("click", closeSidebar);
  }

  if (elBrandLogo) {
    elBrandLogo.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("home");
    });
  }

  const btnCartToggle = document.getElementById("cart-toggle-btn");
  if (btnCartToggle) {
    btnCartToggle.addEventListener("click", openCart);
  }

  const btnCartClose = document.getElementById("cart-close-btn");
  if (btnCartClose) {
    btnCartClose.addEventListener("click", closeCart);
  }

  if (elCartOverlay) {
    elCartOverlay.addEventListener("click", closeCart);
  }

  document.querySelectorAll("#product-modal .modal-close").forEach(btn => {
    btn.addEventListener("click", closeProductModal);
  });

  const elProductModalOverlay = document.getElementById("product-modal");
  if (elProductModalOverlay) {
    elProductModalOverlay.addEventListener("click", (e) => {
      if (e.target === elProductModalOverlay) {
        closeProductModal();
      }
    });
  }

  const btnCheckoutClose = document.getElementById("checkout-close-btn");
  if (btnCheckoutClose) {
    btnCheckoutClose.addEventListener("click", closeCheckoutModal);
  }

  const elCheckoutOverlay = document.getElementById("checkout-modal");
  if (elCheckoutOverlay) {
    elCheckoutOverlay.addEventListener("click", (e) => {
      if (e.target === elCheckoutOverlay) {
        closeCheckoutModal();
      }
    });
  }

  const btnSuccessClose = document.getElementById("success-close-btn");
  if (btnSuccessClose) {
    btnSuccessClose.addEventListener("click", closeSuccessModal);
  }

  const elSuccessOverlay = document.getElementById("success-modal");
  if (elSuccessOverlay) {
    elSuccessOverlay.addEventListener("click", (e) => {
      if (e.target === elSuccessOverlay) {
        closeSuccessModal();
      }
    });
  }

  if (elCheckoutForm) {
    elCheckoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  if (elCheckoutTriggerBtn) {
    elCheckoutTriggerBtn.addEventListener("click", openCheckoutModal);
  }

  const elShopGrid = document.getElementById("shop-products");
  if (elShopGrid) {
    const elFilterButtons = document.querySelectorAll(".filter-btn");
    elFilterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        elFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        filterShopProducts(filter);
      });
    });
  }

  const elNewsletterForm = document.querySelector(".newsletter-form");
  if (elNewsletterForm) {
    elNewsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }

  // Support & Terms triggers
  document.querySelectorAll("[data-open='support']").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); openSupportModal(); });
  });

  document.querySelectorAll("[data-open='terms']").forEach(el => {
    el.addEventListener("click", (e) => { e.preventDefault(); openTermsModal(); });
  });

  // Support close
  const btnSupportClose = document.getElementById("support-close-btn");
  if (btnSupportClose) btnSupportClose.addEventListener("click", closeSupportModal);

  // Terms close
  const btnTermsClose = document.getElementById("terms-close-btn");
  if (btnTermsClose) btnTermsClose.addEventListener("click", closeTermsModal);

  // Close on overlay click
  const elSupportOverlay = document.getElementById("support-modal");
  if (elSupportOverlay) {
    elSupportOverlay.addEventListener("click", (e) => {
      if (e.target === elSupportOverlay) closeSupportModal();
    });
  }

  const elTermsOverlay = document.getElementById("terms-modal");
  if (elTermsOverlay) {
    elTermsOverlay.addEventListener("click", (e) => {
      if (e.target === elTermsOverlay) closeTermsModal();
    });
  }
}

async function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector("input[type='email']");
  const email = input.value.trim();

  if (!email) return;

  const btn = form.querySelector("button");
  const origBtnContent = btn.innerHTML;
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
  btn.disabled = true;

  const EMAILJS_SERVICE_ID = "service_ryowuvs";
  const EMAILJS_TEMPLATE_ID = "template_sshit0i";      // sends to subscriber
  const EMAILJS_NOTIFY_TEMPLATE_ID = "template_sshit0i"; // sends to you
  const EMAILJS_PUBLIC_KEY = "T9WmuW7RoPTqPq7V0";

  let emailSent = false;

  if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: email,
            reply_to: "no-reply@motion.clothing",
            message: "Welcome to the MOTION movement. Relentless hustle and discipline. Stay on motion."
          }
        })
      });

      if (response.ok) {
        emailSent = true;
        console.log(`Real email sent successfully to ${email}`);
      } else {
        console.error("EmailJS Error Response:", await response.text());
      }
    } catch (err) {
      console.error("Email delivery failed:", err);
    }
  } else {
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log(`[Simulation Mode] Welcome email sent to: ${email}`);
    console.log("Configure your EmailJS keys inside app.js (handleNewsletterSubmit) to send real emails.");
  }

  btn.innerHTML = origBtnContent;
  btn.disabled = false;

  try {
    let subscribers = [];
    const saved = localStorage.getItem("motion_subscribers");
    if (saved) {
      subscribers = JSON.parse(saved);
    }
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem("motion_subscribers", JSON.stringify(subscribers));
    }
  } catch (err) {
    console.error("Could not save subscriber", err);
  }

  const container = document.querySelector(".footer-newsletter");
  if (container) {
    container.style.opacity = 0;
    container.style.transition = "opacity 0.3s ease";

    setTimeout(() => {
      container.innerHTML = `
        <div class="newsletter-success" style="animation: fadeIn 0.4s ease forwards;">
          <i class="fa-solid fa-circle-check" style="font-size: 1.8rem; margin-bottom: 1rem; color: var(--color-accent);"></i>
          <h3 style="font-size: 1.1rem; letter-spacing: 0.15em; margin-bottom: 0.5rem;">WELCOME TO THE MOVEMENT</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5;">Your email <strong>${escapeHtml(email)}</strong> has been registered. Stay on motion.</p>
        </div>
      `;
      container.style.opacity = 1;
    }, 300);
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}