const AURACAL = {
  products: [
    {
      id: "aura-shell-01",
      name: "AeroShell Parka",
      category: "Outerwear",
      price: 428,
      badge: "Waterproof",
      description: "Recycled nylon shell with sealed seams, quiet handfeel, and pack-flat storm hood.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Obsidian", value: "#151515" },
        { name: "Fog", value: "#d8d8d1" }
      ],
      featured: true,
      release: 10
    },
    {
      id: "aura-knit-02",
      name: "ThermaGrid Knit",
      category: "Base",
      price: 168,
      badge: "Mono-fiber",
      description: "Thermal grid pullover with breathable loft and a soft matte surface.",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Bone", value: "#ece9df" },
        { name: "Carbon", value: "#262724" }
      ],
      featured: true,
      release: 8
    },
    {
      id: "aura-trouser-03",
      name: "Vector Utility Trouser",
      category: "Travel",
      price: 238,
      badge: "4-way stretch",
      description: "Tapered modular trouser with invisible cargo storage and articulated knees.",
      image: "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Graphite", value: "#3c3f3b" },
        { name: "Moss", value: "#6f7f6a" }
      ],
      featured: true,
      release: 9
    },
    {
      id: "aura-vest-04",
      name: "Flux Insulated Vest",
      category: "Outerwear",
      price: 286,
      badge: "Plant fill",
      description: "Low-bulk warmth layer with recycled ripstop face and bio-based insulation.",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Ink", value: "#111111" },
        { name: "Sage", value: "#8ea58c" }
      ],
      featured: true,
      release: 7
    },
    {
      id: "aura-tee-05",
      name: "Circuit Merino Tee",
      category: "Base",
      price: 118,
      badge: "Traceable wool",
      description: "Ultrafine merino blend with bonded shoulder seams and natural odor control.",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "White", value: "#f6f4ec" },
        { name: "Night", value: "#181818" },
        { name: "Clay", value: "#bf7a55" }
      ],
      featured: false,
      release: 6
    },
    {
      id: "aura-coat-06",
      name: "Halo Field Coat",
      category: "Outerwear",
      price: 512,
      badge: "Seam sealed",
      description: "Longline technical coat with magnetic storm placket and detachable thermal liner.",
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Black", value: "#0c0c0c" },
        { name: "Stone", value: "#bab8ad" }
      ],
      featured: false,
      release: 11
    },
    {
      id: "aura-short-07",
      name: "Transit Air Short",
      category: "Travel",
      price: 154,
      badge: "Packable",
      description: "Quick-dry travel short with laser-cut vents and a hidden passport pocket.",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Slate", value: "#49504d" },
        { name: "Sand", value: "#c8c0ae" }
      ],
      featured: false,
      release: 5
    },
    {
      id: "aura-bag-08",
      name: "Orbit Sling Pack",
      category: "Accessories",
      price: 132,
      badge: "Recycled TPU",
      description: "Weatherproof crossbody storage with low-profile compression and soft-touch strap.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=70&sat=-60",
      colors: [
        { name: "Black", value: "#101010" },
        { name: "Mist", value: "#d5d8d2" }
      ],
      featured: false,
      release: 4
    },
    {
      id: "aura-cap-09",
      name: "SolarShield Cap",
      category: "Accessories",
      price: 82,
      badge: "UPF 50",
      description: "Featherweight cap with reflective rear cinch and plant-based water repellency.",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Cinder", value: "#2d2d2b" },
        { name: "Lime", value: "#d8ff64" }
      ],
      featured: false,
      release: 3
    },
    {
      id: "aura-overshirt-10",
      name: "Phase Overshirt",
      category: "Travel",
      price: 226,
      badge: "Wrinkle shed",
      description: "Structured overshirt with snap-close modules and a smooth recycled twill face.",
      image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=86",
      colors: [
        { name: "Drift", value: "#d7d1c2" },
        { name: "Pine", value: "#384237" }
      ],
      featured: false,
      release: 12
    }
  ],
  sizes: [
    { size: "XS", chest: [82, 88], waist: [66, 72], hip: [84, 90], height: [156, 166] },
    { size: "S", chest: [88, 94], waist: [72, 78], hip: [90, 96], height: [164, 174] },
    { size: "M", chest: [94, 102], waist: [78, 86], hip: [96, 104], height: [172, 182] },
    { size: "L", chest: [102, 110], waist: [86, 94], hip: [104, 112], height: [180, 190] },
    { size: "XL", chest: [110, 120], waist: [94, 104], hip: [112, 122], height: [186, 198] },
    { size: "XXL", chest: [120, 132], waist: [104, 116], hip: [122, 134], height: [192, 206] }
  ],
  cartKey: "auracal.cart.v1"
};

