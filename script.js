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
      altImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=86"
    },
    {
      id: "aura-knit-02",
      name: "ThermaGrid Knit",
      category: "Base",
      price: 168,
      badge: "Mono-fiber",
      description: "Thermal grid pullover with breathable loft and a soft matte surface.",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=86"
    },
    {
      id: "aura-trouser-03",
      name: "Vector Utility Trouser",
      category: "Travel",
      price: 238,
      badge: "4-way stretch",
      description: "Tapered modular trouser with invisible cargo storage and articulated knees.",
      image: "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=86"
    },
    {
      id: "aura-vest-04",
      name: "Flux Insulated Vest",
      category: "Outerwear",
      price: 286,
      badge: "Plant fill",
      description: "Low-bulk warmth layer with recycled ripstop face and bio-based insulation.",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=86",
      altImage: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=86"
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
  sizeTable: "[data-size-table]",
  toast: "[data-toast]"
};

let toastTimer;
let activeModal = null;

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  renderFeaturedProducts();
  initializeScrollEffects();
  initializePageTransitions();
  initializeModals();
  initializeFitTool();
  initializeSizeChart();
  initializeNewsletter();
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
    .map((product) => createProductCard(product))
    .join("");
}

function createProductCard(product) {
  return `
    <article class="product-card reveal" data-product-id="${product.id}">
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
        <div class="product-actions">
          <button type="button" data-add-cart="${product.id}">Add to cart</button>
          <button class="size-button" type="button" data-modal-open="size-modal" aria-label="Open size chart for ${product.name}">Fit</button>
        </div>
      </div>
    </article>
  `;
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
    lineContainer.innerHTML = `<p class="empty-state">Your cart is empty. Add AURACAL pieces from the shop.</p>`;
    summaryContainer.innerHTML = createCartSummary(summary);
    return;
  }

  lineContainer.innerHTML = summary.lines
    .map(
      (item) => `
        <article class="cart-line">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div>
            <p>${item.category}</p>
            <h3>${item.name}</h3>
            <span>${formatMoney(item.price)}</span>
          </div>
          <label>
            <span class="sr-only">Quantity for ${item.name}</span>
            <input type="number" min="1" value="${item.quantity}" data-cart-quantity="${item.id}">
          </label>
          <strong>${formatMoney(item.lineTotal)}</strong>
          <button type="button" data-remove-cart="${item.id}">Remove</button>
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
