/* ==========================================
   FASHIONHUB INTERACTIVE INTERFACE CONTROLLER
   ========================================== */

// 1. PRODUCT CATALOG DATA
const PRODUCT_CATALOG = [
    {
        id: 1,
        name: "Aarya Rose Kurti",
        category: "women",
        price: 1299,
        origPrice: 1899,
        image: "assets/women_kurti.png",
        rating: 4.8,
        reviews: 124,
        description: "A premium designer fusion kurti styled in soft rose-gold and cream fabric. Offers a perfect combination of traditional elegance and modern silhouettes, crafted with breathable blended cotton silk.",
        colors: ["#e0a96d", "#f5f5f7", "#1c1d21"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Rudra Charcoal Kurta",
        category: "men",
        price: 1499,
        origPrice: 2199,
        image: "assets/men_kurta.png",
        rating: 4.7,
        reviews: 98,
        description: "A high-end designer ethnic kurta shirt crafted from deep slate charcoal fabric. Features detailed gold embroidery accents along the collar and placket, tailor-made for festive and casual occasions.",
        colors: ["#1c1d21", "#c5a059", "#5a5d66"],
        sizes: ["M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        name: "Tan & Charcoal Leather Tote",
        category: "accessories",
        price: 2499,
        origPrice: 3999,
        image: "assets/luxury_bag.png",
        rating: 4.9,
        reviews: 156,
        description: "Premium handcrafted leather bag combining rich tan-brown grain leather panels with dark accents. Finished with gold-polished brass metal clasps, multiple utility compartments, and a durable lining.",
        colors: ["#8b5a2b", "#1c1d21", "#e5c180"],
        sizes: ["One Size"]
    },
    {
        id: 4,
        name: "Veda Silk Saree",
        category: "women",
        price: 4999,
        origPrice: 5999,
        image: "assets/women_kurti.png", // Reusing image with custom visual styling
        rating: 4.9,
        reviews: 42,
        description: "Exquisite hand-woven Banarasi silk saree featuring traditional gold zari borders. Made in collaboration with national artisan self-help groups, reflecting authentic Indian design.",
        colors: ["#b81d24", "#c5a059"],
        sizes: ["One Size"]
    },
    {
        id: 5,
        name: "Activewear Slim Jogger",
        category: "men",
        price: 999,
        origPrice: 1599,
        image: "assets/men_kurta.png", // Reusing image with custom visual styling
        rating: 4.5,
        reviews: 73,
        description: "High-performance moisture-wicking slim joggers, engineered for stretch comfort and morning training runs. Features deep zipper pockets and adjustable drawstring waist.",
        colors: ["#1c1d21", "#5a5d66"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: "Eco-Cotton Printed Scarf",
        category: "accessories",
        price: 349,
        origPrice: 699,
        image: "assets/luxury_bag.png", // Reusing image
        rating: 4.6,
        reviews: 35,
        description: "100% organic cotton printed scarf made with azo-free dyes. Light-weight and versatile styling piece, sourced from rural artisan cooperatives in Kerala.",
        colors: ["#e0a96d", "#5a5d66"],
        sizes: ["One Size"]
    }
];

// 2. TIMELINE DATA
const TIMELINE_DATA = {
    1: {
        num: "01",
        duration: "Month 1",
        title: "Planning & Incorporation",
        activities: [
            "Incorporate 'FashionHub E-Commerce Pvt. Ltd.' under the Companies Act, 2013.",
            "Register intellectual property rights and file trademarks for name and brand logo.",
            "Obtain mandatory tax setups: GST registration, Import Export Code (IEC).",
            "Establish active corporate bank accounts and negotiate initial credit limits."
        ],
        milestone: "Legal entity established & bank accounts active."
    },
    2: {
        num: "02",
        duration: "Month 2",
        title: "Core Team Recruitment",
        activities: [
            "Recruit and onboard Chief Technology Officer / Tech Lead.",
            "Hire experienced Digital Marketing Manager to lead branding campaigns.",
            "Onboard operations executive to oversee early logistics partners.",
            "Setup internal collaborative networks and corporate communication platforms."
        ],
        milestone: "Core leadership and engineering management onboarded."
    },
    3: {
        num: "03",
        duration: "Month 3",
        title: "Platform UI/UX Design",
        activities: [
            "Map out core checkout funnels, user personas, and high-fidelity screen flow maps.",
            "Design responsive layouts for desktop, tablet, and mobile platforms.",
            "Conduct usability testing on interactive prototypes with target customer groups.",
            "Finalize UX design sheets and pass assets to frontend engineering teams."
        ],
        milestone: "UI/UX prototypes approved & ready for development."
    },
    4: {
        num: "04",
        duration: "Months 3-4",
        title: "Supplier Onboarding",
        activities: [
            "Establish factory-direct agreements with 50+ manufacturers in Tiruppur, Surat, and Kolkata.",
            "Negotiate minimum order quantities (MOQs) to reduce upfront inventory exposure.",
            "Contract with Third-Party Logistics (3PL) providers and integrate shipping engines.",
            "Develop vendor quality check protocols at supplier source points."
        ],
        milestone: "20+ supplier agreements active & API credentials secured."
    },
    5: {
        num: "05",
        duration: "Months 4-5",
        title: "Technology Development",
        activities: [
            "Develop frontend React.js/Next.js store and deploy main web services on AWS cloud.",
            "Code React Native application shell to build unified iOS and Android downloads.",
            "Integrate secure Razorpay and PayU payment gateways with multi-mode options.",
            "Embed analytics engines (Google Analytics, Mixpanel) to track checkout drop-offs."
        ],
        milestone: "E-Commerce portal fully integrated in staging sandbox."
    },
    6: {
        num: "06",
        duration: "Month 6",
        title: "Warehouse & Operations",
        activities: [
            "Secure leased workspace in Kochi to act as central inventory hub.",
            "Deploy Inventory Management Software (IMS) and scan in opening stocks.",
            "Recruit and train warehouse dispatch workers in packing, QC, and returns intake.",
            "Set up dedicated customer helpline CRM ticketing system."
        ],
        milestone: "Fulfillment center operational & staff trained."
    },
    7: {
        num: "07",
        duration: "Months 6-7",
        title: "Private Beta & QC",
        activities: [
            "Invite 500 select users to participate in closed beta testing.",
            "Test full order-to-delivery lifecycle, including real-time courier dispatch alerts.",
            "Audit return processing times and immediate client bank account refunds.",
            "Fix platform bugs and performance log bottlenecks."
        ],
        milestone: "100+ beta order cycles completed successfully."
    },
    8: {
        num: "08",
        duration: "Months 8-12",
        title: "Public Launch",
        activities: [
            "Launch web store and publish native mobile applications to Play Store and App Store.",
            "Launch micro-influencer campaigns and social media ads.",
            "Scale search engine optimization (SEO) and email/WhatsApp automation sequences.",
            "Introduce referral credits (₹100 coupons) to drive customer acquisition."
        ],
        milestone: "5,000 customers served within first 6 operational months."
    },
    9: {
        num: "09",
        duration: "Months 13-18",
        title: "Scale-Up & Private Label",
        activities: [
            "Launch in-house private labels (30% of total SKUs) for high margin gains.",
            "Open owned mini-warehouse in Kochi to streamline product handling.",
            "Integrate AI-powered size and fit assistant onto product detail pages.",
            "Establish cross-docking logistics to reduce warehouse storage charges."
        ],
        milestone: "Private label line live; monthly operational break-even achieved."
    },
    10: {
        num: "10",
        duration: "Year 2-5",
        title: "Pan-India Expansion",
        activities: [
            "Establish localized dark stores in metro hubs to enable next-day deliveries.",
            "Introduce bulk buying and corporate gift boxes portals.",
            "Initiate global shipping trials to Indian diaspora markets.",
            "Initiate institutional Series A fundraising to scale promotional investments."
        ],
        milestone: "Annual revenue crosses Rs 25 Crore; pan-India brand presence."
    }
};

// 3. STATE VARIABLES
let cart = [];
let appliedCoupon = null;
const LAUNCH_COUPON = "LAUNCH10";
let activeFilters = {
    search: "",
    categories: ["all"],
    maxPrice: 6000
};
let currentSort = "featured";
let currentSelectedProduct = null;

// DOM ELEMENTS
const productGrid = document.getElementById("product-grid");
const productsCountTxt = document.getElementById("products-count-txt");
const sidebarSearch = document.getElementById("sidebar-search");
const priceRangeSlider = document.getElementById("price-range-slider");
const priceMaxDisplay = document.getElementById("price-max-display");
const sortSelect = document.getElementById("sort-select");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const categoryFilters = document.querySelectorAll(".category-filter");

const themeToggle = document.getElementById("theme-toggle");
const searchToggle = document.getElementById("search-toggle");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");

const cartToggle = document.getElementById("cart-toggle");
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartDiscountLine = document.getElementById("cart-discount-line");
const cartDiscountVal = document.getElementById("cart-discount-val");
const cartTotal = document.getElementById("cart-total");
const couponCodeInput = document.getElementById("coupon-code-input");
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const discountMsg = document.getElementById("discount-msg");
const checkoutBtn = document.getElementById("checkout-btn");
const cartStartShopping = document.getElementById("cart-start-shopping");

const sizeModal = document.getElementById("size-modal");
const sizeModalOverlay = document.getElementById("size-modal-overlay");
const sizeModalClose = document.getElementById("size-modal-close");
const openSizeHelperBtn = document.getElementById("open-size-helper-btn");
const calculateSizeBtn = document.getElementById("calculate-size-btn");
const sizeResultDisplay = document.getElementById("size-result-display");

const productModal = document.getElementById("product-detail-modal");
const productModalOverlay = document.getElementById("product-modal-overlay");
const productModalClose = document.getElementById("product-modal-close");
const modalAddBtn = document.getElementById("modal-add-to-cart-btn");
const qtyMinusBtn = document.getElementById("qty-minus-btn");
const qtyPlusBtn = document.getElementById("qty-plus-btn");
const productQtyVal = document.getElementById("product-qty-val");

const chatToggleBtn = document.getElementById("chat-toggle-btn");
const chatBoxDrawer = document.getElementById("chat-box-drawer");
const chatClose = document.getElementById("chat-close");
const chatMessagesContainer = document.getElementById("chat-messages-container");
const chatUserInput = document.getElementById("chat-user-input");
const chatSendBtn = document.getElementById("chat-send-btn");
const suggestionChips = document.querySelectorAll(".suggestion-chip");

const timelineCards = document.querySelectorAll(".timeline-card");
const displayPhaseNum = document.getElementById("display-phase-num");
const displayPhaseDuration = document.getElementById("display-phase-duration");
const displayPhaseTitle = document.getElementById("display-phase-title");
const displayPhaseBody = document.getElementById("display-phase-body");


// INITIALIZATION
window.addEventListener("DOMContentLoaded", () => {
    // Load local cart
    const cachedCart = localStorage.getItem("fashionhub_cart");
    if (cachedCart) {
        cart = JSON.parse(cachedCart);
        updateCartUI();
    }
    
    // Set theme from localstorage
    const cachedTheme = localStorage.getItem("fashionhub_theme") || "light";
    if (cachedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    updateThemeIcon(cachedTheme);

    // Parse category from URL query parameters (e.g. ?cat=women)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam && ["women", "men", "accessories"].includes(catParam)) {
        activeFilters.categories = [catParam];
        const allCheckbox = document.getElementById("filter-cat-all");
        if (allCheckbox) allCheckbox.checked = false;
        categoryFilters.forEach(c => {
            if (c.value === catParam) c.checked = true;
            else if (c.value !== "all") c.checked = false;
        });
    }

    // Initial render of products
    renderProducts();
    
    // Initial render of timeline phase 1 details
    selectTimelinePhase(1);

    // Attach Event Listeners
    setupEventListeners();
});

// Setup All UI Event Handlers
function setupEventListeners() {
    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        const htmlEl = document.documentElement;
        const isDark = htmlEl.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";
        if (newTheme === "dark") {
            htmlEl.classList.add("dark");
        } else {
            htmlEl.classList.remove("dark");
        }
        localStorage.setItem("fashionhub_theme", newTheme);
        updateThemeIcon(newTheme);
    });

    // Search Overlay
    searchToggle.addEventListener("click", () => openSearch());
    searchClose.addEventListener("click", () => closeSearch());
    searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) closeSearch();
    });
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            activeFilters.search = searchInput.value;
            sidebarSearch.value = searchInput.value;
            renderProducts();
            closeSearch();
            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSearch();
            closeAllModals();
            closeCart();
            closeChat();
        }
    });

    // Cart Drawer Toggle
    cartToggle.addEventListener("click", () => openCart());
    cartCloseBtn.addEventListener("click", () => closeCart());
    cartDrawerOverlay.addEventListener("click", () => closeCart());
    cartStartShopping.addEventListener("click", () => {
        closeCart();
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });

    // Checkout Alert
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) return;
        alert("Thank you! Order checkout successfully processed in Demo sandbox mode.");
        cart = [];
        localStorage.removeItem("fashionhub_cart");
        appliedCoupon = null;
        couponCodeInput.value = "";
        discountMsg.innerText = "";
        discountMsg.className = "discount-message";
        updateCartUI();
        closeCart();
    });

    // Cart Apply Coupon
    applyCouponBtn.addEventListener("click", () => {
        const enteredVal = couponCodeInput.value.trim().toUpperCase();
        if (enteredVal === LAUNCH_COUPON) {
            appliedCoupon = LAUNCH_COUPON;
            discountMsg.innerText = "Coupon code 'LAUNCH10' applied (10% Off)!";
            discountMsg.className = "discount-message success";
            updateCartUI();
        } else if (enteredVal === "") {
            appliedCoupon = null;
            discountMsg.innerText = "";
            discountMsg.className = "discount-message";
            updateCartUI();
        } else {
            discountMsg.innerText = "Invalid coupon code.";
            discountMsg.className = "discount-message error";
        }
    });

    // Filter Listeners
    sidebarSearch.addEventListener("input", (e) => {
        activeFilters.search = e.target.value;
        renderProducts();
    });

    priceRangeSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        activeFilters.maxPrice = val;
        priceMaxDisplay.innerText = `₹${val.toLocaleString()}`;
        renderProducts();
    });

    categoryFilters.forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const val = e.target.value;
            if (val === "all") {
                if (e.target.checked) {
                    categoryFilters.forEach(c => { if(c.value !== "all") c.checked = false; });
                    activeFilters.categories = ["all"];
                } else {
                    e.target.checked = true; // Always keep something checked
                }
            } else {
                document.getElementById("filter-cat-all").checked = false;
                const activeCats = Array.from(categoryFilters)
                    .filter(c => c.checked && c.value !== "all")
                    .map(c => c.value);
                
                if (activeCats.length === 0) {
                    document.getElementById("filter-cat-all").checked = true;
                    activeFilters.categories = ["all"];
                } else {
                    activeFilters.categories = activeCats;
                }
            }
            renderProducts();
        });
    });

    clearFiltersBtn.addEventListener("click", () => {
        sidebarSearch.value = "";
        priceRangeSlider.value = 6000;
        priceMaxDisplay.innerText = "₹6,000";
        document.getElementById("filter-cat-all").checked = true;
        categoryFilters.forEach(c => { if(c.value !== "all") c.checked = false; });
        activeFilters = { search: "", categories: ["all"], maxPrice: 6000 };
        renderProducts();
    });

    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Timeline Click Listeners
    timelineCards.forEach(card => {
        card.addEventListener("click", () => {
            const phase = parseInt(card.getAttribute("data-phase"));
            // Deactivate others
            timelineCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            selectTimelinePhase(phase);
        });
    });

    // Modals
    sizeModalClose.addEventListener("click", () => closeSizeModal());
    sizeModalOverlay.addEventListener("click", () => closeSizeModal());
    openSizeHelperBtn.addEventListener("click", () => {
        closeProductModal();
        openSizeModal();
    });
    calculateSizeBtn.addEventListener("click", () => predictSize());

    productModalClose.addEventListener("click", () => closeProductModal());
    productModalOverlay.addEventListener("click", () => closeProductModal());

    // Product Detail Quantity
    qtyMinusBtn.addEventListener("click", () => {
        let val = parseInt(productQtyVal.innerText);
        if (val > 1) {
            productQtyVal.innerText = val - 1;
        }
    });
    qtyPlusBtn.addEventListener("click", () => {
        let val = parseInt(productQtyVal.innerText);
        productQtyVal.innerText = val + 1;
    });

    modalAddBtn.addEventListener("click", () => {
        if (!currentSelectedProduct) return;
        const activeSizeBtn = document.querySelector(".size-btn.active");
        const selectedSize = activeSizeBtn ? activeSizeBtn.innerText : "M";
        const selectedQty = parseInt(productQtyVal.innerText);
        
        addToCart(currentSelectedProduct.id, selectedQty, selectedSize);
        closeProductModal();
        openCart();
    });

    // Chatbot Toggle
    chatToggleBtn.addEventListener("click", () => {
        chatBoxDrawer.classList.toggle("open");
    });
    chatClose.addEventListener("click", () => {
        chatBoxDrawer.classList.remove("open");
    });

    chatSendBtn.addEventListener("click", () => handleChatSubmit());
    chatUserInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleChatSubmit();
    });

    suggestionChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const text = chip.getAttribute("data-query");
            chatUserInput.value = text;
            handleChatSubmit();
        });
    });

    // Collection category cards routing
    document.querySelectorAll(".collection-card").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.getAttribute("data-category");
            // Set filters
            document.getElementById("filter-cat-all").checked = false;
            categoryFilters.forEach(c => {
                if (c.value === cat) c.checked = true;
                else c.checked = false;
            });
            activeFilters.categories = [cat];
            renderProducts();
            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
        });
    });
}

