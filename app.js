/**
 * ========================================================
 * BARWAAQO RESTAURANT MANAGEMENT SYSTEM - JAVASCRIPT
 * ========================================================
 */

// Initial Seed Data for the Menu (Authentic Somali and popular restaurant dishes)
const DEFAULT_MENU = [
  {
    id: "item-1",
    name: "Bariis iyo Hilib Ari",
    category: "Qado & Casho",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    desc: "Bariis udgoon oo xawaash leh iyo hilib ari oo jilicsan oo la socdo moos iyo basbaas."
  },
  {
    id: "item-2",
    name: "Baasto Saldaato & Kaluun",
    category: "Qado & Casho",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    desc: "Baasto Talyaani lagu kariyey suugo yaanyo macaan iyo kaluun shiilan oo cusub."
  },
  {
    id: "item-3",
    name: "Canjeero iyo Beer",
    category: "Quraac",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    desc: "Canjeero kulul iyo beer ari la shiilay oo basal, basbaas iyo yaanyo leh."
  },
  {
    id: "item-4",
    name: "Suqaar Hilib & Chapati",
    category: "Quraac",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    desc: "Suqaar hilib lo'aad ah oo jilicsan oo lagu cuno labo xabo oo sabaayad/chapati ah."
  },
  {
    id: "item-5",
    name: "Muqmad / Odkac & Canjeero",
    category: "Quraac",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
    desc: "Odkac subag saafi ah lagu kariyey oo dhaqan ah, canjeero iyo shaah cadays."
  },
  {
    id: "item-6",
    name: "Hilib Geel & Bariis",
    category: "Qado & Casho",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    desc: "Hilib geel la kariyey oo aad u macaan, bariis caraf badan iyo maraq kooban."
  },
  {
    id: "item-7",
    name: "Digaag Duban & Baradho",
    category: "Qado & Casho",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
    desc: "Digaag foorno lagu dubay, baradho shiilan (chips) iyo saladh cusub."
  },
  {
    id: "item-8",
    name: "Sambuusa Hilib (3 Xabbo)",
    category: "Cunto Fudud",
    price: 1.50,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    desc: "Sambuusooyin kulul oo hilib shiidan iyo xawaashyo macaan ka buuxaan."
  },
  {
    id: "item-9",
    name: "Bajiya iyo Basbaas",
    category: "Cunto Fudud",
    price: 1.20,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    desc: "Bajiya digir ka sameysan oo shiilan oo lagu daray shigni basbaas kulul."
  },
  {
    id: "item-10",
    name: "Burger Hilib & Fries",
    category: "Cunto Fudud",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    desc: "Burger hilib lo'aad leh, jiis dhalaalaya, saladh iyo baradho shiilan."
  },
  {
    id: "item-11",
    name: "Shaah Cadays (Somali Tea)",
    category: "Cabitaanno",
    price: 1.00,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Shaah caano leh oo heel, qorfay, iyo dhego yare lagu kariyey."
  },
  {
    id: "item-12",
    name: "Cabitaan Cambe (Fresh Mango)",
    category: "Cabitaanno",
    price: 1.50,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    desc: "Cabitaan cambe dabiici ah oo aad u qabow oo aan biyo badan lagu darin."
  },
  {
    id: "item-13",
    name: "Cabitaan Qare (Watermelon)",
    category: "Cabitaanno",
    price: 1.50,
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=600&q=80",
    desc: "Cabitaan qare dabiici ah oo cusub oo leh liin dhanaan iyo caleenta naacnaaca."
  },
  {
    id: "item-14",
    name: "Caano Geel Qabow",
    category: "Cabitaanno",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    desc: "Caano geel saafi ah oo caafimaad leh oo aad u qabow."
  }
];

// Fallback images per category if image URL fails to load
const CATEGORY_FALLBACK_IMAGES = {
  "Quraac": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
  "Qado & Casho": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  "Cunto Fudud": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  "Cabitaanno": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
};

// Storage Keys
const STORAGE_KEYS = {
  MENU: 'barwaaqo_menu_v1',
  ORDERS: 'barwaaqo_orders_v1'
};

// Application State
let state = {
  menu: [],
  cart: [],
  orders: [],
  currentCategory: 'all',
  searchQuery: '',
  orderStatusFilter: 'all'
};

