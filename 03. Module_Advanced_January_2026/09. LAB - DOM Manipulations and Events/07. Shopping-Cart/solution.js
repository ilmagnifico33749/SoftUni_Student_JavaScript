function solve() {
    const buttons = Array.from(document.querySelectorAll('.add-product'));
    const checkoutBtn = document.querySelector('.checkout');
    const output = document.querySelector('textarea');

    let products = new Set();
    let totalPrice = 0;

    // Add product buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', addProduct);
    });

    // Checkout button
    checkoutBtn.addEventListener('click', checkout);

    function addProduct(e) {
        const productElement = e.target.parentElement.parentElement;

        const name = productElement.querySelector('.product-title').textContent;
        const price = Number(productElement.querySelector('.product-line-price').textContent);

        products.add(name);
        totalPrice += price;

        output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }

    function checkout() {
        output.value += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`;

        // Disable all buttons
        buttons.forEach(btn => btn.disabled = true);
        checkoutBtn.disabled = true;
    }
}
