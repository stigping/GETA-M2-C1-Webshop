function adminAddNewProduct() {
    const newProductInputs = model.inputs.admin.newProductInputs;
    model.products.push({
        id: model.inputs.newProductId,
        name: newProductInputs.name,
        moms: newProductInputs.moms,
        productInfo: newProductInputs.productInfo,
        contents: newProductInputs.contents,
        calories: newProductInputs.calories,
        allergies: newProductInputs.allergies,
        price: newProductInputs.price,
        images: newProductInputs.images,
        });
        
        model.inputs.newProductId++
        showAdmin()
}

function adminRemoveProduct(id) {
    let index = searchProductIndex(id);
    model.products.splice(index, 1);
    console.log(index);
    return showAdmin();
}

function adminEditProduct(id) {
    const adminInputs = model.inputs.admin;
    let index = searchProductIndex(id);
    let stringified = JSON.stringify(model.products[index]);
    let parsed = JSON.parse(stringified);
    adminInputs.editProductInputs = parsed; 
    adminInputs.productIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateProduct(really) {
    const adminInputs = model.inputs.admin;
    let index = searchProductIndex(adminInputs.editProductInputs.id);
    really === true ? model.products[index] = adminInputs.editProductInputs : adminInputs.editProductInputs = [];
    adminInputs.productIsEditing = false;
    showAdmin()
}

function adminAddUser() {
    const newUserInputs = model.inputs.admin.newUserInputs;
    let newUserId = model.inputs.newUserId;
    model.users.push({
        id: newUserId, 
        username: newUserInputs.username, 
        name: newUserInputs.name, 
        surname: newUserInputs.surname, 
        email: newUserInputs.email, 
        phoneNumber: newUserInputs.phoneNumber,
        password: newUserInputs.password, 
        isAdmin: newUserInputs.isAdmin,
    });

    model.orderHistory.push({
        id: newUserId,
        orderList: [],
    })

    newUserId++
    showAdmin();
}

function adminRemoveUser(id) {
    let userIndex = searchUserIndex(id);
    model.users.splice(userIndex, 1);
    console.log(userIndex);
    showAdmin();
}

function adminEditUser(id) {
    const adminInputs = model.inputs.admin;
    let userIndex = searchUserIndex(id);
    let stringified = JSON.stringify(model.users[userIndex]);
    let parsed = JSON.parse(stringified);
    adminInputs.editUserInputs = parsed;
    adminInputs.userIsEditing = true;
    console.log(userIndex);
    showAdmin();
}

function updateUser(really) {
    const adminInputs = model.inputs.admin;
    let userIndex = searchUserIndex(adminInputs.editUserInputs.id);
    really === true ? model.users[userIndex] = adminInputs.editUserInputs : adminInputs.editUserInputs = [];
    adminInputs.userIsEditing = false;
    showAdmin()
}