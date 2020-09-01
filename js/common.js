function selectProduct(id) {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    model.inputs.productShownId = id;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();

}

function deselectProduct() {
    const body = document.body;
    const scrollY = body.style.top;
    model.inputs.productShownId = null;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY) * -1);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    if (model.currentPage === 'Home')showHome();
    if (model.currentPage === 'Basket')showBasket();
}

function shownProduct() {

}


// Midlertidig kode !!!
// const selectProduct = () => {
//     document.getElementById('prodShow').classList.toggle('hidden', false);
//     const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//     const body = document.body;
//     body.style.position = 'fixed';
//     body.style.top = `-${scrollY}`;
//   }
  
//   const deselectProduct = () => {
//     const body = document.body;
//     const scrollY = body.style.top;
//     body.style.position = '';
//     body.style.top = '';
//     window.scrollTo(0, parseInt(scrollY) * -1);
//     document.getElementById('prodShow').classList.toggle('hidden', true);
//     window.addEventListener('scroll', () => {
//     document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
//     })
//   }