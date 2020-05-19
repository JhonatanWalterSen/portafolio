function iconmenu(){
    let active = 'activeMenu';
    let imenu = document.querySelector('.menu-tablet-mobile');
    imenu.addEventListener('click', () => {
        if(imenu.classList.contains(active)){
            imenu.classList.remove(active);
            console.log(imenu);
        }else if(imenu !== active){ 
            imenu.classList.add(active);
            console.log(imenu);
        }
    });
}

iconmenu();