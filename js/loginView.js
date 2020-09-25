function showLogin() {
    appDiv.innerHTML = `
<div id="grid-container">
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

${loginMenu()}

<div class="questionButtons">
                <ul>
                    <span>
                        <a href="javascript:showD()">
                            <li>How To Make</li>
                        </a>
                    </span>
                    <li><a></a>TEST</li>
                    <li><a></a>TEST</li>
                 </ul>
            </div>
</div>

${showMobileMenu()}
    
<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>

`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

function loginMenu() {
    let html = `
    <div ${model.inputs.user.createNewUserEdit === false ? '' : 'style="display:none;"'} id="loginMenu">
        <div class="createNewUserDiv">
            <form>
                <input type="text" placeholder="Brukernavn" onchange="model.inputs.user.loginInput.username = this.value"></input>
                <input type="text" placeholder="Passord" onchange="model.inputs.user.loginInput.password = this.value"></input>
                <button type="button" onclick="login()">Log Inn</button>
                <button type="button" onclick="changeMenu(false, true)">Lag Ny Bruker</button>
            </form>
        </div>
    </div>

    <div ${model.inputs.user.createNewUserEdit === true ? '' : 'style="display:none;"'} id="createUserMenu">
        <div class="createNewUserDiv">
            <form>
                <input type="text" placeholder="Brukernavn"></input>
                <input type="text" placeholder="Passord"></input>
                <input type="text" placeholder="Fornavn"></input>
                <input type="text" placeholder="Etternavn"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Telefon Nummer"></input>
                <input type="text" placeholder="Addresse"></input>
                <button type="button">Lag bruker</button>
                <button type="button" onclick="changeMenu(true, false)">Logg inn istedenfor?</button>
            </form>
        </div>
    </div>
    `;

    return html
}