function updateContactInformation() {
    const currentUser = model.users[model.currentUserId];
    currentUser.username = document.getElementById('usernameInput').value;
    currentUser.name = document.getElementById('nameInput').value;
    currentUser.surname = document.getElementById('surnameInput').value;
    currentUser.address = document.getElementById('addressInput').value;
    currentUser.email = document.getElementById('emailInput').value;
    currentUser.phoneNumber = document.getElementById('phoneNumberInput').value;
}

function updatePassword() {
    
}