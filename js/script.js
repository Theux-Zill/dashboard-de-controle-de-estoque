// ========================================
// DOM ELEMENTS
// ========================================
const addButton = document.getElementById("addProductButton");
const nameInput = document.getElementById("productNameInput");
const quantityInput = document.getElementById("productQuantityInput");
const dateInput = document.getElementById("productDateInput");
const tableBody = document.querySelector("tbody");
const searchInput = document.getElementById("searchInput");
const errorMessage = document.getElementById("errorMessage");

// ========================================
// CONSTANTS
// ========================================
const STORAGE_KEY = "products";
const DAYS_EXPIRING_SOON = 3;
const DAYS_EXPIRING_WARN = 7;

// ========================================
// STATE
// ========================================
let products = [];

// ========================================
// INITIALIZATION
// ========================================
const init = () => {
    loadProducts();
    attachEventListeners();
    renderProducts();
};

// ========================================
// STORAGE MANAGEMENT
// ========================================
const loadProducts = () => {
    try {
        products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        products = [];
    }
};

const saveProducts = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
        console.error("Erro ao salvar produtos:", error);
        showError("Erro ao salvar produtos no navegador.");
    }
};

// ========================================
// PRODUCT MANAGEMENT
// ========================================
const addProduct = () => {
    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (!validateProductInputs(name, quantity, date)) return;

    clearErrorMessage();

    const product = { name, quantity, date };
    products.push(product);

    saveProducts();
    renderProducts();
    resetFormInputs();
};

const removeProduct = (index) => {
    if (!confirm("Deseja realmente remover este produto?")) return;

    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        saveProducts();
        renderProducts();
    }
};

// ========================================
// VALIDATION
// ========================================
const validateProductInputs = (name, quantity, date) => {
    if (!name || !quantity || !date) {
        showError("Por favor, preencha todos os campos.");
        return false;
    }

    if (isNaN(quantity) || parseInt(quantity) <= 0) {
        showError("A quantidade deve ser um número positivo.");
        return false;
    }

    return true;
};

// ========================================
// STATUS CALCULATION
// ========================================
const getStatus = (dateString) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const validade = new Date(dateString);
        validade.setHours(0, 0, 0, 0);

        const diffTime = validade - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return "Vencido";
        if (diffDays <= DAYS_EXPIRING_SOON) return "Proximo";
        if (diffDays <= DAYS_EXPIRING_WARN) return "Ok";
        return "Ok";
    } catch (error) {
        console.error("Erro ao calcular status:", error);
        return "Ok";
    }
};

// ========================================
// RENDERING
// ========================================
const renderProducts = (list = products) => {
    tableBody.innerHTML = "";

    if (list.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5' style='text-align:center;'>Nenhum produto encontrado.</td></tr>";
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach((product, index) => {
        const status = getStatus(product.date);
        const row = createProductRow(product, status, index);
        fragment.appendChild(row);
    });

    tableBody.appendChild(fragment);
};

const createProductRow = (product, status, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td data-label="Produto">${escapeHtml(product.name)}</td>
        <td data-label="Quantidade">${escapeHtml(product.quantity)}</td>
        <td data-label="Data">${escapeHtml(product.date)}</td>
        <td class="${status}" data-label="Status">${status}</td>
        <td data-label="Ações">
            <button onclick="window.productApp.removeProduct(${index})" title="Remover produto">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    `;
    return row;
};

// ========================================
// SEARCH
// ========================================
const searchProducts = (query) => {
    const search = query.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );
    renderProducts(filtered);
};

// ========================================
// UI UTILITIES
// ========================================
const showError = (message) => {
    errorMessage.textContent = message;
};

const clearErrorMessage = () => {
    errorMessage.textContent = "";
};

const resetFormInputs = () => {
    nameInput.value = "";
    quantityInput.value = "";
    dateInput.value = "";
};

const escapeHtml = (text) => {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return String(text).replace(/[&<>"']/g, char => map[char]);
};

// ========================================
// EVENT LISTENERS
// ========================================
const attachEventListeners = () => {
    addButton.addEventListener("click", addProduct);
    searchInput.addEventListener("input", (e) => searchProducts(e.target.value));
};

// ========================================
// GLOBAL EXPORT
// ========================================
window.productApp = {
    removeProduct,
    init
};

// ========================================
// BOOTSTRAP
// ========================================
document.addEventListener("DOMContentLoaded", init);