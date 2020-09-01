function showBasket() {
    appDiv.innerHTML = `
    
<div  id="prodShow" class="prodShow" ${model.inputs.productShownId != null ? '' : 'style="visibility: hidden"'}>
<div  onclick="deselectProduct()" class="prodOverlay"></div>
<div id="productBox">
    <div class="outerImages">
        <img src="${model.products[model.inputs.productShownId || 0].images[0]}"></img>
            <div class="slideshow">
                <div class="slides">
                    <img src="${model.products[model.inputs.productShownId || 0].images[1]}">
                    <img src="${model.products[model.inputs.productShownId || 0].images[2]}">
                    <img src="${model.products[model.inputs.productShownId || 0].images[3]}">
                    <img src="${model.products[model.inputs.productShownId || 0].images[4]}">
                </div>
            </div>
        </div>
    <div class="outerText">
    <h3>${model.products[model.inputs.productShownId || 0].name}</h3>
    <p>${model.products[model.inputs.productShownId || 0].productInfo}</p>
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
            <li onclick="selectProduct(0)">
                <img src="${model.products[0].images[0]}">
                Test Product  --- Amount: ${model.shoppingBasket[0].amount}, Price: ${model.products[0].price}</li>

            <li onclick="selectProduct(1)">
                <img src="${model.products[1].images[3]}">
               Test Product 2 --- Amount: ${model.shoppingBasket[1].amount}, Price: ${model.products[1].price}</li>
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