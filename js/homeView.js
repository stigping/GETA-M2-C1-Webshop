function showHome() {
    const product = model.products;
    const productShownId = model.productShownId;
    const productsLength = model.products.length;
    appDiv.innerHTML = `
<div  id="prodShow" class="prodShow" ${productShownId != null ? '' : 'style="visibility: hidden"'}>
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[0]}"></img>
                <div class="slideshow">
                    <div class="slides">
                        <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[1]}">
                        <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[2]}">
                        <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[3]}">
                        <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[4]}">
                    </div>
                </div>
            </div>
        <div class="outerText">
            <h3>${productsLength < 0 ? '' : product[productShownId || 0].name}</h3>
            <p>${productsLength < 0 ? '' : product[productShownId || 0].productInfo}</p>
        </div>
        <div class="prodButtons">
            <input type="button" value="Add" onclick="addProduct(${productShownId || 0})">
        </div>
    </div>
</div>
    <div id="grid-container">
    <div id="headerContent">
        <div class='logoWrap'>
            <a href="javascript:showA()">LUNCHPOWER</a>
        </div>
        <div class='inner-menu'>
            <ul class='menuWrap'>
                <li class='active'><a href="javascript:showA()">HOME</a></li>
                <li><a href="javascript:showB()">CART</a></li>
                <li><a href="#">ACCOUNT</a></li>
                <li><a href="#">HOW TO MAKE</a></li>
                <li><a href="#">ABOUT US</a></li>
                ${model.currentUser.isAdmin === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
            </ul>
        </div>
    </div>
    <div id="mainContent">
            <div class="mainGrid">
                    ${showProductsList()}

                    <div class="questionButtons">
                        <ul>
                        <li><a></a>TEST 1</li>
                        <li><a></a>TEST</li>
                        <li><a></a>TEST</li>
                        </ul>
                    </div>
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

`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

const showProductsList = () => {
    const product = model.products;
    if (model.products.length <= 0) return '';
    let html = `
        <div class="grid1">
        <img onclick="selectProduct(0)" src="${model.products[0].images[0]}"></img>
        <h3>${product[0].name}</h3>
        </div>
    `;
    for (i = 1; i < model.products.length; i++) {
        html += `
        <div class="grid-item${i}">
        <img onclick="selectProduct(${i})" src="${model.products[i].images === null ? '' : model.products[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        </div>
        `;
    }
    return html
}