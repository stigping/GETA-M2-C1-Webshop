function addProduct(prodId) {
    const shoppingBasket = model.shoppingBasket[model.currentUser.id].products;
    if (searchBasketProductIndex(prodId) === -1) {
       return shoppingBasket.push({id: prodId, amount: 1, priceTotal: null})
    } else {
        productIndex = searchBasketProductIndex(prodId);
        shoppingBasket[productIndex].amount++
    }
}

function selectProduct(id) {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    model.productShowBox.productShownId = id;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function deselectProduct() {
    const body = document.body;
    const scrollY = body.style.top;
    model.productShowBox.productShownId = null;
    model.productShowBox.currentImage = 0;
    model.productShowBox.currentTab = 0;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY) * -1);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function searchBasketProductIndex(id) {
    let search = model.shoppingBasket[model.currentUser.id].products.findIndex(searchid => searchid['id'] === id);
    return search
}