// THEME GRAPHICS HELPER
function updateThemeIcon(theme) {
    if (theme === "dark") {
        themeToggle.innerHTML = 'dark_mode'; // Material Icon name
    } else {
        themeToggle.innerHTML = 'light_mode'; // Material Icon name
    }
}

// SEARCH GRAPHICS HELPER
function openSearch() {
    searchOverlay.style.display = "flex";
    setTimeout(() => {
        searchOverlay.style.opacity = "1";
        searchInput.focus();
    }, 10);
}

function closeSearch() {
    searchOverlay.style.opacity = "0";
    setTimeout(() => {
        searchOverlay.style.display = "none";
    }, 300);
}

// CART ACTIONS
function openCart() {
    cartDrawerOverlay.style.display = "block";
    setTimeout(() => {
        cartDrawerOverlay.style.opacity = "1";
        cartDrawer.classList.add("open");
    }, 10);
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartDrawerOverlay.style.opacity = "0";
    setTimeout(() => {
        cartDrawerOverlay.style.display = "none";
    }, 350);
}

// CLOSE ALL MODALS
function closeAllModals() {
    closeSizeModal();
    closeProductModal();
}

function openSizeModal() {
    sizeModalOverlay.style.display = "block";
    sizeModal.style.display = "flex";
    setTimeout(() => {
        sizeModalOverlay.style.opacity = "1";
        sizeModal.classList.add("open");
    }, 10);
}

