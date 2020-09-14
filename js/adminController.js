function adminAddNewProduct() {
    model.products.push({
        id: model.inputs.newProductInputs.id,
        name: model.inputs.newProductInputs.name,
        moms: model.inputs.newProductInputs.moms,
        productInfo: model.inputs.newProductInputs.productInfo,
        contents: model.inputs.newProductInputs.contents,
        calories: model.inputs.newProductInputs.calories,
        allergies: model.inputs.newProductInputs.allergies,
        price: model.inputs.newProductInputs.price,
        images: model.inputs.newProductInputs.images,
        });
        
        model.inputs.newProductInputs.id++;
        showAdmin()
}

function adminRemoveProduct(id) {
    index = searchProductIndex(id);
    model.products.splice(index, 1);
    console.log(index);
    showAdmin();
}

function searchProductIndex(id) {
    let search = model.products.findIndex(searchid => searchid['id'] === id);
    return search
}