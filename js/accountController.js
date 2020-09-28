function updateContactInformation() {
    let stringified = JSON.stringify(model.users[searchUserIndex(model.currentUserId)]);
    let parsed = JSON.parse(stringified);
    model.users[model.currentUserId] = parsed;
    showContactInformation()
    alert('Informasjonen er lagra!')
}

function updatePassword() {
    const editPasswordInput = model.inputs.user.editPassword;
    if (editPasswordInput.oldPassword === model.users[model.currentUserId].password) {
        model.users[model.currentUserId].password = editPasswordInput.newPassword
        showChangePassword()
        return alert('Passord er bytta!') 
    }
    showChangePassword()
    alert('Du har fylt inn feil!')
}