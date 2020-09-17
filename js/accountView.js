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
    <ul>
        <span>
            <a href="javascript:showA()">
                <li>Dine Bestillinger</li>
            </a>
        </span>
        <span>
            <a href="javascript:showA()">
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
${showAccountBox()}

</div>

${showMobileMenu()}

<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
`
}

function showAccountBox() {
    html = `
    <div>
    <h1>${model.currentUser.username}</h1>
    </div>
    `;

}