const selectors = {
  header: "[data-site-header]",
  navToggle: "[data-nav-toggle]",
  navPanel: "[data-nav-panel]",
  cartCount: "[data-cart-count]",
  featuredProducts: "[data-featured-products]",
  shopProducts: "[data-shop-products]",
  shopCount: "[data-shop-count]",
  shopSort: "[data-shop-sort]",
  blogCount: "[data-blog-count]",
  sizeTable: "[data-size-table]",
  toast: "[data-toast]"
};

let toastTimer;
let activeModal = null;

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  renderFeaturedProducts();
  initializeShopPage();
  initializeBlogPage();
  initializeAuthPage();
  initializeContactPage();
  initializeScrollEffects();
  initializePageTransitions();
  initializeModals();
  initializeFitTool();
  initializeSizeChart();
  initializeNewsletter();
  renderCartPage();
  updateCartCount();
});

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(AURACAL.cartKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(AURACAL.cartKey, JSON.stringify(cart));
  updateCartCount();
  renderCartPage();
}

function addToCart(productId, quantity = 1) {
  const product = AURACAL.products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  const product = AURACAL.products.find((item) => item.id === productId);
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  showToast(`${product ? product.name : "Item"} removed`);
}

function updateCartQuantity(productId, quantity) {
  const safeQuantity = Math.max(1, Number(quantity) || 1);
  const cart = getCart().map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: safeQuantity };
    }

    return item;
  });

  saveCart(cart);
}

function stepCartQuantity(productId, step) {
  const cartItem = getCart().find((item) => item.id === productId);

  if (!cartItem) {
    return;
  }

  updateCartQuantity(productId, cartItem.quantity + step);
}

function clearCart() {
  saveCart([]);
  showToast("Cart cleared");
}

function getCartSummary() {
  const lines = getCart()
    .map((item) => {
      const product = AURACAL.products.find((entry) => entry.id === item.id);
      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity
      };
    })
    .filter(Boolean);

  const subtotal = lines.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal > 0 && subtotal < 350 ? 18 : 0;
  const tax = subtotal * 0.08;

  return {
    lines,
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax
  };
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(selectors.cartCount).forEach((element) => {
    element.textContent = count;
  });
}

function renderFeaturedProducts() {
  const grid = document.querySelector(selectors.featuredProducts);

  if (!grid) {
    return;
  }

  grid.innerHTML = AURACAL.products
    .filter((product) => product.featured)
    .slice(0, 4)
    .map((product) => createProductCard(product))
    .join("");
}

