function removeProduct(user, id) {
    index = searchProductIndex(id);
    model.shoppingBasket[user].products.splice(index, 1);
    console.log(index);
    showBasket();
}

function changeProductAmount(add, prodId) {
    productIndex = searchProductIndex(prodId);
    if(add === true) {
    model.shoppingBasket[model.currentUser.id].products[productIndex].amount++
    }
    if(add === false || model.shoppingBasket[model.currentUser.id].products[productIndex].amount !< 0) {
    model.shoppingBasket[model.currentUser.id].products[productIndex].amount--
    }
    showB()
}