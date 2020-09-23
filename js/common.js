function addProduct(prodId) {
    const shoppingBasket = model.shoppingBasket[model.currentUser.id].products;
    if (searchBasketProductIndex(prodId) === -1) {
        shoppingBasket.push({
            id: prodId,
            amount: 1,
            priceTotal: null
        });
        model.productShowBox.productShownId = null;
        return showB()
    } else {
        productIndex = searchBasketProductIndex(prodId);
        shoppingBasket[productIndex].amount++
        model.productShowBox.productShownId = null;
        return showB()
    }
}

function selectProduct(id) {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    model.productShowBox.productShownId = id;
    // body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    model.currentPage === 'Basket' ? showBasket() : showHome();
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
    model.currentPage === 'Basket' ? showBasket() : showHome();
}

function searchProductIndex(id) {
    let search = model.products.findIndex(searchid => searchid['id'] === id);
    return search
}
function searchUserIndex(id) {
    let search = model.users.findIndex(searchid => searchid['id'] === id);
    return search
}

function searchBasketProductIndex(id) {
    let search = model.shoppingBasket[model.currentUser.id].products.findIndex(searchid => searchid['id'] === id);
    return search
}

function newUserCreate() {
    
}

function showMobileMenu() {
    html = `     
<div class="mobileMenu">
    <span>
        <a href="javascript:showA()">
            <i class="footer-text fas fa-home fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:_blank">
            <i class="footer-text fas fa-dragon fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:_blank">
            <i class="footer-text fas fa-bed fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:showF()">
            <i class="footer-text fas fa-user fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:showB()">
            <i class="footer-text fas fa-shopping-cart fa-lg"></i>
        </a>
    </span>
</div>
`;

    return html
}