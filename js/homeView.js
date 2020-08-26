let appDiv = document.getElementById('app');

function show() {
    appDiv.innerHTML = `

<div  id="prodShow" class="prodShow hidden">
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png"></img>
                <div class="slideshow">
                    <div class="slides">
                        <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png">
                        <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png">
                        <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png">
                        <img src="https://cdn.pixabay.com/photo/2019/12/14/15/22/bread-4695110_1280.png">
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
                <li class='active'><a href="#">HOME</a></li>
                <li><a href="#">CART</a></li>
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
                    <h3>PØLSEGRYTE</h3>
                </div>
                <div onclick="selectProduct()" class="grid-item1">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" class="grid-item2">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" class="grid-item3">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                <div onclick="selectProduct()" onclick="selectProduct()" class="grid-item4">
                    <img src="https://www.aldireviewer.com/wp-content/uploads/2018/08/Aldi-press-release-2.jpg"></img>
                    <h3>PØLSEGRYTE</h3>
                    <p>Hei hå pølse til alle sammen!
                    <br/>
                    Kjøttkaker må vente :)</p>
                </div>
                    <div class="questionButtons">
                        <ul>
                        <li><a></a>TEST</li>
                        <li><a></a>TEST</li>
                        <li><a></a>TEST</li>
                        </ul>
                    </div>
                </div>
    </div>
    <div class="mobileMenu">
        <span>
            <a href="index.html" class="footer-text fas fa-home"></a>
        </span>
        <span>
            <a href="dragon.html" class="footer-text fas fa-dragon"></a>
        </span>
        <span>
            <a href="bed.html" class="footer-text fas fa-bed"></a>
        </span>
        <span>
            <a href="user.html" class="footer-text fas fa-user"></a>
        </span>
        <span>
            <a href="cart.html" class="footer-text fas fa-shopping-cart"></a>
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