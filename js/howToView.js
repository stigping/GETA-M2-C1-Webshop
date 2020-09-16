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
            <li><a href="#">ACCOUNT</a></li>
            <li><a href="#">HOW TO MAKE</a></li>
            <li><a href="#">ABOUT US</a></li>
            ${model.currentUser.isAdmin === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
    weeeeeeeeeeeeeeeeeeee
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