const addButton = document.getElementById("addProductButton");
const nameInput = document.getElementById("productNameInput");
const quantityInput = document.getElementById("productQuantityInput");
const dateInput = document.getElementById("productDateInput");
const tableBody = document.querySelector("tbody");
const searchInput = document.getElementById("searchInput");

let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(list = products) {
    tableBody.innerHTML = "";

    list.forEach(function (product, index) {
        const status = getStatus(product.date);
        const row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.date}</td>
                <td class="${status}">${status}</td>
                <td>
                    <button onclick="removeProduct(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
searchInput.addEventListener("input", function() {
    const search = searchInput.value.toLowerCase();

    const filtered = products.filter(function(product) {
        return product.name.toLowerCase().includes(search);
    });

    renderProducts(filtered);
});

function removeProduct(index) {
    if (confirm("Deseja realmente remover este produto?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
}

addButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (!name || !quantity || !date) {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    } else {
        errorMessage.textContent = "";
    }


    const product = {
        name: name,
        quantity: quantity,
        date: date
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    renderProducts();

    nameInput.value = "";
    quantityInput.value = "";
    dateInput.value = "";
});

function getStatus(date) {
    const today = new Date();
    const validade = new Date(date);

    const diffTime = validade - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays < 0)
        return "Vencido";
    if (diffDays <= 3)
        return "Proximo";
    if (diffDays <= 7)
        return "Ok";
    return;

}


// IMPORTANTE
renderProducts();