function showLogin() {
    appDiv.innerHTML = `
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
            ${userVerify(true, false) === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showH()">Logg inn</a></li>'}
            ${userVerify(false, true) === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
            


<div class="questionButtons">
                <ul>
                    <span>
                        <a href="javascript:showD()">
                            <li>How To Make</li>
                        </a>
                    </span>
                    <li><a></a>TEST</li>
                    <li><a></a>TEST</li>
                 </ul>
            </div>
</div>

            

    
${showMobileMenu()}
    
<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>

`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}