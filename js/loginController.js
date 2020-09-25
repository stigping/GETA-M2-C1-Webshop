function login() {
    for (i = 0; i < model.users.length; i++) {
        if (model.users[searchUserIndex(i)].username === model.inputs.user.loginInput.username && model.users[searchUserIndex(i)].password === model.inputs.user.loginInput.password) {
            model.currentUserId = i;
            return showF()
        }
    }
    alert('Du har skrevet feil!')
}

function createUser() {
    const newUserInput = model.inputs.user.newUserInput;
    const newUserId = model.inputs.newUserId;
    model.users.push({
        id: newUserId,
        username: newUserInput.username,
        name: newUserInput.name,
        surname: newUserInput.surname,
        email: newUserInput.email,
        address: newUserInput.address,
        password: newUserInput.password,
        phoneNumber: newUserInput.phoneNumber,
        isAdmin: false,
    })

    model.orderHistory.push({
        id: model.inputs.newUserId,
        orderList: [],
        nextOrderId: 0,
    })

    model.currentUserId = newUserId;
    model.inputs.newUserId++;
    showF()
}

function changeMenu(login, newUser) {
    if (login === true) model.inputs.user.createNewUserEdit = false;
    if (newUser === true) model.inputs.user.createNewUserEdit = true;
    showLogin()
}