function createProductCard(product, options = {}) {
  const swatches = (product.colors || [])
    .map(
      (color) => `
        <span class="color-swatch" style="--swatch: ${color.value}" title="${color.name}" aria-label="${color.name}"></span>
      `
    )
    .join("");

  return `
    <article class="product-card reveal${options.visible ? " is-visible" : ""}" data-product-id="${product.id}" data-category="${normalizeCategory(product.category)}">
      <div class="product-media">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <img src="${product.altImage}" alt="${product.name} alternate view" loading="lazy">
      </div>
      <div class="product-info">
        <header>
          <p class="product-category">${product.category}</p>
          <div class="product-title-row">
            <h3>${product.name}</h3>
            <span class="product-price">${formatMoney(product.price)}</span>
          </div>
        </header>
        <p>${product.description}</p>
        <div class="product-swatches" aria-label="${product.name} colors">${swatches}</div>
        <div class="product-actions">
          <button type="button" data-add-cart="${product.id}">Add to cart</button>
          <button class="size-button" type="button" data-modal-open="size-modal" aria-label="Open size chart for ${product.name}">Fit</button>
        </div>
      </div>
    </article>
  `;
}

function initializeShopPage() {
  const grid = document.querySelector(selectors.shopProducts);

  if (!grid) {
    return;
  }

  const filterButtons = Array.from(document.querySelectorAll("[data-shop-filter]"));
  const sortSelect = document.querySelector(selectors.shopSort);
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || "all";
  const validCategories = ["all", ...new Set(AURACAL.products.map((product) => normalizeCategory(product.category)))];
  let activeCategory = validCategories.includes(initialCategory) ? initialCategory : "all";

  const render = () => {
    const sortValue = sortSelect ? sortSelect.value : "featured";
    const filteredProducts = sortProducts(
      AURACAL.products.filter((product) => activeCategory === "all" || normalizeCategory(product.category) === activeCategory),
      sortValue
    );

    renderShopProducts(filteredProducts);
    updateShopControls(filterButtons, activeCategory, filteredProducts.length);
  };

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-shop-filter]");

    if (filterButton) {
      activeCategory = validCategories.includes(filterButton.dataset.shopFilter) ? filterButton.dataset.shopFilter : "all";
      const nextUrl = new URL(window.location.href);

      if (activeCategory === "all") {
        nextUrl.searchParams.delete("category");
      } else {
        nextUrl.searchParams.set("category", activeCategory);
      }

      window.history.replaceState({}, "", nextUrl);
      render();
    }
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", render);
  }

  render();
}

