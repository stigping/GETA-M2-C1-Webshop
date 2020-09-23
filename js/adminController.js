function adminAddNewProduct() {
    const newProductInputs = model.inputs.admin.newProductInputs;
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
        
        newProductInputs.id++;
        showAdmin()
}

function adminRemoveProduct(id) {
    index = searchProductIndex(id);
    model.products.splice(index, 1);
    console.log(index);
    return showAdmin();
}

function adminEditProduct(id) {
    const adminInputs = model.inputs.admin;
    index = searchProductIndex(id);
    stringified = JSON.stringify(model.products[index]);
    parsed = JSON.parse(stringified);
    adminInputs.editProductInputs = parsed; 
    adminInputs.productIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateProduct(really) {
    const adminInputs = model.inputs.admin;
    really === true ? model.products[index] = adminInputs.editProductInputs : adminInputs.editProductInputs = [];
    adminInputs.productIsEditing = false;
    showAdmin()
}

function adminAddUser() {
    const newUserInputs = model.inputs.admin.newUserInputs;
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

function adminEditUser(id) {
    const adminInputs = model.inputs.admin;
    index = searchUserIndex(id);
    stringified = JSON.stringify(model.users[index]);
    parsed = JSON.parse(stringified);
    adminInputs.editUserInputs = parsed;
    adminInputs.userIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateUser(really) {
    const adminInputs = model.inputs.admin;
    really === true ? model.users[index] = adminInputs.editUserInputs : adminInputs.editUserInputs = [];
    adminInputs.userIsEditing = false;
    showAdmin()
}