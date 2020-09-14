function showBasket() {
    const basket = model.shoppingBasket;
    const product = model.products;
    const productShownId = model.inputs.productShownId;
    appDiv.innerHTML = `
<div  id="prodShow" class="prodShow" ${productShownId != null ? '' : 'style="visibility: hidden"'}>
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <img src="${product[productShownId || 0].images[0]}"></img>
                <div class="slideshow">
                    <div class="slides">
                        <img src="${product[productShownId || 0].images[1]}">
                        <img src="${product[productShownId || 0].images[2]}">
                        <img src="${product[productShownId || 0].images[3]}">
                        <img src="${product[productShownId || 0].images[4]}">
                    </div>
                </div>
            </div>
        <div class="outerText">
            <h3>${product[productShownId || 0].name}</h3>
            <p>${product[productShownId || 0].productInfo}</p>
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
        
    <div class="cartInfo">
        <div class="col1">
            <div>Antall</div>
        </div>
        <div class="col2">
            <div>Totalpris</div>
        </div>
        <div class="col3">
            <div>Moms</div>
        </div>
        <div class="col4">
            <div>Pris pr.stk</div>
        </div>
    </div>
    <ul class="basketList">
        ${listProducts(model.currentUser.id)}
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
<div id="footerContentNoScroll">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
`;
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})
}

function listProducts(id) {
    const basket = model.shoppingBasket;
    const product = model.products;
    let html = '';
    for (i = 0; i < basket[id].products.length; i++) {
    const productsBasket = product[basket[id].products[i].id];
    html += `
<li>
    <div class="frame">
        <img onclick="selectProduct(${productsBasket.id})" src="${productsBasket.images[0]}">
    </div>
    <div class="infoText">
        <div class="itemName">
        <span onclick="selectProduct(${productsBasket.id})">
        ${productsBasket.name}</span>
        </div>
        <div class="itemPrice">
      per - ${productsBasket.price} kr
        </div>
        <div class="itemInfo">
        ${product[i].moms}
        </div>
        <div class="itemTotalPrice">
       T = ${basket[id].products[i].priceTotal} kr
        </div>
    <div class="basketButtons">
        <i class="fas fa-plus-square" onclick="changeProductAmount(true, ${productsBasket.id})"></i>
        <input type="text" value="${model.shoppingBasket[model.currentUser.id].products[i].amount}" onchange="changeProductAmount2(this.value, ${productsBasket.id})"></input>
        <i class="fas fa-minus-square" onclick="changeProductAmount(false, ${productsBasket.id})"></i>
        <button onclick="removeProduct(${model.currentUser.id}, ${productsBasket.id})">Remove</button>
    </div>
</li>`}
return html
}