function renderShopProducts(products) {
  const grid = document.querySelector(selectors.shopProducts);
  const count = document.querySelector(selectors.shopCount);

  if (!grid) {
    return;
  }

  if (count) {
    count.textContent = `${products.length} ${products.length === 1 ? "piece" : "pieces"}`;
  }

  if (!products.length) {
    grid.innerHTML = `
      <div class="shop-empty">
        <p>No AURACAL pieces match this filter.</p>
        <button type="button" data-shop-filter="all">Reset collection</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map((product) => createProductCard(product, { visible: true })).join("");
}

function updateShopControls(filterButtons, activeCategory, count) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.shopFilter === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const status = document.querySelector("[data-shop-status]");
  if (status) {
    const label = activeCategory === "all" ? "All systems" : formatCategoryLabel(activeCategory);
    status.textContent = `${label} / ${count} available`;
  }
}

function sortProducts(products, sortValue) {
  const sorted = [...products];

  if (sortValue === "price-low") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-high") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "newest") {
    return sorted.sort((a, b) => b.release - a.release);
  }

  return sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.release - a.release);
}

function normalizeCategory(category) {
  return String(category).trim().toLowerCase();
}

function formatCategoryLabel(category) {
  return String(category)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function initializeBlogPage() {
  const articles = Array.from(document.querySelectorAll("[data-blog-category]"));

  if (!articles.length) {
    return;
  }

  const filterButtons = Array.from(document.querySelectorAll("[data-blog-filter]"));
  const count = document.querySelector(selectors.blogCount);

  const render = (category = "all") => {
    let visibleCount = 0;

    articles.forEach((article) => {
      const shouldShow = category === "all" || article.dataset.blogCategory === category;
      article.classList.toggle("is-hidden", !shouldShow);

      if (shouldShow) {
        visibleCount += 1;
      }
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.blogFilter === category;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (count) {
      count.textContent = `${visibleCount} ${visibleCount === 1 ? "article" : "articles"}`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.blogFilter || "all"));
  });

  render("all");
}

function initializeAuthPage() {
  const shell = document.querySelector("[data-auth-shell]");

  if (!shell) {
    return;
  }

  const modeButtons = Array.from(document.querySelectorAll("[data-auth-mode]"));
  const forms = Array.from(document.querySelectorAll("[data-auth-form]"));
  const message = document.querySelector("[data-auth-message]");

  const setMode = (mode) => {
    const activeMode = mode === "register" ? "register" : "login";
    shell.dataset.authState = activeMode;

    modeButtons.forEach((button) => {
      const isActive = button.dataset.authMode === activeMode;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    forms.forEach((form) => {
      form.hidden = form.dataset.authForm !== activeMode;
    });

    if (message) {
      message.textContent = "";
    }
  };

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.authMode));
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = String(formData.get("email") || "your account");
      const mode = form.dataset.authForm;

      if (mode === "register" && formData.get("password") !== formData.get("confirmPassword")) {
        if (message) {
          message.textContent = "Passwords need to match.";
        }
        return;
      }

      if (message) {
        message.textContent = mode === "register"
          ? `AURACAL account reserved for ${email}.`
          : `Welcome back, ${email}.`;
      }

      showToast(mode === "register" ? "Account preview created" : "Signed in preview");
      form.reset();
    });
  });

  setMode(window.location.hash === "#register" ? "register" : "login");
}

function initializeContactPage() {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  const message = document.querySelector("[data-contact-message]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "there").trim();
    const topic = formatContactTopic(formData.get("topic"));

    if (message) {
      message.textContent = `${topic} routed to the AURACAL studio. Thank you, ${name}.`;
    }

    showToast("Message preview sent");
    form.reset();
  });
}

function formatContactTopic(topic) {
  const labels = {
    sizing: "Sizing request",
    orders: "Order support",
    repairs: "Care and repair note",
    studio: "Studio inquiry"
  };

  return labels[topic] || "Message";
}

function initializeNavigation() {
  const header = document.querySelector(selectors.header);
  const toggle = document.querySelector(selectors.navToggle);
  const panel = document.querySelector(selectors.navPanel);

  if (header) {
    const setHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  if (!toggle || !panel) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  panel.addEventListener("click", (event) => {
    const target = event.target.closest("a, button");

    if (!target || target.matches("[data-modal-open]")) {
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
}

function initializeScrollEffects() {
  const revealElements = document.querySelectorAll(".reveal");
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  if (!parallaxElements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let ticking = false;

  const updateParallax = () => {
    parallaxElements.forEach((element) => {
      const speed = Number(element.dataset.parallax) || 0.08;
      const rect = element.getBoundingClientRect();
      const offset = rect.top * speed;
      element.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}

function initializePageTransitions() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link || link.target || link.hasAttribute("download")) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    const isHtmlPage = url.origin === window.location.origin && url.pathname.endsWith(".html");

    if (!isHtmlPage || url.href === window.location.href) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("page-leaving");
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 180);
  });
}

function initializeModals() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-modal-open]");
    const closeButton = event.target.closest("[data-modal-close]");
    const modalBackdrop = event.target.matches("[data-modal]");

    if (openButton) {
      openModal(openButton.dataset.modalOpen);
    }

    if (closeButton || modalBackdrop) {
      closeModal();
    }

    const addButton = event.target.closest("[data-add-cart]");
    if (addButton) {
      addToCart(addButton.dataset.addCart);
    }

    const removeButton = event.target.closest("[data-remove-cart]");
    if (removeButton) {
      removeFromCart(removeButton.dataset.removeCart);
    }

    const stepButton = event.target.closest("[data-cart-step]");
    if (stepButton) {
      stepCartQuantity(stepButton.dataset.cartStep, Number(stepButton.dataset.stepAmount));
    }

    const clearButton = event.target.closest("[data-clear-cart]");
    if (clearButton) {
      clearCart();
    }

    const checkoutButton = event.target.closest("[data-checkout-button]");
    if (checkoutButton) {
      const summary = getCartSummary();
      showToast(summary.lines.length ? "Secure checkout preview ready" : "Your cart is empty");
    }
  });

  document.addEventListener("input", (event) => {
    const quantityInput = event.target.closest("[data-cart-quantity]");

    if (quantityInput) {
      updateCartQuantity(quantityInput.dataset.cartQuantity, quantityInput.value);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModal) {
      closeModal();
    }
  });
}

function openModal(modalId) {
  const modal = document.querySelector(`[data-modal="${modalId}"]`);

  if (!modal) {
    return;
  }

  if (activeModal) {
    closeModal();
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.requestAnimationFrame(() => modal.classList.add("is-open"));
  activeModal = modal;

  const focusTarget = modal.querySelector("input, select, button");
  if (focusTarget) {
    window.setTimeout(() => focusTarget.focus(), 80);
  }
}

function closeModal() {
  if (!activeModal) {
    return;
  }

  const modalToClose = activeModal;
  modalToClose.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  activeModal = null;

  window.setTimeout(() => {
    modalToClose.hidden = true;
  }, 260);
}

function initializeFitTool() {
  const form = document.querySelector("[data-fit-form]");
  const result = document.querySelector("[data-fit-result]");

  if (!form || !result) {
    return;
  }

  const update = () => {
    const formData = new FormData(form);
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    const bodyType = String(formData.get("bodyType"));
    const recommendation = calculateSizeRecommendation({ height, weight, bodyType });

    result.innerHTML = `
      <span class="fit-size">${recommendation.size}</span>
      <div>
        <p class="fit-confidence">Precision confidence: ${recommendation.confidence}%</p>
        <p class="fit-note">${recommendation.note}</p>
      </div>
    `;
  };

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  update();
}

function calculateSizeRecommendation({ height, weight, bodyType }) {
  const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];

  if (!height || !weight) {
    return {
      size: "M",
      confidence: 72,
      note: "Enter height and weight for a live recommendation."
    };
  }

  const meters = height / 100;
  const bmi = weight / (meters * meters);
  let score = 0;

  if (height >= 160) score += 1;
  if (height >= 170) score += 1;
  if (height >= 180) score += 1;
  if (height >= 190) score += 1;

  if (weight >= 58) score += 1;
  if (weight >= 72) score += 1;
  if (weight >= 88) score += 1;
  if (weight >= 106) score += 1;

  if (bmi < 19.2) score -= 1;
  if (bmi > 25.4) score += 1;
  if (bmi > 30) score += 1;

  const bodyAdjustments = {
    slim: -1,
    athletic: 0,
    average: 0,
    broad: 1
  };

  score += bodyAdjustments[bodyType] || 0;
  const index = Math.max(0, Math.min(sizeOrder.length - 1, Math.round(score / 2)));
  const size = sizeOrder[index];
  const confidence = Math.max(82, Math.min(97, 96 - Math.abs(bmi - 22.8) * 1.8 + (bodyType === "athletic" ? 2 : 0)));
  const fitLanguage = {
    XS: "Expect a close technical fit. Choose S if you plan to layer a heavy knit.",
    S: "A clean, compact fit with light layering room through the chest and shoulder.",
    M: "Balanced profile detected. Size M should feel clean through the chest with enough ease for one base layer.",
    L: "Recommended for a relaxed technical silhouette with comfortable shoulder mobility.",
    XL: "Choose XL for full mobility, generous chest ease, and winter layering room.",
    XXL: "XXL gives the broadest garment tolerance while keeping AURACAL's tapered profile."
  };

  return {
    size,
    confidence: Math.round(confidence),
    note: fitLanguage[size]
  };
}

function initializeSizeChart() {
  const tableBody = document.querySelector(selectors.sizeTable);
  const unitButtons = document.querySelectorAll("[data-unit]");

  if (!tableBody) {
    return;
  }

  const render = (unit = "cm") => {
    tableBody.innerHTML = AURACAL.sizes
      .map((row) => {
        const formatRange = (range) => formatMeasurementRange(range, unit);
        return `
          <tr>
            <td>${row.size}</td>
            <td>${formatRange(row.chest)}</td>
            <td>${formatRange(row.waist)}</td>
            <td>${formatRange(row.hip)}</td>
            <td>${formatRange(row.height)}</td>
          </tr>
        `;
      })
      .join("");

    unitButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.unit === unit);
    });
  };

  unitButtons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.unit));
  });

  render("cm");
}

function formatMeasurementRange(range, unit) {
  if (unit === "in") {
    return `${cmToIn(range[0])}-${cmToIn(range[1])} in`;
  }

  return `${range[0]}-${range[1]} cm`;
}

function cmToIn(value) {
  return (value / 2.54).toFixed(1);
}

function initializeNewsletter() {
  const form = document.querySelector("[data-newsletter-form]");
  const note = document.querySelector("[data-newsletter-note]");

  if (!form || !note) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");
    note.textContent = `${email} is on the private drop list.`;
    form.reset();
  });
}

function renderCartPage() {
  const lineContainer = document.querySelector("[data-cart-lines]");
  const summaryContainer = document.querySelector("[data-cart-summary]");

  if (!lineContainer || !summaryContainer) {
    return;
  }

  const summary = getCartSummary();

  if (!summary.lines.length) {
    lineContainer.innerHTML = `
      <div class="empty-state">
        <p>Your cart is empty. Add AURACAL pieces from the shop.</p>
        <a class="button button-primary" href="shop.html">Shop AURACAL</a>
      </div>
    `;
    summaryContainer.innerHTML = createCartSummary(summary);
    return;
  }

  lineContainer.innerHTML = summary.lines
    .map(
      (item) => `
        <article class="cart-line reveal is-visible">
          <a class="cart-line-media" href="shop.html?category=${normalizeCategory(item.category)}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </a>
          <div class="cart-line-info">
            <p>${item.category}</p>
            <h3>${item.name}</h3>
            <span>${formatMoney(item.price)}</span>
          </div>
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-cart-step="${item.id}" data-step-amount="-1" aria-label="Decrease ${item.name} quantity">-</button>
            <label>
              <span class="sr-only">Quantity for ${item.name}</span>
              <input type="number" min="1" value="${item.quantity}" data-cart-quantity="${item.id}">
            </label>
            <button type="button" data-cart-step="${item.id}" data-step-amount="1" aria-label="Increase ${item.name} quantity">+</button>
          </div>
          <strong>${formatMoney(item.lineTotal)}</strong>
          <button class="remove-line" type="button" data-remove-cart="${item.id}">Remove</button>
        </article>
      `
    )
    .join("");

  summaryContainer.innerHTML = createCartSummary(summary);
}

function createCartSummary(summary) {
  return `
    <dl class="cart-summary-list">
      <div><dt>Subtotal</dt><dd>${formatMoney(summary.subtotal)}</dd></div>
      <div><dt>Shipping</dt><dd>${summary.shipping ? formatMoney(summary.shipping) : "Complimentary"}</dd></div>
      <div><dt>Estimated tax</dt><dd>${formatMoney(summary.tax)}</dd></div>
      <div class="cart-total"><dt>Total</dt><dd>${formatMoney(summary.total)}</dd></div>
    </dl>
    <button class="button button-primary checkout-button" type="button" data-checkout-button>Checkout securely</button>
    <p class="cart-summary-note">Taxes are estimated. Complimentary shipping unlocks at $350.</p>
  `;
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function showToast(message) {
  const toast = document.querySelector(selectors.toast);

  if (!toast) {
    return;
  }

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}
