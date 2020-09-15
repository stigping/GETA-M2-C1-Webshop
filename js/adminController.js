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