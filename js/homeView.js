function showHome() {
    appDiv.innerHTML = `

    <div class="navbar-wrapper" style="border-bottom: 1px solid #e9e9e9">
        <nav class="navbar top-menu">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle">
                    <span><i class="fas fa-bars"></i></span>
                </button>
                <span class="navbar-collapsed-buttons">
                    <a title="Cart" class="btn navbar-btn" href="#cart">
                        <i class="cart-icon fas fa-shopping-cart"></i>
                        <span class="cart-count">
                            0
                            <span class="sr-only">varer i handlekurven</span>                   
                        </span>
                    </a>
                </span>
                <a title="LunchPower" class="navbar-brand" href="/">
                </a>
            </div>
        </nav>
    </div>
    <div class="content-wrapper"></div>
    <div class="footer-wrapper"></div>
`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

const showProductsList = () => {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `
        <div class="grid1">
        <img onclick="selectProduct(0)" src="${product[0].images[0]}"></img>
        <h3>${product[0].name}</h3>
        </div>
    `;
    for (i = 1; i < 5; i++) {
        html += `
        <div class="grid-item${i}">
        <img onclick="selectProduct(${i})" src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        </div>
        `;
    }
    return html
}

function showRestProductsList() {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `<div class="grid-box">`;
    for (i = 5; i < product.length; i++) {
        html += `
        <img src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        `;
    }
    html += `</div>`;
    return html
}