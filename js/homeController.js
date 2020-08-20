function selectProduct() {
    document.getElementById('prodShow').classList.toggle('hidden', false);
}

const showDialog = () => {
    document.getElementById('prodShow').classList.add('show')
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = 'fixed';
  };

  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('dialog').classList.remove('show');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });