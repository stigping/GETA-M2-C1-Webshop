function showHome() {
    appDiv.innerHTML = `
<div  id="prodShow" class="prodShow hidden">
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png"></img>
                <div class="slideshow">
                    <div class="slides">
                        <img src="https://www.pngmart.com/files/1/Grilled-Chicken-Caesar-Salad-PNG.png">
                        <img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Food-PNG.png">
                        <img src="https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png">
                        <img src="https://www.pngkit.com/png/full/112-1129683_shoyu-ramen-ramen-png.png">
                    </div>
                </div>
            </div>
        <div class="outerText">
            <h3>Kebab</h3>
            <p>Tom for pølse</p>
        </div>
    </div>
</div>
    <div id="grid-container">
    <div id="headerContent">
        <div class='logoWrap'>LUNCHPOWER</div>
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
                    <img onclick="selectProduct()" src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE 1</h3>
                </div>
                <div onclick="selectProduct()" class="grid-item1">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE 2</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" class="grid-item2">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE 3</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" class="grid-item3">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE 4</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" class="grid-item4">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE 5</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
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

// https://css-tricks.com/examples/State/

// https://css-tricks.com/using-the-html5-history-api/