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
    
}

function changeMenu(login, newUser) {
    if (login === true) model.inputs.user.createNewUserEdit = false;
    if (newUser === true) model.inputs.user.createNewUserEdit = true;
    showLogin()
}