function closeSizeModal() {
    sizeModal.classList.remove("open");
    sizeModalOverlay.style.opacity = "0";
    setTimeout(() => {
        sizeModalOverlay.style.display = "none";
        sizeModal.style.display = "none";
        sizeResultDisplay.style.display = "none";
        document.getElementById("height-input").value = "";
        document.getElementById("weight-input").value = "";
    }, 350);
}

function openProductModal(productId) {
    const product = PRODUCT_CATALOG.find(p => p.id === productId);
    if (!product) return;
    
    currentSelectedProduct = product;
    
    // Set content
    document.getElementById("m-product-title").innerText = product.name;
    document.getElementById("m-product-name").innerText = product.name;
    document.getElementById("m-product-image").src = product.image;
    document.getElementById("m-product-category").innerText = `${product.category} Wear`;
    document.getElementById("m-product-price").innerText = `₹${product.price}`;
    document.getElementById("m-product-orig-price").innerText = `₹${product.origPrice}`;
    document.getElementById("m-product-desc").innerText = product.description;
    
    // Stars
    let starsHtml = "";
    for (let s = 1; s <= 5; s++) {
        if (s <= Math.floor(product.rating)) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    starsHtml += ` <span>(${product.reviews} reviews)</span>`;
    document.getElementById("m-product-rating").innerHTML = starsHtml;
    
    // Discount Tag
    const discount = Math.round(((product.origPrice - product.price) / product.origPrice) * 100);
    document.getElementById("m-product-discount-tag").innerText = `${discount}% OFF`;

    // Colors
    const colorContainer = document.getElementById("m-color-swatches");
    colorContainer.innerHTML = "";
    product.colors.forEach((col, idx) => {
        const swatch = document.createElement("div");
        swatch.className = `color-swatch ${idx === 0 ? "active" : ""}`;
        swatch.style.backgroundColor = col;
        swatch.addEventListener("click", () => {
            document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
            swatch.classList.add("active");
        });
        colorContainer.appendChild(swatch);
    });

    // Sizes
    const sizeContainer = document.getElementById("m-size-options");
    sizeContainer.innerHTML = "";
    product.sizes.forEach((sz, idx) => {
        const btn = document.createElement("button");
        btn.className = `size-btn ${idx === 0 ? "active" : ""}`;
        btn.innerText = sz;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
        sizeContainer.appendChild(btn);
    });

    // Reset qty
    productQtyVal.innerText = "1";

    // Show
    productModalOverlay.style.display = "block";
    productModal.style.display = "flex";
    setTimeout(() => {
        productModalOverlay.style.opacity = "1";
        productModal.classList.add("open");
    }, 10);
}

function closeProductModal() {
    productModal.classList.remove("open");
    productModalOverlay.style.opacity = "0";
    setTimeout(() => {
        productModalOverlay.style.display = "none";
        productModal.style.display = "none";
        currentSelectedProduct = null;
    }, 350);
}

// 4. RENDERING CATALOG PRODUCTS
function renderProducts() {
    // Filter
    let filtered = PRODUCT_CATALOG.filter(p => {
        // Search filter
        const matchesSearch = p.name.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                              p.description.toLowerCase().includes(activeFilters.search.toLowerCase());
        
        // Category filter
        const matchesCategory = activeFilters.categories.includes("all") || activeFilters.categories.includes(p.category);
        
        // Price filter
        const matchesPrice = p.price <= activeFilters.maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort
    if (currentSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // Render count
    productsCountTxt.innerText = `Showing ${filtered.length} products`;

    // Render Grid
    productGrid.innerHTML = "";
    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-results-box" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fa-solid fa-square-minus" style="font-size: 3rem; margin-bottom: 15px; color: var(--border-color);"></i>
                <p>No products match your criteria. Try adjusting filters.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        const disc = Math.round(((p.origPrice - p.price) / p.origPrice) * 100);
        
        card.innerHTML = `
            <div class="product-image-area">
                <span class="badge-discount">${disc}% OFF</span>
                <img src="${p.image}" alt="${p.name}">
                <div class="product-quick-actions">
                    <button class="quick-btn detail-btn-trigger" data-id="${p.id}" title="Quick View"><i class="fa-solid fa-eye"></i></button>
                    <button class="quick-btn add-btn-trigger" data-id="${p.id}" title="Quick Add"><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>
            <div class="product-info-area">
                <span class="p-category">${p.category} Wear</span>
                <h3 class="p-name detail-title-trigger" data-id="${p.id}">${p.name}</h3>
                <div class="product-rating">
                    ${Array.from({ length: 5 }, (_, i) => i < Math.floor(p.rating) ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>').join('')}
                </div>
                <div class="p-pricing">
                    <span class="p-price-current">₹${p.price}</span>
                    <span class="p-price-orig">₹${p.origPrice}</span>
                </div>
            </div>
        `;

        // Attach listeners to card triggers
        card.querySelector(".detail-btn-trigger").addEventListener("click", () => openProductModal(p.id));
        card.querySelector(".detail-title-trigger").addEventListener("click", () => openProductModal(p.id));
        
        card.querySelector(".add-btn-trigger").addEventListener("click", () => {
            addToCart(p.id, 1, p.sizes[0] || "M");
            openCart();
        });

        productGrid.appendChild(card);
    });
}

// CART ENGINE LOGIC
function addToCart(productId, qty, size) {
    const product = PRODUCT_CATALOG.find(p => p.id === productId);
    if (!product) return;

    // Check if item already in cart with same size
    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
        existing.qty += qty;
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
    
    updateCartUI();
}

function updateCartQty(idx, newQty) {
    if (newQty <= 0) {
        cart.splice(idx, 1);
    } else {
        cart[idx].qty = newQty;
    }
    updateCartUI();
}

function updateCartUI() {
    // Save locally
    localStorage.setItem("fashionhub_cart", JSON.stringify(cart));

    // Badge
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalQty;

    // Empty state
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your bag is empty.</p>
                <button class="btn btn-outline" id="cart-start-shopping-inner">Start Shopping</button>
            </div>
        `;
        document.getElementById("cart-summary").style.opacity = "0.5";
        document.getElementById("cart-summary").style.pointerEvents = "none";
        
        // Relink inner empty button
        const btnInner = document.getElementById("cart-start-shopping-inner");
        if (btnInner) {
            btnInner.addEventListener("click", () => {
                closeCart();
                document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
            });
        }
        
        cartSubtotal.innerText = "₹0";
        cartTotal.innerText = "₹0";
        cartDiscountLine.style.display = "none";
        return;
    }

    document.getElementById("cart-summary").style.opacity = "1";
    document.getElementById("cart-summary").style.pointerEvents = "all";

    // Render Items
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, idx) => {
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-meta">Size: ${item.size}</span>
                <div class="cart-item-actions">
                    <div class="cart-item-qty">
                        <button class="qty-minus" data-idx="${idx}"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.qty}</span>
                        <button class="qty-plus" data-idx="${idx}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button class="cart-item-remove" data-idx="${idx}">Remove</button>
                </div>
            </div>
            <div class="cart-item-price">₹${item.price * item.qty}</div>
        `;

        row.querySelector(".qty-minus").addEventListener("click", () => updateCartQty(idx, item.qty - 1));
        row.querySelector(".qty-plus").addEventListener("click", () => updateCartQty(idx, item.qty + 1));
        row.querySelector(".cart-item-remove").addEventListener("click", () => updateCartQty(idx, 0));

        cartItemsContainer.appendChild(row);
    });

    // Totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartSubtotal.innerText = `₹${subtotal.toLocaleString()}`;

    if (appliedCoupon === LAUNCH_COUPON) {
        const discountVal = Math.round(subtotal * 0.1);
        cartDiscountVal.innerText = `-₹${discountVal.toLocaleString()}`;
        cartDiscountLine.style.display = "flex";
        cartTotal.innerText = `₹${(subtotal - discountVal).toLocaleString()}`;
    } else {
        cartDiscountLine.style.display = "none";
        cartTotal.innerText = `₹${subtotal.toLocaleString()}`;
    }
}

