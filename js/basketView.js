function showBasket() {
    const basket = model.shoppingBasket;
    const product = model.products;
    appDiv.innerHTML = `
    
<div  id="prodShow" class="prodShow" ${model.inputs.productShownId != null ? '' : 'style="visibility: hidden"'}>
<div  onclick="deselectProduct()" class="prodOverlay"></div>
<div id="productBox">
    <div class="outerImages">
        <img src="${product[model.inputs.productShownId || 0].images[0]}"></img>
            <div class="slideshow">
                <div class="slides">
                    <img src="${product[model.inputs.productShownId || 0].images[1]}">
                    <img src="${product[model.inputs.productShownId || 0].images[2]}">
                    <img src="${product[model.inputs.productShownId || 0].images[3]}">
                    <img src="${product[model.inputs.productShownId || 0].images[4]}">
                </div>
            </div>
        </div>
    <div class="outerText">
    <!-- Hvis id = 0, get id0: Product name + amount + price. -->
    <!--  -->
    <h3>${product[model.inputs.productShownId || 0].name}</h3>
    <p>${product[model.inputs.productShownId || 0].productInfo}</p>
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
        </ul>
    </div>
</div>
<div id="mainContent">
        
        <ul class="basketList">
            <li onclick="selectProduct(${product[basket[0].productId[0].id].id})">
                <div class="frame">
                    <img src="${product[basket[0].productId[0].id].images[0]}">
                </div>
                <div class="infoText">
                <div class="itemName">
                ${product[basket[0].productId[0].id].name}
                </div>
                <div class="itemInfo">
                ${product[basket[0].productId[0].id].info}
                </div>
                <div class="itemAmount">
                ${product[basket[0].productId[0].id].amount}
                </div>
                <div class="itemPrice">
                ${product[basket[0].productId[0].id].productPriceTotal}
                </div>
            <div class="itemInfo">
                    Price: ${product[basket[0].productId[0].id].price}
                </div>
                <div class="basketButtons">
                    <i class="fas fa-plus-square"></i>
                    <input type="text" value="${model.shoppingBasket[0].productId[0].amount}"></input>
                    <i class="fas fa-minus-square"></i>
                </div>
            </li>
            <li onclick="selectProduct(1)">
                <div class="frame">
                    <img src="${product[basket[0].productId[1].id].images[0]}">
                </div>
                <div class="infoText">
                    <div class="itemName">
                    ${product[basket[0].productId[1].id].name}
                    </div>
                    <div class="itemInfo">
                    ${product[basket[0].productId[1].id].info}
                    </div>
                    <div class="itemAmount">
                    ${product[basket[0].productId[1].id].amount}
                    </div>
                    <div class="itemPrice">
                    ${product[basket[0].productId[1].id].productPriceTotal}
                    </div>
                    <div class="itemTotalPrice">
                    ${product[basket[0].productId[1].id].productPriceTotal}
                    </div>
                <div class="itemInfo">
                    Price: ${product[1].price}
                </div>
                <div class="basketButtons">
                    <i class="fas fa-plus-square"></i>
                    <input type="text" value="${model.shoppingBasket[0].productId[1].amount}"></input>
                    <i class="fas fa-minus-square"></i>
                </div>
            </li>
        </ul>
        
</div>
<div class="mobileMenu">
    <span>
        <a onclick="javascript:showA()" class="footer-text fas fa-home fa-lg"></a>
    </span>
    <span>
        <a href="dragon.html" class="footer-text fas fa-dragon fa-lg"></a>
    </span>
    <span>
        <a href="bed.html" class="footer-text fas fa-bed fa-lg"></a>
    </span>
    <span>
        <a href="user.html" class="footer-text fas fa-user fa-lg"></a>
    </span>
    <span>
        <a onclick="javascript:showB()" class="footer-text fas fa-shopping-cart fa-lg"></a>
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