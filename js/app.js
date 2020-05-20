function iconmenu(){
    let active = 'activeMenu';
    let complete ='completeHeader';
    let newLinks ='linksMobile';
    let flyX = 'flyX';
    let imenu = document.querySelector('.menu-tablet-mobile');
    const brand = document.querySelector('.brand');
    const header = document.querySelector('.header');
    const links = document.querySelector('.links');
    const auth = document.querySelector('.auth');
    imenu.addEventListener('click', () => {
        if(imenu.classList.contains(active)){
            imenu.src="img/icon-menu.png";
            imenu.classList.remove(active);
            brand.style.display="block";
        }else if(imenu !== active){ 
            imenu.classList.add(active);
            imenu.src="img/icon-x.png";
            brand.style.display="none";
        }
    });
    imenu.addEventListener('click', () => {
        if(header.classList.contains(complete)){
            header.classList.remove(complete);
        }else if(header !== complete){ 
            header.classList.add(complete); 
        }
    });
    imenu.addEventListener('click', () => {
        if(links.classList.contains(newLinks)){
            links.classList.remove(newLinks);
        }else if(links !== newLinks){ 
            links.classList.add(newLinks); 
        }
    });

    // X
    imenu.addEventListener('click', () => {
    if(auth.classList.contains(flyX)){
        auth.classList.remove(flyX);
    }else{
        auth.classList.add(flyX);
    }
    });
}

iconmenu();