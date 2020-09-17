function productShow() {
    const product = model.products;
    const productShownId = model.productShowBox.productShownId;
    const productsLength = model.products.length;

    let html = '';

    html = `
<div  id="prodShow" class="prodShow" ${productShownId != null ? '' : 'style="visibility: hidden"'}>
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[model.productShowBox.currentImage]}"></img>
                <div class="slideshow">
                    <div class="slides">
                        <img onclick="changeImage(1)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[1]}">
                        <img onclick="changeImage(2)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[2]}">
                        <img onclick="changeImage(3)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[3]}">
                        <img onclick="changeImage(4)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[4]}">
                    </div>
                </div>
            </div>
        <div class="outerText">
            <h3>${productsLength <= 0 ? '' : product[productShownId || 0].name} ${productsLength <= 0 ? '' : product[productShownId || 0].price}kr</h3>
            <div class="prodBtns">
                <button class="innholdBtn" onclick="changeTab(0)">Innhold</button>  <button class="naeringBtn" onclick="changeTab(1)">Næringsinnhold</button>  <button class="altBtn" onclick="changeTab(2)">Alternativer</button>
            </div>
            <div id="productInfo" ${model.productShowBox.currentTab === 0 ? '' : 'style="display: none"'}>
                <p>${productsLength <= 0 ? '' : product[productShownId || 0].productInfo}</p> 
            </div>
            
            <div id="content" ${model.productShowBox.currentTab === 1 ? '' : 'style="display: none"'}>
            <ul style="list-style-type: none">
            ${showContents()}
            </ul>
            </div>

            <div id="alternatives" ${model.productShowBox.currentTab === 2 ? '' : 'style="display: none"'}>
            Her skal bli alts
            </div>
        </div>
        <div class="prodBtns">
            <input type="button" value="Add" onclick="addProduct(${productShownId || 0})">
            <input type="button" value="Continue shopping" onclick="deselectProduct()">
        </div>
    </div>
</div>`;

    return html
}

function showContents() {
    const product = model.products;
    const productShownId = model.productShowBox.productShownId;
    let html = '';
    if (model.products.length <= 0) return
    for (i = 0; i < product[productShownId || 0].contents.length; i++) {
        html += `<li>${product[productShownId || 0].contents[i]}</li>`
    }
    return html
}