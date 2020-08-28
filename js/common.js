function selectProduct(id) {
    model.inputs.productShownId = id;
    if (model.currentPage === 'Home')showHome();
}

function deselectProduct() {
    model.inputs.productShownId = null;
    if (model.currentPage === 'Home')showHome();
}