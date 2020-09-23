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
                <li><a href="javascript:showF()">ACCOUNT</a></li>
                <li><a href="javascript:showD()">HOW TO MAKE</a></li>
                ${model.currentUser.isAdmin === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
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
        </ul>

        <div id="optionsBox"></div>

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
    const orderList = model.orderHistory[searchUserIndex(model.currentUser.id)].orderList;
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
        <h1>Bruker: ${model.users[model.currentUser.id].name}</h1>
        <div id="orderHistory">
            <h1>Bestilte Varer</h1>
            <div>
                ${list}
            </div>
        </div>
    </div>
    `;

    document.getElementById('optionsBox').innerHTML = html
}

function getOrderList(id) {
    const orderList = model.orderHistory[searchUserIndex(model.currentUser.id)].orderList;
    let list = `
    <h1>Order Number: ${orderList[id].orderId + 1}</h1>`;
    for (i = 0; i < orderList[id].productsId.length; i++) {
        list += `
             <p>Produkt ${i + 1}: ${model.products[orderList[id].productsId[i]].name}</p>
             <p>Mengde: ${orderList[id].productsAmount[i]}</p>
             `;
    }
    list += `<p>Delivered: ${orderList[id].delivered}</p>`
    return list
}

function showPaymentMethods() {
    let html = `
    <div class="accountBox">
        Hei
    </div>
    `;
    
    document.getElementById('optionsBox').innerHTML = html
}

function showContactInformation() {
    let html = `
    <div class="accountBox">
        <p>Brukernavn</p>  
        <input value="${model.users[model.currentUser.id].username}">
        <p>Navn</p>
        <input value="${model.users[model.currentUser.id].name}">
        <p>Etternavn</p>
        <input value="${model.users[model.currentUser.id].surname}">
        <p>Leverings Adresse</p>
        <input value="${model.users[model.currentUser.id].address}">
        <p>Email</p>
        <input value="${model.users[model.currentUser.id].email}">
        <p>Mobil Nummer</p>
        <input value="${model.users[model.currentUser.id].phoneNumber}"> <br>
        <button>Lagre</button>
    </div>
    `;
    document.getElementById('optionsBox').innerHTML = html
}

function showChangePassword() {
    let html = `
    <div class="accountBox">
        <input placeholder="Gammelt Passord"></input> <br>
        <input placeholder="Nytt Passord"></input> <br>
        <button>Lagre</button>
    </div>
    `;

    document.getElementById('optionsBox').innerHTML = html
}




// model.orderHistory[0].orderId