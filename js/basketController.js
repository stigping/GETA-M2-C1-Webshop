function removeProduct(user, id) {
    index = searchProductIndex(id);
    model.shoppingBasket[user].products.splice(index, 1);
    console.log(index);
    showBasket();
}

function changeProductAmount(add, id) {
    productIndex = searchProductIndex(id);
    if(add === true) {
    model.shoppingBasket[model.currentUser.id].products[productIndex].amount++
    }
    if(add === false) {
    model.shoppingBasket[model.currentUser.id].products[productIndex].amount--
    }
    if (model.shoppingBasket[model.currentUser.id].products[productIndex].amount === 0) removeProduct(model.currentUser.id, id)
    showBasket()
}

function changeProductAmount2(amount, id) {
    productIndex = searchProductIndex(id);
    model.shoppingBasket[model.currentUser.id].products[productIndex].amount = amount;
    if (amount <= 0) removeProduct(model.currentUser.id, id)
    showBasket()
}