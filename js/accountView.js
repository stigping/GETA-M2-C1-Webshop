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
    <div id="accountInfo">
        <ul>${model.currentUser.username}</ul>
    </div>

    <div id="orderHistory">
        <ul style="list-style-type: none">${listOrderHistory()}</ul>
    </div>
</div>

<div class="mobileMenu">
    <span>
        <a href="javascript:showA()">
            <i class="footer-text fas fa-home fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:_blank">
            <i class="footer-text fas fa-dragon fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:_blank">
            <i class="footer-text fas fa-bed fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:_blank">
            <i class="footer-text fas fa-user fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:showB()">
            <i class="footer-text fas fa-shopping-cart fa-lg"></i>
        </a>
    </span>
</div>

<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
`
}

function listOrderHistory() {
    let html = '';
    for (i = 0; i < model.orderHistory[0].orderList.length; i++) {
        html += `<li>${model.orderHistory[0].orderList[i]}</li>`
    }
    return html
}