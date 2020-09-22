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
    index = searchProductIndex(id);
    if (update === false) {
        model.productIsEditing = false;
        model.inputs.editProductInputs = [];
        return showAdmin()
    }
    if (update === true) {
        model.productIsEditing = false;
        model.products[index] = model.inputs.editProductInputs;
        return showAdmin()
    }
    stringified = JSON.stringify(model.inputs.editProductInputs);
    parsed = JSON.parse(model.products[index]);
    
    model.productIsEditing = true;
    console.log(index);
    showAdmin();
}

function adminAddUser() {
    const newUserInputs = model.inputs.newUserInputs;
    model.users.push({
        username: newUserInputs.username, 
        name: newUserInputs.name, 
        surname: newUserInputs.surname, 
        email: newUserInputs.email, 
        phoneNumber: newUserInputs.phoneNumber,
        password: newUserInputs.password, 
        isAdmin: newUserInputs.isAdmin,
        id: newUserInputs.id, 
    });
    showAdmin();
    
}

function adminRemoveUser(id) {
    index = searchUserIndex(id);
    model.users.splice(index, 1);
    console.log(index);
    showAdmin();
}

function adminEditUser(id, update) {
    index = searchUserIndex(id);
    if (update === false) {
        model.userIsEditing = false;
        model.inputs.editProductInputs = [];
        return showAdmin()
    }
    if (update === true) {
        model.userIsEditing = false;
        model.products[index] = model.inputs.editProductInputs;
        return showAdmin()
    }
    model.inputs.editUserInputs = model.users[index];
    model.userIsEditing = true;
    console.log(index);
    showAdmin();
}