// SIZE PREDICTOR ENGINE
function predictSize() {
    const height = parseFloat(document.getElementById("height-input").value);
    const weight = parseFloat(document.getElementById("weight-input").value);
    const fit = document.getElementById("fit-preference").value;

    if (!height || !weight || height <= 0 || weight <= 0) {
        sizeResultDisplay.innerHTML = `<p style="color: var(--error);">Please enter valid height and weight values.</p>`;
        sizeResultDisplay.style.display = "block";
        return;
    }

    let baseSize = "M";

    if (height < 160) {
        if (weight < 50) baseSize = "S";
        else if (weight <= 65) baseSize = "M";
        else baseSize = "L";
    } else if (height <= 175) {
        if (weight < 55) baseSize = "S";
        else if (weight <= 72) baseSize = "M";
        else if (weight <= 84) baseSize = "L";
        else baseSize = "XL";
    } else {
        if (weight < 68) baseSize = "M";
        else if (weight <= 82) baseSize = "L";
        else if (weight <= 94) baseSize = "XL";
        else baseSize = "XXL";
    }

    // Apply fit adjustment
    const sizeOrder = ["S", "M", "L", "XL", "XXL"];
    let sizeIndex = sizeOrder.indexOf(baseSize);

    if (fit === "slim" && sizeIndex > 0) {
        sizeIndex--;
    } else if (fit === "relaxed" && sizeIndex < sizeOrder.length - 1) {
        sizeIndex++;
    }

    const predictedSize = sizeOrder[sizeIndex];

    sizeResultDisplay.innerHTML = `
        <p>Your Predicted FashionHub Size is:</p>
        <h4>${predictedSize}</h4>
        <p style="margin-top: 5px; font-size: 0.75rem;">Based on height ${height}cm, weight ${weight}kg & ${fit} fit.</p>
        <button class="btn btn-sm btn-primary" id="adopt-predicted-size-btn" style="margin-top: 10px;">Select ${predictedSize} Size</button>
    `;
    sizeResultDisplay.style.display = "block";

    // Adopt size button
    document.getElementById("adopt-predicted-size-btn").addEventListener("click", () => {
        closeSizeModal();
        if (currentSelectedProduct) {
            // Re-open product details modal to let them add it
            openProductModal(currentSelectedProduct.id);
            setTimeout(() => {
                const btns = document.querySelectorAll(".size-btn");
                btns.forEach(btn => {
                    if (btn.innerText === predictedSize) {
                        btns.forEach(b => b.classList.remove("active"));
                        btn.classList.add("active");
                    }
                });
            }, 100);
        } else {
            // Scroll to shop
            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
        }
    });
}

