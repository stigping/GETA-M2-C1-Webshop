function removeProduct(id) {
    let index = searchBasketProductIndex(id);
    model.shoppingBasket.products.splice(index, 1);
    console.log(index);
    showBasket();
}

function changeProductAmount(add, id) {
    let productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    product.amount += add ? 1 : -1;
    if (product.amount <= 0) removeProduct(model.currentUserId, id)
    showBasket()
}

function changeProductAmount2(amount, id) {
    let productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    product.amount = amount;
    if (amount <= 0) removeProduct(id)
    showBasket()
}

function orderProducts() {
    model.orderHistory[model.currentUserId].orderList.push({
        orderId: model.orderHistory[model.currentUserId].nextOrderId,
        delivered: false,
        productsId: getBasketProductsId(),
        productsAmount: getBasketProductAmount(),
    })
    model.orderHistory[model.currentUserId].nextOrderId++;
    model.shoppingBasket = { products: [], priceTotalAll: null };
    showBasket();
    alert('Takk for kjøpet!');
}

function getBasketProductsId() {
    let idList = [];
    for (index = 0; index < model.shoppingBasket.products.length; index++) {
        idList.push(model.shoppingBasket.products[index].id)
    }
    return idList
}

function getBasketProductAmount() {
    let idList = [];
    for (index = 0; index < model.shoppingBasket.products.length; index++) {
        idList.push(model.shoppingBasket.products[index].amount)
    }
    return idList
}