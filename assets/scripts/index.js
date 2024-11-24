precio = 499990

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


const priceElement = document.querySelector('.precio-inicial');
const quantityElement = document.querySelector('.cantidad');
const totalElement = document.querySelector('.valor-total');
const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');


const price = parseFloat(priceElement.textContent);


function updateTotal() {
    const quantity = parseInt(quantityElement.textContent);
    totalElement.textContent = Math.round(price * quantity);
}

increaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
});

decreaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal();
    }
});
