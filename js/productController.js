function changeImage(num) {
    model.productShowBox.currentImage = num;
    
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function changeTab(num) {
    model.productShowBox.currentTab = num;
}