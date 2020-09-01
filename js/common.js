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

function removeProduct(user, id) {
    searchProduct(id)
    model.shoppingBasket[user].products.splice(id, 1)
}

function searchProduct(id) {
    let search = model.shoppingBasket[0].products.find(searchid => searchid['id'] === id);
    return search
}