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
            <h3>Products</h3>
            <div id="addProductDiv">
                <form>
                    <button type="button" onclick="addNewProduct()">Add Product</button>
                    <input type="text" placeholder="name" onchange="model.inputs.newProductInputs.name = this.value"></input>
                    <input type="text" placeholder="productInfo" onchange="model.inputs.newProductInputs.productInfo = this.value"></input>
                    <input type="text" placeholder="contents" onchange="model.inputs.newProductInputs.contents = this.value"></input> <br>
                    <input type="text" placeholder="price" onchange="model.inputs.newProductInputs.price = this.value"></input>
                    <input type="text" placeholder="calories" onchange="model.inputs.newProductInputs.calories = this.value"></input>
                    <input type="text" placeholder="allergies" onchange="model.inputs.newProductInputs.allergies = this.value"></input>
                    <input type="text" placeholder="moms" onchange="model.inputs.newProductInputs.moms = this.value"></input>
                    <input type="file">Upload images</input>
                </form>
            </div>
            <div class="showproducts">
                <ul>
                ${showProducts()}
                </ul>
            </div>
        </div>

        <div class="stats">
            <div>
                <h3>Stats</h3>
            </div>
            <div class="showcgraph">
                <svg id="cgraph" height="150" width="150" viewBox="0 0 20 20">
                    <circle r="10" cx="10" cy="10" fill="white" />
                    <circle r="5" cx="10" cy="10" fill="transparent"
                    stroke="tomato"
                    stroke-width="10"
                    stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
                    transform="rotate(-90) translate(-20)" />
                </svg>
                <br>
            </div>
            <div>stat graph illustration</div>
            <div class="showpgraph">
            Sett inn statistikk på hva som er mest solgt - bakend greier? 
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
    html += `<li>${model.products[i].name} <button>Remove</button></li> `
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