function updateContactInformation() {
    let stringified = JSON.stringify(model.users[model.currentUserId]);
    let parsed = JSON.parse(stringified);
    model.users[model.currentUserId] = parsed;
    showContactInformation()
}

function updatePassword() {
    const editPasswordInput = model.inputs.user.editPassword;
    // Kan gjøres om til ternary operator, men står som if nå. Kan hende vi trenger mer kode der.
    if (editPasswordInput.oldPassword === model.users[model.currentUserId].password) {
        model.users[model.currentUserId].password = editPasswordInput.newPassword
    }
    showChangePassword()
}