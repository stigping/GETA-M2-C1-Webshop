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
                <a href="javascript:showA()">
                    <li>Betaling</li>
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
    const orderList = model.orderHistory[model.currentUser.id].orderList;
    let list = '';
    for (i = 0; i < orderList.length; i++) {
        list += ` 
    <h2>Liste Nummer ${i + 1}</h2>
    <p>Produkt Navn:</p>
    <li>${model.products[orderList[i].id].name}</li>
    <p>Mengde:</p>
    <li>${model.orderHistory[model.currentUser.id].orderList[i].amount}</li>
    <p>Levert:</p>
    <li>${model.orderHistory[model.currentUser.id].orderList[i].delivered === true ? 'Ja' : 'Nei'}</li>
    `
    }

    html = `
    <div>
        <h1>${model.users[model.currentUser.id].name}</h1>
        <div id="orderHistory">
            <h1>Bestilte Varer</h1>
            <ul>
                ${list}
            </ul>
        </div>
    </div>
    `;

    document.getElementById('optionsBox').innerHTML = html
}

function showContactInformation() {
    html = `
    <p>Navn</p>
    <input value="${model.users[model.currentUser.id].name} ${model.users[model.currentUser.id].surname}">
    <p>Email</p>
    <input value="${model.users[model.currentUser.id].email}">
    <p>Mobil Nummer</p>
    <input value="${model.users[model.currentUser.id].phoneNumber}"> <br>
    <button>Lagre</button>

    `;
    document.getElementById('optionsBox').innerHTML = html
}

function showChangePassword() {
    html = `
    <input placeholder="Gammelt Passord"></input> <br>
    <input placeholder="Nytt Passord"></input> <br>
    <button>Lagre</button>
    `;

    document.getElementById('optionsBox').innerHTML = html
}