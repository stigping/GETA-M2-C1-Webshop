function showAccount() {
    appDiv.innerHTML = `<div id="grid-container">
    <div id="headerContent">
        <div class='logoWrap'>
            <a href="javascript:showA()">LUNCHPOWER</a>
        </div>
        <div class='inner-menu'>
            <ul class='menuWrap'>
                <li class='active'><a href="javascript:showA()">HOME</a></li>
                <li><a href="javascript:showB()">CART(${model.shoppingBasket.products.length})</a></li>
                <li><a href="javascript:showD()">HOW TO MAKE</a></li>
                ${userVerify(true, false) === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showG()">Logg inn</a></li>'}
                ${userVerify(false, true) === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
            </ul>
        </div>
    </div>
    <div id="mainContent">
        <div class="optionsListDiv" id="optionsListDiv">
            <ul id="optionsList">
                <li onclick="showOrderHistory()">Dine Bestillinger</li>
                <li onclick="showContactInformation()">Kontakt Informasjon</li>
                <li onclick="showPaymentMethods()">Lagrede Betalings Metoder</li>
                <li onclick="showChangePassword()">Endre Passord</li>
                <li onclick="logout()">Logg ut</li>
            </ul>
        </div>

        <div id="accountBox"></div>

    </div>

    ${showMobileMenu()}

    <div id="footerContent">
        <a href="#" class="footer-text">LUNCHPOWER</a>
    </div>
</div>
`
    showOrderHistory()
}

function showOrderHistory() {
    const orderList = model.orderHistory[model.currentUserId].orderList;
    let list = '';
    if (orderList.length <= 0) {
        list = `<p>Du har ingen bestillinger</p>`
    } else {
        for (index = 0; index < orderList.length; index++) {
            list += getOrderList(index)
        }
    }
    let html = `
    <div class="accountBox">
        <h1>${model.users[searchUserIndex(model.currentUserId)].name} ${model.users[searchUserIndex(model.currentUserId)].surname}</h1>
        <div id="orderHistory">
            <h1>Bestilte Varer</h1>
            <div>
                ${list}
            </div>
        </div>
    </div>
    `;

    document.getElementById('accountBox').innerHTML = html
}

function getOrderList(id) {
    const orderList = model.orderHistory[model.currentUserId].orderList;
    let list = `
    <div class="orderDiv"><h1>Order Nummer: ${orderList[id].orderId + 1}</h1>
    `;
    for (i = 0; i < orderList[id].productsName.length; i++) {
        list += `
             <p>Produkt ${i + 1}: ${orderList[id].productsName[i]}</p>
             <ul>
             <li>Mengde: ${orderList[id].productsAmount[i]}</li>
             <li>Produkt totalt: ${orderList[id].productsPriceTotal[i]}kr</li>
             </ul>
            `;
    }
    list += `<h2>Totalpris for alt: ${orderList[id].priceTotalAll}kr</h2>
             <h2>Order levert: ${orderList[id].delivered === true ? 'Ja' : 'Nei'}</h2>
             </div>
             `;
    return list
}

function showPaymentMethods() {
    let html = `
    <div class="accountBox">
        <h3>Ingenting her enda</h3>
    </div>
    `;

    document.getElementById('accountBox').innerHTML = html
}

function showContactInformation() {
    const currentUser = model.users[searchUserIndex(model.currentUserId)];
    model.inputs.user.editUserInput = currentUser;
    let html = `
    <div class="accountBox">
        <form action="javascript:updateContactInformation()">
            <p>Brukernavn</p>  
            <input type="text" value="${currentUser.username}" onchange="model.inputs.user.editUserInput.username = this.value" required>
            <p>Navn</p>
            <input type="text" value="${currentUser.name}" onchange="model.inputs.user.editUserInput.name = this.value" required>
            <p>Etternavn</p>
            <input type="text" value="${currentUser.surname}" onchange="model.inputs.user.editUserInput.surname = this.value" required>
            <p>Leverings Adresse</p>
            <input type="text" value="${currentUser.address}" onchange="model.inputs.user.editUserInput.address = this.value" required>
            <p>Email</p>
            <input type="text" value="${currentUser.email}" onchange="model.inputs.user.editUserInput.email = this.value" required>
            <p>Mobil Nummer</p>
            <input type="text" value="${currentUser.phoneNumber}" onchange="model.inputs.user.editUserInput.phoneNumber = this.value" required> <br>
            <button type="submit">Lagre</button>
        </form>
    </div>
    `;
    document.getElementById('accountBox').innerHTML = html
}

function showChangePassword() {
    let html = `
    <div class="accountBox">
        <form action="javascript:updatePassword()">
            <input type="text" placeholder="Gammelt Passord" value="" onchange="model.inputs.user.editPassword.oldPassword = this.value" required></input> <br>
            <input type="text" placeholder="Nytt Passord" value="" onchange="model.inputs.user.editPassword.newPassword = this.value" required></input> <br>
                <p>Husk passordet</p>
                <p>Passordet må bestå av minst 3 tegn</p>
                <p>Ikke bruk et passord du bruker ofte</p>
            <input type="text" placeholder="Bekreft nytt passord" value="" onchange="model.inputs.user.editPassword.confirmPassword = this.value" required></input> <br>
            <button type="submit">Lagre</button>
        </form>
    </div>
    `;

    document.getElementById('accountBox').innerHTML = html
}