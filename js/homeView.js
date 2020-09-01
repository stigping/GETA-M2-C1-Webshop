function showHome() {
    const basket = model.shoppingBasket;
    const product = model.products;
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
        <div class="prodButtons">
            <input type="button" value="Add">
            <input type="button" value="Remove" onclick="removeProduct(${model.currentUser.id}, ${model.inputs.productShownId})">
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
            <div class="mainGrid">
                <div class="grid1">
                    <img onclick="selectProduct(0)" src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>${model.products[0].name}</h3>
                </div>
                <div onclick="selectProduct(1)" class="grid-item1">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>${model.products[1].name}</h3>
                </div>
                <div onclick="selectProduct(2)" class="grid-item2">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>${model.products[2].name}</h3>
                </div>
                <div onclick="selectProduct(3)" class="grid-item3">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>${model.products[3].name}</h3>
                </div>
                <div onclick="selectProduct(4)" class="grid-item4">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>${model.products[4].name}</h3>
                </div>
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