/* ========================================================
   INITIALIZATION
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  renderAll();
});

function loadData() {
  // Load Menu
  const savedMenu = localStorage.getItem(STORAGE_KEYS.MENU);
  if (savedMenu) {
    try {
      state.menu = JSON.parse(savedMenu);
    } catch (e) {
      state.menu = [...DEFAULT_MENU];
    }
  } else {
    state.menu = [...DEFAULT_MENU];
    saveMenu();
  }

  // Load Orders
  const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (savedOrders) {
    try {
      state.orders = JSON.parse(savedOrders);
    } catch (e) {
      state.orders = [];
    }
  } else {
    // Seed sample orders for a realistic experience on first load
    const now = new Date();
    state.orders = [
      {
        id: "ORD-1001",
        date: new Date(now.getTime() - 25 * 60000).toLocaleString('so-SO', { dateStyle: 'short', timeStyle: 'short' }),
        timestamp: Date.now() - 25 * 60000,
        customer: "Jaamac Maxamed",
        table: "Miiska 02",
        payment: "Kaash",
        status: "Dhammaystiran",
        items: [
          { id: "item-1", name: "Bariis iyo Hilib Ari", price: 6.50, qty: 2 },
          { id: "item-12", name: "Cabitaan Cambe", price: 1.50, qty: 2 }
        ],
        subtotal: 16.00,
        tax: 0.00,
        total: 16.00
      },
      {
        id: "ORD-1002",
        date: new Date(now.getTime() - 8 * 60000).toLocaleString('so-SO', { dateStyle: 'short', timeStyle: 'short' }),
        timestamp: Date.now() - 8 * 60000,
        customer: "Sahra Cabdi",
        table: "Miiska 04",
        payment: "EVC Plus / Zaad",
        status: "Diyaarinta",
        items: [
          { id: "item-2", name: "Baasto Saldaato & Kaluun", price: 5.50, qty: 1 },
          { id: "item-13", name: "Cabitaan Qare", price: 1.50, qty: 1 }
        ],
        subtotal: 7.00,
        tax: 0.00,
        total: 7.00
      }
    ];
    saveOrders();
  }
}

function saveMenu() {
  localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(state.menu));
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
}

/* ========================================================
   EVENT LISTENERS
   ======================================================== */
function setupEventListeners() {
  // Tab Switching
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetView = tab.dataset.tab;
      document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
      });
      document.getElementById(targetView).classList.add('active');
    });
  });

  // Food Search
  const searchInput = document.getElementById('food-search');
  const clearSearchBtn = document.getElementById('clear-search');
  
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderMenuGrid();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderMenuGrid();
    searchInput.focus();
  });

  // Category Filters
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.dataset.category;
      renderMenuGrid();
    });
  });

  // Clear Cart
  document.getElementById('btn-clear-cart').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    if (confirm('Ma hubtaa inaad faaruqiso dhammaan dalabkan?')) {
      clearCart();
    }
  });

  // Checkout Button
  document.getElementById('btn-checkout').addEventListener('click', handleCheckout);

  // Order History Filter Buttons
  const orderFilterBtns = document.querySelectorAll('.order-filter-btn');
  orderFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.orderStatusFilter = btn.dataset.filter;
      renderOrdersTable();
    });
  });

  // Add Food Modal Controls
  const addModal = document.getElementById('add-food-modal');
  document.getElementById('btn-open-add-modal').addEventListener('click', () => {
    document.getElementById('add-food-form').reset();
    addModal.classList.add('open');
  });

  document.getElementById('btn-close-food-modal').addEventListener('click', () => {
    addModal.classList.remove('open');
  });

  document.getElementById('btn-cancel-food').addEventListener('click', () => {
    addModal.classList.remove('open');
  });

  // Add Food Form Submit
  document.getElementById('add-food-form').addEventListener('submit', handleAddFood);

  // Receipt Modal Controls
  const receiptModal = document.getElementById('receipt-modal');
  document.getElementById('btn-close-receipt').addEventListener('click', () => {
    receiptModal.classList.remove('open');
  });
  document.getElementById('btn-close-receipt-footer').addEventListener('click', () => {
    receiptModal.classList.remove('open');
  });
  document.getElementById('btn-print-receipt').addEventListener('click', () => {
    window.print();
  });

  // Close modals on backdrop click
  [addModal, receiptModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
}

/* ========================================================
   RENDER FUNCTIONS
   ======================================================== */
function renderAll() {
  renderMenuGrid();
  renderCart();
  renderOrdersTable();
  renderMenuAdminList();
  updateTopStats();
}

/**
 * Render Menu Grid for POS view
 */
