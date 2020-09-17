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
                <a href="javascript:showA()">
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
    let list = '<h1>Bestilte Varer</h1>';
    for (i = 0; i < model.orderHistory[model.currentUser.id].orderList.length; i++) {
        list += ` 
    <p>Liste Nummer ${i + 1}</p>
    <p>Produkt Navn</p>
    <li>${model.orderHistory[model.currentUser.id].orderList[i].name}</li>
    <p>Mengde</p>
    <li>${model.orderHistory[model.currentUser.id].orderList[i].amount}</li>
    <p>Levert</p>
    <li>${model.orderHistory[model.currentUser.id].orderList[i].delivered}</li>
    `
    }

    html = `
    <div>
        <h1>${model.users[model.currentUser.id].name}</h1>
        <div id="orderHistory">
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
    <li>${model.users[model.currentUser.id].name} ${model.users[model.currentUser.id].surname}</li>
    <p>Email</p>
    <li>${model.users[model.currentUser.id].email}
    </li>
    <p>Mobil Nummer</p>
    <li>${model.users[model.currentUser.id].phoneNumber}
    </li>
    `;
    document.getElementById('optionsBox').innerHTML = html
}