// function iconmenu(){
//     let active = 'activeMenu';
//     let complete ='completeHeader';
//     let newLinks ='linksMobile';
//     let flyX = 'flyX';
//     let imenu = document.querySelector('.menu-tablet-mobile');
//     const brand = document.querySelector('.brand');
//     const header = document.querySelector('.header');
//     const links = document.querySelector('.links');
//     const auth = document.querySelector('.auth');
//     imenu.addEventListener('click', () => {
//         if(imenu.classList.contains(active)){
//             imenu.src="img/icon-menu.png";
//             imenu.classList.remove(active);
//             brand.style.display="block";
//         }else if(imenu !== active){ 
//             imenu.classList.add(active);
//             imenu.src="img/icon-x.png";
//             brand.style.display="none";
//         }
//     });
//     imenu.addEventListener('click', () => {
//         if(header.classList.contains(complete)){
//             header.classList.remove(complete);
//         }else if(header !== complete){ 
//             header.classList.add(complete); 
//         }
//     });
//     imenu.addEventListener('click', () => {
//         if(links.classList.contains(newLinks)){
//             links.classList.remove(newLinks);
//         }else if(links !== newLinks){ 
//             links.classList.add(newLinks); 
//         }
//     });

//     // X
//     imenu.addEventListener('click', () => {
//     if(auth.classList.contains(flyX)){
//         auth.classList.remove(flyX);
//     }else{
//         auth.classList.add(flyX);
//     }
//     });
// }

// iconmenu();

// optro

function newPop() {
    // document.addEventListener("DOMContentLoaded", function(event) {
        // let variable = 'img-f';
        var obtenerImagen = document.querySelector('.img-f');
        console.log(obtenerImagen);
    // });
}
newPop();

function modalPopup() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('modal-overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals =document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if(modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        if(modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
    
}
modalPopup();