let cart = {};
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".köp-coin").forEach(button => {
        button.addEventListener("click", function() {
            let coinElement = this.parentElement;
            let coinName = coinElement.dataset.name;
            let coinPrice = parseInt(coinElement.dataset.price);
            
            if (!cart[coinName]) {
                cart[coinName] = { quantity: 0, price: coinPrice };
            }
            cart[coinName].quantity++;
            totalPrice += coinPrice;
            updateCart();
        });
    });

    document.querySelectorAll(".sälj-coin").forEach(button => {
        button.addEventListener("click", function() {
            let coinElement = this.parentElement;
            let coinName = coinElement.dataset.name;
            let coinPrice = parseInt(coinElement.dataset.price);
            
            if (cart[coinName] && cart[coinName].quantity > 0) {
                cart[coinName].quantity--;
                totalPrice -= coinPrice;
                if (cart[coinName].quantity === 0) {
                    delete cart[coinName];
                }
            }
            updateCart();
        });
    });
});

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");
    cartItems.innerHTML = "";
    
    for (let coin in cart) {
        let li = document.createElement("li");
        li.textContent = `${coin}: ${cart[coin].quantity} st - ${cart[coin].quantity * cart[coin].price}kr`;
        cartItems.appendChild(li);
    }
    totalElement.textContent = `Totalt: ${totalPrice}kr`;
}

// function chart1stock() {
//     rnd = Random_Float(); // generate number, 0 <= x < 1.0
//     change_percent = 2 * volatility * rnd;
//     if (change_percent > volatility)
//     change_percent -= (2 * volatility);
//     change_amount = old_price * change_percent;
//     new_price = old_price + change_amount;
// }
// Den här biten av kod var först tänkt att användas att generara alla charts till valutorna men jag hittade inte ett sätt att få till dem som bilder