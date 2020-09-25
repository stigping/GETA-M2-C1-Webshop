function showAccount() {
    appDiv.innerHTML = `<div id="grid-container">
    <div id="headerContent">
        <div class='logoWrap'>
            <a href="javascript:showA()">LUNCHPOWER</a>
        </div>
        <div class='inner-menu'>
            <ul class='menuWrap'>
                <li class='active'><a href="javascript:showA()">HOME</a></li>
                <li><a href="javascript:showB()">CART</a></li>
                <li><a href="javascript:showD()">HOW TO MAKE</a></li>
                ${userVerify(true, false) === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showG()">Logg inn</a></li>'}
                ${userVerify(false, true) === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
            </ul>
        </div>
    </div>
    <div id="mainContent">
        <ul id="optionsList">
            <span>
                <a href="javascript:showOrderHistory()">
                    <li>Dine Bestillinger</li>
                </a>
            </span>
            <span>
                <a href="javascript:showContactInformation()">
                    <li>Kontakt Informasjon</li>
                </a>
            </span>
            <span>
                <a href="javascript:showPaymentMethods()">
                    <li>Lagrede Betalings Metoder</li>
                </a>
            </span>
            <span>
                <a href="javascript:showChangePassword()">
                    <li>Endre Passord</li>
                </a>
            </span>
            <span>
            <a href="javascript:logout()">
                <li>Logg ut</li>
            </a>
        </span>
        </ul>

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
    const orderList = model.orderHistory[searchUserIndex(model.currentUserId)].orderList;
    let list = '';
    if (orderList.length <= 0) {
        list = `<p>Du har ingen bestillinger</p>`
    } else {
        for (index = 0; index < orderList.length; index++) {
            list += getOrderList(index)
        }
    }
    html = `
    <div class="accountBox">
        <h1>Bruker: ${model.users[model.currentUserId].name}</h1>
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
    const orderList = model.orderHistory[searchUserIndex(model.currentUserId)].orderList;
    let list = `
    <div class="orderDiv"><h1>Order Number: ${orderList[id].orderId + 1}</h1>`;
    for (i = 0; i < orderList[id].productsId.length; i++) {
        list += `
             <p>Produkt ${i + 1}: ${model.products[orderList[id].productsId[i]].name}</p>
             <p>Mengde: ${orderList[id].productsAmount[i]}</p>
             `;
    }
    list += `<p>Levert: ${orderList[id].delivered === true ? 'Ja' : 'Nei'}</p></div>`
    return list
}

function showPaymentMethods() {
    let html = `
    <div class="accountBox">
        Hei
    </div>
    `;

    document.getElementById('accountBox').innerHTML = html
}

function showContactInformation() {
    const currentUser = model.users[model.currentUserId];
    model.inputs.user.editUserInput = currentUser;
    let html = `
    <div class="accountBox">
        <p>Brukernavn</p>  
        <input value="${currentUser.username}" onchange="model.inputs.user.editUserInput.username = this.value">
        <p>Navn</p>
        <input value="${currentUser.name}" onchange="model.inputs.user.editUserInput.name = this.value">>
        <p>Etternavn</p>
        <input value="${currentUser.surname}" onchange="model.inputs.user.editUserInput.surname = this.value">>
        <p>Leverings Adresse</p>
        <input value="${currentUser.address}" onchange="model.inputs.user.editUserInput.address = this.value">>
        <p>Email</p>
        <input value="${currentUser.email}" onchange="model.inputs.user.editUserInput.email = this.value">>
        <p>Mobil Nummer</p>
        <input value="${currentUser.phoneNumber}" onchange="model.inputs.user.editUserInput.phoneNumber = this.value">> <br>
        <button onclick="updateContactInformation()">Lagre</button>
    </div>
    `;
    document.getElementById('accountBox').innerHTML = html
}

function showChangePassword() {
    let html = `
    <div class="accountBox">
        <input placeholder="Gammelt Passord" value="" onchange="model.inputs.user.editPassword.oldPassword = this.value"></input> <br>
        <input placeholder="Nytt Passord" value="" onchange="model.inputs.user.editPassword.newPassword = this.value"></input> <br>
        <button onclick="updatePassword()">Lagre</button>
    </div>
    `;

    document.getElementById('accountBox').innerHTML = html
}