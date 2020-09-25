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
                ${userVerify(true, false) === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showH()">Logg inn</a></li>'}
                ${userVerify(false, true) === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
            </ul>
        </div>
    </div>
    <div id="mainContent">

                    
                ${showProductsList()}



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

const showProductsList = () => {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `
        <div class="mainImage">
        <img onclick="selectProduct(0)" src="${product[0].images[0]}"></img>
        <h3>${product[0].name}</h3>
        </div>
        <div class="gridImages">
    `;
    for (i = 1; i < product.length; i++) {
        html += `
        <div>
        <img onclick="selectProduct(${i})" src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        </div>
        `;
    }

    html += `</div>`
    return html
}

function showRestProductsList() {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `<div class="grid-item5">`;
    for (i = 5; i < product.length; i++) {
        html += `
        <img src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        `;
    }
    html += `</div>`;
    return html
}