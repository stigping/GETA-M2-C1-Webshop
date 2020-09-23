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
            <li><a href="javascript:showD()">HOW TO MAKE</a></li>
            ${searchUserIndex(model.currentUser.id) === -1 ? '<li><a href="javascript:showG()">Logg inn</a></li>' : '<li><a href="javascript:showF()">ACCOUNT</a></li>'}
            ${model.currentUser.isAdmin === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oRzlU0ryKcY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div id="howToSteps">
            <h3>Step 1</h3>
                Varm vann
            <br>
            <h3>Step 2</h3>
                Hell vann i kopp med pulver
            <br>
            <h3>Step 3</h3>
                ???
            <br>
            <h3>Step 4</h3>
                Profit!
        </div>
</div>

${showMobileMenu()}

<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>

`
}