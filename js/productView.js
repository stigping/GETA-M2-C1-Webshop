function productShow() {

`
return <div  id="prodShow" class="prodShow" ${productShownId != null ? '' : 'style="visibility: hidden"'}>
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
            <h3>${productsLength <= 0 ? '' : product[productShownId || 0].name}</h3>
            <p>${productsLength <= 0 ? '' : product[productShownId || 0].productInfo}</p>
        </div>
        <div class="prodButtons">
            <input type="button" value="Add" onclick="addProduct(${productShownId || 0})">
        </div>
    </div>
</div>`
}