// 5. INTERACTIVE TIMELINE ACTIONS
function selectTimelinePhase(phaseNum) {
    const data = TIMELINE_DATA[phaseNum];
    if (!data) return;

    // Render detailed panel
    displayPhaseNum.innerText = data.num;
    displayPhaseDuration.innerText = data.duration;
    displayPhaseTitle.innerText = data.title;

    let activitiesHtml = "";
    data.activities.forEach(act => {
        activitiesHtml += `<li>${act}</li>`;
    });

    displayPhaseBody.innerHTML = `
        <div>
            <h4>Key Activities:</h4>
            <ul>
                ${activitiesHtml}
            </ul>
        </div>
        <div style="margin-top: 10px;">
            <h4>Deliverable Milestone:</h4>
            <span class="milestone-badge"><i class="fa-solid fa-flag"></i> ${data.milestone}</span>
        </div>
    `;

    // Make card active in list
    document.querySelectorAll(".timeline-card").forEach(c => {
        if (parseInt(c.getAttribute("data-phase")) === phaseNum) {
            c.classList.add("active");
            c.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            c.classList.remove("active");
        }
    });
}

// 6. CHATBOT CLIENT DIALOGUE ENGINE
function handleChatSubmit() {
    const text = chatUserInput.value.trim();
    if (!text) return;

    // Add user bubble
    appendChatMessage(text, "user");
    chatUserInput.value = "";

    // Show bot thinking state
    const thinkingId = appendChatThinking();

    // Generate responsive response after mock delay
    setTimeout(() => {
        removeChatThinking(thinkingId);
        const reply = getAIStylistResponse(text);
        appendChatMessage(reply, "bot");
    }, 1000);
}

function appendChatMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${sender}`;
    bubble.innerHTML = `<p>${text}</p>`;
    chatMessagesContainer.appendChild(bubble);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function appendChatThinking() {
    const bubble = document.createElement("div");
    bubble.className = "chat-message bot thinking-bubble";
    bubble.id = "thinking-" + Date.now();
    bubble.innerHTML = `<p><i class="fa-solid fa-ellipsis fa-bounce"></i> Stylist is planning...</p>`;
    chatMessagesContainer.appendChild(bubble);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    return bubble.id;
}

function removeChatThinking(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function getAIStylistResponse(query) {
    const text = query.toLowerCase();

    // Keywords matching
    if (text.includes("festive") || text.includes("celebration") || text.includes("diwali") || text.includes("onam")) {
        return "For festive occasions, I highly recommend our **Aarya Rose Kurti** (₹1,299) paired with a traditional gold wrap. For men, the **Rudra Charcoal Kurta** (₹1,499) with gold embroidery offers a bold, sophisticated ethnic look. Would you like me to open one of these?";
    }
    
    if (text.includes("office") || text.includes("casual") || text.includes("work")) {
        return "Our **Rudra Charcoal Kurta** can double as an elegant semi-formal office wear when paired with light trousers. For accessories, the **Tan & Charcoal Leather Tote** (₹2,499) fits laptops up to 14 inches and is perfect for professional settings.";
    }

    if (text.includes("bag") || text.includes("handbag") || text.includes("tote") || text.includes("accessory")) {
        return "The **Tan & Charcoal Leather Tote** (₹2,499) is our premium accessory offering. It features gold brass metal clasps and dual-tone grain leather panels. It matches beautifully with both ethnic kurtas and western fusion wear.";
    }

    if (text.includes("kurti") || text.includes("women")) {
        return "The **Aarya Rose Kurti** (₹1,299) is our best seller. It features a modern cotton-silk blend in champagne rose. We also offer customization options in Phase 9 of our project plan!";
    }

    if (text.includes("kurta") || text.includes("men")) {
        return "Our **Rudra Charcoal Kurta** (₹1,499) features premium self-textured charcoal fabric. Perfect for modern Indian men who appreciate minimalism with heritage accents.";
    }

    if (text.includes("timeline") || text.includes("phase") || text.includes("plan") || text.includes("roadmap") || text.includes("dpr")) {
        return "Our DPR Project Timeline features **10 detailed phases** from Planning (Phase 1) and Tech Dev (Phase 5) to full Public Launch (Phase 8) and Pan-India expansion (Phase 10). We project reaching operational break-even within 18 months in Phase 9. Check the 'DPR Plan' section on our nav bar for interactive steps!";
    }

    if (text.includes("sustainability") || text.includes("csr") || text.includes("green") || text.includes("eco")) {
        return "FashionHub is committed to green operations: **100% recyclable shipping boxes** within 24 months, **20% direct sourcing** from women's self-help groups (SHGs), and planting **1 tree per 100 orders** processed. We build commerce with conscience.";
    }

    if (text.includes("size") || text.includes("fit") || text.includes("measure")) {
        return "Try our integrated **AI Size Predictor**! You can click the 'Find my size' link inside any product view or open the ruler tool in the header actions. We calculate your fit based on height and weight vectors.";
    }

    // Default response
    return "I love that query! To explore further, you can check out our seasonal catalog under the **Shop** section, read our active **10-Phase DPR roadmap** on the main nav, or ask me to recommend specific outfits.";
}

// Close widgets when scrolling or navigation changes
function closeChat() {
    chatBoxDrawer.classList.remove("open");
}
