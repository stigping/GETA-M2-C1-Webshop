function showHowTo() {
    appDiv.innerHTML = `<div id="grid-container">
<div id="headerContent">
    <div class='logoWrap'>
        <a href="javascript:showA()">LUNCHPOWER</a>
    </div>
    <div class='inner-menu'>
        <ul class='menuWrap'>
            <li class='active'><a href="javascript:showA()">HOME</a></li>
            <li><a href="javascript:showB()">CART</a></li>
            <li><a href="javascript:showF()">ACCOUNT</a></li>
            <li><a href="javascript:showD()">HOW TO MAKE</a></li>
            ${model.currentUser.isAdmin === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oRzlU0ryKcY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<video controls><source src=""></video>
    <div id="howToSteps">
        <p>Step 1</p>
            <p>Varm vann</p>
        <p>Step 2</p>
            <p>Hell vann i kopp med pulver</p>
        <p>Step 3</p>
            <p>???</p>
        <p>Step 4</p>
            <p>Profit!</p>
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

`
}