function renderMenuGrid() {
  const grid = document.getElementById('food-grid');
  grid.innerHTML = '';

  const filtered = state.menu.filter(item => {
    const matchCategory = state.currentCategory === 'all' || item.category === state.currentCategory;
    const matchSearch = !state.searchQuery || 
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.category.toLowerCase().includes(state.searchQuery) ||
      (item.desc && item.desc.toLowerCase().includes(state.searchQuery));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <i class="fa-solid fa-utensils" style="font-size: 2.5rem; margin-bottom: 0.5rem; color: #cbd5e1;"></i>
        <p style="font-weight: 600; font-size: 1rem; color: #64748b;">Wax cunto ah oo ku habboon lama helin.</p>
        <span style="font-size: 0.85rem;">Isku day qayb kale ama erey kale oo raadinta ah.</span>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';
    const fallback = CATEGORY_FALLBACK_IMAGES[item.category] || CATEGORY_FALLBACK_IMAGES['Qado & Casho'];

    card.innerHTML = `
      <div class="food-img-wrap">
        <img src="${item.image || fallback}" alt="${escapeHtml(item.name)}" onerror="this.src='${fallback}'" loading="lazy">
        <span class="food-badge">${escapeHtml(item.category)}</span>
      </div>
      <div class="food-details">
        <h3 class="food-name">${escapeHtml(item.name)}</h3>
        <p class="food-desc">${escapeHtml(item.desc || 'Cunto aad u macaan oo si heer sare ah loo diyaariyey.')}</p>
        <div class="food-footer">
          <span class="food-price">$${parseFloat(item.price).toFixed(2)}</span>
          <button class="btn-add-item" title="Ku dar dalabka" data-id="${item.id}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;

    // Click anywhere on card to add item
    card.addEventListener('click', (e) => {
      addToCart(item.id);
    });

    grid.appendChild(card);
  });
}

/**
 * Render Cart Items & Financial Summary
 */
function renderCart() {
  const container = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const totalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('btn-checkout');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message">
        <i class="fa-solid fa-plate-wheat"></i>
        <p>Wali waxba kuma jiraan dalabkaaga.</p>
        <span>Guji cuntada dhinaca bidix si aad ugu darto.</span>
      </div>
    `;
    subtotalEl.textContent = '$0.00';
    taxEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    checkoutBtn.disabled = true;
    return;
  }

  container.innerHTML = '';
  let subtotal = 0;

  state.cart.forEach(cartItem => {
    const itemTotal = cartItem.price * cartItem.qty;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title" title="${escapeHtml(cartItem.name)}">${escapeHtml(cartItem.name)}</div>
        <div class="cart-item-unit-price">$${cartItem.price.toFixed(2)} / xabo</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="decrease" data-id="${cartItem.id}">-</button>
        <span class="cart-item-qty">${cartItem.qty}</span>
        <button class="qty-btn" data-action="increase" data-id="${cartItem.id}">+</button>
      </div>
      <div class="cart-item-subtotal">$${itemTotal.toFixed(2)}</div>
      <button class="cart-item-remove" title="Ka saar" data-id="${cartItem.id}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    // Add controls listeners
    row.querySelector('[data-action="decrease"]').addEventListener('click', () => {
      updateCartItemQty(cartItem.id, -1);
    });
    row.querySelector('[data-action="increase"]').addEventListener('click', () => {
      updateCartItemQty(cartItem.id, 1);
    });
    row.querySelector('.cart-item-remove').addEventListener('click', () => {
      removeCartItem(cartItem.id);
    });

    container.appendChild(row);
  });

  const tax = 0.00; // Can be configured if needed
  const total = subtotal + tax;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
  checkoutBtn.disabled = false;
}

/**
 * Render Orders Table (Order History View)
 */
function renderOrdersTable() {
  const tbody = document.getElementById('orders-table-body');
  const noOrdersMsg = document.getElementById('no-orders-msg');
  tbody.innerHTML = '';

  // Update counts
  const countAll = state.orders.length;
  const countPending = state.orders.filter(o => o.status === 'Diyaarinta').length;
  const countReady = state.orders.filter(o => o.status === 'Diyaar').length;
  const countDone = state.orders.filter(o => o.status === 'Dhammaystiran').length;

  document.getElementById('count-all').textContent = countAll;
  document.getElementById('count-pending').textContent = countPending;
  document.getElementById('count-ready').textContent = countReady;
  document.getElementById('count-done').textContent = countDone;
  document.getElementById('orders-badge').textContent = countPending;

  const filteredOrders = state.orders.filter(order => {
    if (state.orderStatusFilter === 'all') return true;
    return order.status === state.orderStatusFilter;
  });

  if (filteredOrders.length === 0) {
    noOrdersMsg.classList.remove('hidden');
    return;
  } else {
    noOrdersMsg.classList.add('hidden');
  }

  // Sort descending by timestamp / order
  const sorted = [...filteredOrders].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  sorted.forEach(order => {
    const tr = document.createElement('tr');
    
    // Items breakdown summary string
    const itemsSummary = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');

    tr.innerHTML = `
      <td><strong>${order.id}</strong></td>
      <td>${order.date}</td>
      <td>${escapeHtml(order.customer || 'Macmiil')}</td>
      <td><span style="font-weight: 600;">${order.table}</span></td>
      <td style="max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(itemsSummary)}">
        ${escapeHtml(itemsSummary)}
      </td>
      <td><strong style="color: var(--secondary-hover);">$${order.total.toFixed(2)}</strong></td>
      <td><small>${order.payment}</small></td>
      <td>
        <select class="status-select" data-order-id="${order.id}">
          <option value="Diyaarinta" ${order.status === 'Diyaarinta' ? 'selected' : ''}>⏳ Diyaarinta</option>
          <option value="Diyaar" ${order.status === 'Diyaar' ? 'selected' : ''}>🔔 Diyaar</option>
          <option value="Dhammaystiran" ${order.status === 'Dhammaystiran' ? 'selected' : ''}>✅ Dhammaystiran</option>
        </select>
      </td>
      <td>
        <div class="action-buttons">
          <button class="icon-btn print" title="Daabac Rasiidh" data-order-id="${order.id}">
            <i class="fa-solid fa-receipt"></i>
          </button>
          <button class="icon-btn delete" title="Tirtir Dalabka" data-order-id="${order.id}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;

    // Status Change
    const statusSelect = tr.querySelector('.status-select');
    statusSelect.addEventListener('change', (e) => {
      updateOrderStatus(order.id, e.target.value);
    });

    // Print Receipt
    tr.querySelector('.icon-btn.print').addEventListener('click', () => {
      openReceiptModal(order);
    });

    // Delete Order
    tr.querySelector('.icon-btn.delete').addEventListener('click', () => {
      if (confirm(`Ma hubtaa inaad tirtirto dalabka ${order.id}?`)) {
        deleteOrder(order.id);
      }
    });

    tbody.appendChild(tr);
  });
}

/**
 * Render Menu Admin List (View 3)
 */
function renderMenuAdminList() {
  const container = document.getElementById('menu-admin-list');
  container.innerHTML = '';

  state.menu.forEach(item => {
    const card = document.createElement('div');
    card.className = 'admin-food-card';
    const fallback = CATEGORY_FALLBACK_IMAGES[item.category] || CATEGORY_FALLBACK_IMAGES['Qado & Casho'];

    card.innerHTML = `
      <img src="${item.image || fallback}" class="admin-food-thumb" alt="${escapeHtml(item.name)}" onerror="this.src='${fallback}'">
      <div class="admin-food-meta">
        <span class="cat-tag">${escapeHtml(item.category)}</span>
        <h4>${escapeHtml(item.name)}</h4>
        <div class="price">$${parseFloat(item.price).toFixed(2)}</div>
      </div>
      <div class="admin-food-actions">
        <button class="icon-btn delete" title="Tirtir cuntadan" data-id="${item.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    card.querySelector('.delete').addEventListener('click', () => {
      if (confirm(`Ma hubtaa inaad liiska ka saarto cuntada: "${item.name}"?`)) {
        deleteMenuItem(item.id);
      }
    });

    container.appendChild(card);
  });
}

