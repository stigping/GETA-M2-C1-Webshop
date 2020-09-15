function adminAddNewProduct() {
    const newProductInputs = model.inputs.newProductInputs;
    model.products.push({
        id: newProductInputs.id,
        name: newProductInputs.name,
        moms: newProductInputs.moms,
        productInfo: newProductInputs.productInfo,
        contents: newProductInputs.contents,
        calories: newProductInputs.calories,
        allergies: newProductInputs.allergies,
        price: newProductInputs.price,
        images: newProductInputs.images,
        });
        
        model.inputs.newProductInputs.id++;
        showAdmin()
}

function adminRemoveProduct(id) {
    index = searchProductIndex(id);
    model.products.splice(index, 1);
    console.log(index);
    return showAdmin();
}

function adminEditProduct(id, update) {
    index = searchUserIndex(id);
    if (update === false) {
        model.isEditing = false;
        model.inputs.editProductInputs = [];
        return showAdmin()
    }
    if (update === true) {
        model.isEditing = false;
        model.products[index] = model.inputs.editProductInputs;
        return showAdmin()
    }
    model.inputs.editProductInputs = model.products[index];
    model.isEditing = true;
    console.log(index);
    showAdmin();
}

// function adminAddUser() {
//     const newUserInputs = model.inputs.newUserInputs;
//     model.users.push({
//         username: model.inputs.newUserInputs.username, 
//         name: model.inputs.newUserInputs.name, 
//         surname: model.inputs.newUserInputs.surname, 
//         email: model.inputs.newUserInputs.email, 
//         password: model.inputs.newUserInputs.password, 
//         id: model.inputs.newUserInputs.id, 
//         isAdmin: model.inputs.newUserInputs.isAdmin
//     });
//     showAdmin();
    
// }

function adminRemoveUser(id) {
    index = searchUserIndex(id);
    model.users.splice(index, 1);
    console.log(index);
    showAdmin();
}

function adminEditUser() {

}

function searchProductIndex(id) {
    let search = model.products.findIndex(searchid => searchid['id'] === id);
    return search
}

function searchUserIndex(id) {
    let search = model.users.findIndex(searchid => searchid['id'] === id);
    return search
}