// function backgroundColors(){
//     for (let i = 0; i <= 2000; i++) {
//         const div = document.createElement("div");
//         div.classList.add("boxSection"); 
//         let gs = document.querySelector('.generalSection');
//         gs.appendChild(div);
//     }
// }
// backgroundColors();

function scrollHeader(){
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // console.log(scrolled);
        if(scrolled >= 50){
            nav.style.background="#1D3357";
            // nav.style.border="0";
        }else{
            nav.style.background="transparent";
        }
    });
}
scrollHeader();

function letraCambia() {
    const typed = new Typed('.typed',{
        strings:[
            '<i>Hola</i>',
            '<i>Hi</i>', 
            '<i>Buen día</i>', 
            '<i>Good day</i>'
        ],
        typeSpeed:75,
        startDelay:300,
        backSpeed:75,
        shuffle:true,
        backDelay:1500,
        loop:true,
        loopCount:false,
        showCursor:true,
        cursorChar: '|',
        contentType: 'html',
    });
}

letraCambia();

// function filter() {
//     $(document).ready(function(){
//         $('.buttons').click(function(){
//             var buttonvalue = $(this).attr('data-filter');
//             if(buttonvalue == 'todo'){
//                 $('.image-filter').show('1000');
//             }
//             else{
//                 $('.image-filter').not('.'+buttonvalue).hide('200');
//                 $('.image-filter').filter('.'+buttonvalue).show('200');
//             }
//             // $('buttons').addClass('.activefilter');
//             $(this).addClass('activefilter').siblings().removeClass('activefilter');
//         });
//     });
// }

// filter();


function filtergallery() {
    
    $(document).ready(function(){
        $(".buttons").click(function(){
            var value = $(this).attr("data-filter");
            if (value == "todo") {
                $(".filter").show("1000");
            }
            else{
                $(".filter").not("."+value).hide("1000");
                $(".filter").filter("."+value).show("1000");
            }
            // add active class
            $("ul .buttons").click(function() {
                $(this).addClass("activefilter").siblings().removeClass();
            });
        });
    });
}
filtergallery();

function datosSkills() {
    fetch('servicios.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        let html='';
        datos.servicios.forEach(servicios => {
            html += `
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="img/${servicios.img}">
                                <h3 class="titleSkill">${servicios.titulo}</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>${servicios.descripcion}</p>
                            </div>
                        </div>
                    </div>
            `;
        });
        document.querySelector('#containerCards').innerHTML = html;
    })
}
datosSkills();

//
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
modalPopup()