/**
 * Update Top Stats Summary
 */
function updateTopStats() {
  const totalOrders = state.orders.length;
  const totalRevenue = state.orders.reduce((sum, order) => sum + (order.total || 0), 0);

  document.getElementById('stat-total-orders').textContent = totalOrders;
  document.getElementById('stat-total-revenue').textContent = `$${totalRevenue.toFixed(2)}`;
}

/* ========================================================
   CART OPERATIONS
   ======================================================== */
function addToCart(foodId) {
  const food = state.menu.find(item => item.id === foodId);
  if (!food) return;

  const existingCartIndex = state.cart.findIndex(i => i.id === foodId);

  if (existingCartIndex > -1) {
    state.cart[existingCartIndex].qty += 1;
  } else {
    state.cart.push({
      id: food.id,
      name: food.name,
      price: parseFloat(food.price),
      qty: 1
    });
  }

  renderCart();
  showToast(`"${food.name}" waa lagu daray dalabka!`);
}

function updateCartItemQty(foodId, change) {
  const index = state.cart.findIndex(i => i.id === foodId);
  if (index === -1) return;

  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  renderCart();
}

function removeCartItem(foodId) {
  state.cart = state.cart.filter(i => i.id !== foodId);
  renderCart();
  showToast('Cuntada waa laga saaray dalabka.');
}

function clearCart() {
  state.cart = [];
  renderCart();
  showToast('Dalabkii waa la faaruqiyey.');
}

