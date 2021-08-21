// bet btn value and and set on the shoping card
function setValueCard(btnId, btnValue) {
    const btn = document.getElementById(btnId);
    btn.innerText = btnValue;
    getTotal();
};





// get total value
function getTotal() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const storagePrice = parseInt(document.getElementById('storage').innerText);
    const memoryPrice = parseInt(document.getElementById('memory').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-charge').innerText);
    const total = bestPrice + storagePrice + memoryPrice + deliveryPrice;

    document.getElementById('total-price').innerText = total;
    document.getElementById('total-price-footer').innerText = total;

    return total;
};




// promo code use 20% discount
document.getElementById('promo-btn').addEventListener('click', function () {
    let totalBalance = getTotal();
    const promoInputText = document.getElementById('promo-input').value;

    if (promoInputText == 'stevekaku') {
        const discount20 = (totalBalance * 20) / 100;
        totalBalance = parseInt(totalBalance - discount20);
    };
    document.getElementById('total-price-footer').innerText = totalBalance;
});





// btn clicked and update total value

// memory
document.getElementById('memory1-btn').addEventListener('click', function () {
    setValueCard('memory', 0);
});
document.getElementById('memory2-btn').addEventListener('click', function () {
    setValueCard('memory', 180);
});


// storage
document.getElementById('storage1-btn').addEventListener('click', function () {
    setValueCard('storage', 0);
});
document.getElementById('storage2-btn').addEventListener('click', function () {
    setValueCard('storage', 100);
});
document.getElementById('storage3-btn').addEventListener('click', function () {
    setValueCard('storage', 180);
});



// Delivery cost
document.getElementById('delivery1-btn').addEventListener('click', function () {
    setValueCard('delivery-charge', 0);
});
document.getElementById('delivery2-btn').addEventListener('click', function () {
    setValueCard('delivery-charge', 20);
});