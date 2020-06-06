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


function datosPortafolio() {
    fetch('portafolio.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        let html='';
        datos.portafolio.forEach(portafolio => {
            html += `
            <div class="box filter ${portafolio.categoria}">
                <img data-modal-target="#modal" class="img-f" src="img/${portafolio.imagen}">
            </div>
            <div class="modal" id="modal">
                <div class="modal-header">
                    <div class="title-modal">${portafolio.titulo}</div>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-im">
                        <img src="img/${portafolio.imagen}">
                    </div>
                    <div class="modal-desc">
                        <p class="desc-info">${portafolio.descripcion}</p>
                        <a href="${portafolio.href}" class="desc-btns">${portafolio.tipo}</a>
                    </div>
                </div>
            </div>
            <div id="modal-overlay"></div>
            `;
        });
        document.querySelector('#imgbox').innerHTML = html;
    })
}


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
// datosPortafolio();
datosSkills();



function tabs() {
    (function (d) {
        let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs__item'));
        let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels__item'));
        d.getElementById('tabs').addEventListener('click', e => {
            if(e.target.classList.contains('tabs__item')){
               let i = tabs.indexOf(e.target);
                tabs.map(tab => tab.classList.remove('activetab'));
                tabs[i].classList.add('activetab');
                panels.map(panel => panel.classList.remove('activetab'));
                panels[i].classList.add('activetab');
            }
        });
    })(document);
    
}

tabs();