/* ========================================================
   CHECKOUT & RECEIPT
   ======================================================== */
function handleCheckout() {
  if (state.cart.length === 0) {
    showToast('Fadlan cunto ku dar dalabka marka hore!', 'error');
    return;
  }

  const customerName = document.getElementById('customer-name').value.trim() || 'Macmiil';
  const table = document.getElementById('table-number').value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'Kaash';

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = 0.00;
  const total = subtotal + tax;

  const orderNumber = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateFormatted = now.toLocaleString('so-SO', { dateStyle: 'short', timeStyle: 'short' });

  const newOrder = {
    id: orderNumber,
    date: dateFormatted,
    timestamp: Date.now(),
    customer: customerName,
    table: table,
    payment: paymentMethod,
    status: 'Diyaarinta',
    items: [...state.cart],
    subtotal: subtotal,
    tax: tax,
    total: total
  };

  // Add order to history
  state.orders.unshift(newOrder);
  saveOrders();

  // Clear current cart
  state.cart = [];
  renderCart();

  // Update order tables and stats
  renderOrdersTable();
  updateTopStats();

  // Show printable receipt modal
  openReceiptModal(newOrder);

  showToast(`Dalabka ${newOrder.id} si guul leh ayaa loo diiwaangeliyey!`);
}

/**
 * Populate and Open Receipt Modal
 */
function openReceiptModal(order) {
  document.getElementById('rcpt-id').textContent = '#' + order.id;
  document.getElementById('rcpt-date').textContent = order.date;
  document.getElementById('rcpt-customer').textContent = order.customer;
  document.getElementById('rcpt-table').textContent = order.table;
  document.getElementById('rcpt-payment').textContent = order.payment;
  document.getElementById('rcpt-total').textContent = `$${order.total.toFixed(2)}`;

  const itemsTbody = document.getElementById('rcpt-items-body');
  itemsTbody.innerHTML = '';

  order.items.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(item.name)}</td>
      <td style="text-align: center;">${item.qty}</td>
      <td style="text-align: right;">$${item.price.toFixed(2)}</td>
      <td style="text-align: right;">$${(item.price * item.qty).toFixed(2)}</td>
    `;
    itemsTbody.appendChild(tr);
  });

  document.getElementById('receipt-modal').classList.add('open');
}

/* ========================================================
   ORDER MANAGEMENT (STATUS / DELETE)
   ======================================================== */
function updateOrderStatus(orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders();
    renderOrdersTable();
    showToast(`Dalabka ${orderId} heerkiisu waa "${newStatus}".`);
  }
}

function deleteOrder(orderId) {
  state.orders = state.orders.filter(o => o.id !== orderId);
  saveOrders();
  renderOrdersTable();
  updateTopStats();
  showToast(`Dalabka ${orderId} waa la tirtiray.`);
}

/* ========================================================
   MENU MANAGEMENT (ADD / DELETE DISHES)
   ======================================================== */
function handleAddFood(e) {
  e.preventDefault();

  const nameInput = document.getElementById('food-name');
  const catInput = document.getElementById('food-category');
  const priceInput = document.getElementById('food-price');
  const imgInput = document.getElementById('food-image');
  const descInput = document.getElementById('food-desc');

  const name = nameInput.value.trim();
  const category = catInput.value;
  const price = parseFloat(priceInput.value);
  let image = imgInput.value.trim();
  const desc = descInput.value.trim();

  if (!name || isNaN(price) || price <= 0) {
    showToast('Fadlan gali magac iyo qiimo sax ah!', 'error');
    return;
  }

  // Use fallback if no image provided
  if (!image) {
    image = CATEGORY_FALLBACK_IMAGES[category] || CATEGORY_FALLBACK_IMAGES['Qado & Casho'];
  }

  const newItem = {
    id: 'custom-' + Date.now(),
    name: name,
    category: category,
    price: price,
    image: image,
    desc: desc || `${category} macaan oo tayo sare leh.`
  };

  state.menu.unshift(newItem);
  saveMenu();

  renderMenuGrid();
  renderMenuAdminList();

  document.getElementById('add-food-modal').classList.remove('open');
  showToast(`"${name}" si guul leh ayaa loogu daray cuntada!`);
}

function deleteMenuItem(itemId) {
  state.menu = state.menu.filter(i => i.id !== itemId);
  saveMenu();
  renderMenuGrid();
  renderMenuAdminList();
  showToast('Cuntada waa laga tirtiray liiska.');
}

/* ========================================================
   UTILITY FUNCTIONS
   ======================================================== */
let toastTimeout;
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
