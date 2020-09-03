function removeProduct(user, id) {
    index = searchProductIndex(id);
    model.shoppingBasket[user].products.splice(index, 1);
    console.log(index);
    showBasket();
}