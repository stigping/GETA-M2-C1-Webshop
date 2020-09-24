function showHome() {
    appDiv.innerHTML = `

    <div class="header-wrapper" style="border-bottom: 1px solid #e9e9e9">
        <nav class="navbar top-menu">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle">
                    <span class="sr-only">Vis/skjul meny</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
        </nav>
    </div>

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