function addProduct(prodId) {
    if (searchProductIndex(prodId) === -1) {
       return model.shoppingBasket[model.currentUser.id].products.push({id: prodId, amount: 1, priceTotal: null})
    } else {
        productIndex = searchProductIndex(prodId);
        model.shoppingBasket[model.currentUser.id].products[productIndex].amount++
    }
}

function selectProduct(id) {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    model.inputs.productShownId = id;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function deselectProduct() {
    const body = document.body;
    const scrollY = body.style.top;
    model.inputs.productShownId = null;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY) * -1);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function searchProductIndex(id) {
    let search = model.shoppingBasket[model.currentUser.id].products.findIndex(searchid => searchid['id'] === id);
    return search
}