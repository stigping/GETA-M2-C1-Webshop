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
        
        model.inputs.admin.newProductInputs.id++;
        showAdmin()
}

function adminRemoveProduct(id) {
    index = searchProductIndex(id);
    model.products.splice(index, 1);
    console.log(index);
    return showAdmin();
}

function adminEditProduct(id) {
    index = searchProductIndex(id);
    stringified = JSON.stringify(model.products[index]);
    parsed = JSON.parse(stringified);
    model.inputs.admin.editProductInputs = parsed; 
    model.productIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateProduct(really) {
    if (really === true) {
    model.productIsEditing = false;
    model.products[index] = model.inputs.admin.editProductInputs;
    }   
    if (really === false) {
    model.productIsEditing = false;
    model.inputs.admin.editProductInputs = [];
    }
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
    index = searchUserIndex(id);
    stringified = JSON.stringify(model.users[index]);
    parsed = JSON.parse(stringified);
    model.inputs.admin.editUserInputs = parsed;
    model.userIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateUser(really) {
    if (really === true) {
        model.userIsEditing = false;
        model.users[index] = model.inputs.admin.editUserInputs;
        }   
    if (really === false) {
        model.userIsEditing = false;
        model.inputs.admin.editUserInputs = [];
        }
    showAdmin()
}