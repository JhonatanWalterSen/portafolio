function menuMobile() {
    let change = 'change';
    let none = 'd-none';
    let appear = 'menuAppear';
    const menuOn = document.querySelector('.i-menu');
    const brand = document.querySelector('.brand');
    const menuEstru = document.querySelector('.navbar .container');
    const items = document.querySelector('.items');
    let imenu = document.querySelector('.menu-tablet-mobile');
        menuOn.addEventListener('click', () => {
            if (brand.classList.contains(none)) {
                brand.classList.remove(none)
                items.classList.remove(appear)
                imenu.src="img/icon2-mobile.png";
            } else{
                brand.classList.add(none)
                items.classList.add(appear)
                imenu.src="img/icon-x.png";
            }
            if (menuEstru.classList.contains(change)) {
                menuEstru.classList.remove(change)
                
            } else {
                menuEstru.classList.add(change) 
            }
    }) 
}
menuMobile();

function barra() {
    let progress = document.getElementById('progressbar');
    let totalhe = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function (){
        let progressHe = (window.pageYOffset / totalhe) * 100;
        progress.style.height = progressHe + "%";
    }
}
barra();
