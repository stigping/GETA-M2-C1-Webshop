function showBasket() {
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
            ${userVerify() === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showG()">Logg inn</a></li>'}
            ${userVerify() === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
    <button id="orderButton" onclick="orderProducts()">Bestill</button>
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
        ${listBasketProducts(model.currentUserId)}
    </ul>
        
</div>

    ${showMobileMenu()}

<div id="footerContentNoScroll">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

function listBasketProducts() {
    const basket = model.shoppingBasket;
    const product = model.products;
    let html = '';
    for (i = 0; i < basket.products.length; i++) {
        const productsBasket = product[basket.products[i].id];
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
       T = ${productsBasket.price * model.shoppingBasket.products[i].amount} kr
        </div>
    <div class="basketButtons">
        <i class="fas fa-plus-square" onclick="changeProductAmount(true, ${productsBasket.id})"></i>
        <input type="text" value="${model.shoppingBasket.products[i].amount}" onchange="changeProductAmount2(this.value, ${productsBasket.id})"></input>
        <i class="fas fa-minus-square" onclick="changeProductAmount(false, ${productsBasket.id})"></i>
        <button onclick="removeProduct(${productsBasket.id})">Remove</button>
    </div>
</li>`}
    return html
}