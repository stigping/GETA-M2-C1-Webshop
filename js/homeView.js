function showHome() {
    appDiv.innerHTML = `
    
    
    ${productShow()}
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
                ${searchUserIndex(model.currentUserId) === -1 ? '<li><a href="javascript:showG()">Logg inn</a></li>' : '<li><a href="javascript:showF()">ACCOUNT</a></li>'}
                ${model.users[searchUserIndex(model.currentUserId)].isAdmin ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
            </ul>
        </div>
    </div>
    <div id="mainContent">
            <div class="mainGrid">
                    
                ${showProductsList()}

                ${showRestProductsList()}

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

const showProductsList = () => {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `
        <div class="grid1">
        <img onclick="selectProduct(0)" src="${product[0].images[0]}"></img>
        <h3>${product[0].name}</h3>
        </div>
    `;
    for (i = 1; i < 5; i++) {
        html += `
        <div class="grid-item${i}">
        <img onclick="selectProduct(${i})" src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        </div>
        `;
    }
    return html
}

function showRestProductsList() {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `<div class="grid-box">`;
    for (i = 5; i < product.length; i++) {
        html += `
        <img src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        `;
    }
    html += `</div>`;
    return html
}