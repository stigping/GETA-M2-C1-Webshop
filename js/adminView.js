function showAdmin() {
    appDiv.innerHTML = `
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
                <li><a href="javascript:showC()">ADMIN</a></li>
            </ul>
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

    <div id="mainContent">
        
        <div class="products">
            <div>
                <h3>Products</h3>
                <button>Add Product</button>
            </div>
            <div class="showproducts">
                ${showProducts()}
            </div>
        </div>

        <div class="stats">
            <div>
                <h3>Stats</h3>
            </div>
            <div class="showstats">
            </div>
        </div>
        
        <div class="users">
        <div>
            <h3>Users</h3>
        </div>
            <div class="showusers">
                ${showUsers()}
            </div>
        </div>
        
            
    </div>
    <div id="footerContentNoScroll">
        <a href="#" class="footer-text">LUNCHPOWER</a>
    </div>
</div>
    `;
}

function showProducts() {
    let html = '';
    for (i = 0; i < model.products.length; i++) {
    html += `<li>${model.products[i].name}</li>`
    }
    return html
}

function showUsers() {
    let html = '';
    for (i = 0; i < model.users.length; i++) {
    html += `<li>${model.users[i].username}</li>`
    }
    return html
}