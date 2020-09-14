function addNewProduct() {
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