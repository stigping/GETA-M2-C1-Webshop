function removeProduct(id) {
    index = searchBasketProductIndex(id);
    model.shoppingBasket.products.splice(index, 1);
    console.log(index);
    showBasket();
}

function changeProductAmount(add, id) {
    productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    product.amount += add ? 1 : -1;
    if (product.amount <= 0) removeProduct(model.currentUserId, id)
    showBasket()
}

function changeProductAmount2(amount, id) {
    productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    product.amount = amount;
    if (amount <= 0) removeProduct(id)
    showBasket()
}