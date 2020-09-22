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
    products = test();
    let list = '';
    for (i = 0; i < 2; i++) {
        list += `<p></p>`;
    }

    html = `
    <div class="accountBox">
        <h1>Bruker: ${model.users[model.currentUser.id].name}</h1>
        <div id="orderHistory">
            <h1>Bestilte Varer</h1>
            <div>
                <ul>
                    ${list}
                </ul>
            </div>
        </div>
    </div>
    `;

    document.getElementById('optionsBox').innerHTML = html
}

function test() {
    const orderList = model.orderHistory[model.currentUser.id].orderList;
    for (i = 0; i < orderList.length; i++) {
        console.log(orderList[i].productsId[i])
    }
}

function getOrderList() {
    test = model.orderHistory[searchUserIndex(model.currentUser.id)].orderList;
    for (i = 0; i < test.length; i++) {
        html += `<p></p>`
    }
    return console.log(test.length)
}

function showContactInformation() {
    html = `
    <div class="accountBox">
        <p>Navn</p>
        <input value="${model.users[model.currentUser.id].name} ${model.users[model.currentUser.id].surname}">
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
    html = `
    <div class="accountBox">
        <input placeholder="Gammelt Passord"></input> <br>
        <input placeholder="Nytt Passord"></input> <br>
        <button>Lagre</button>
    </div>
    `;

    document.getElementById('optionsBox').innerHTML = html
}




// model.orderHistory[0].orderId