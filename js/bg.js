/* function scrollHeader(){
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(scrolled >= 50){
            nav.style.background="#072145";
        }else{
            nav.style.background="transparent";
        }
    });
}
scrollHeader(); */

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


function datosPortafolio() {
    fetch('portafolio.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        console.log(datos);
        let html='';
        // console.log(datos.portafolioMobile)
        datos.portafolio.forEach(portafolio => {
            html += `
                        <div class="contain__portafolio">
                                <div class="panels__photo-Desc">
                                <img src="img/${portafolio.imagen}" alt="">
                            </div>
                            <div class="panels__photo-Desc boxfilter">
                                <div class="paneldesc">
                                    <p class="ptitle">${portafolio.titulo}</p>
                                    <p class="pdesc">${portafolio.descripcion}</p>
                                    <div class="twoBtns">
                                        <a class="btnstyle" href="${portafolio.href}" target="_blank" ><span>Ver web</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        });
        // console.log(datos.portafolio[0].titulo);       
        document.querySelector('#webPages').innerHTML = html;
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
datosPortafolio();
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


function linksHeaderCss() {
    let linkA = Array.prototype.slice.apply(document.querySelectorAll('.linksTo'));
    document.getElementById('links').addEventListener('click', e => {
        if (e.target.classList.contains('linksTo')) {
            let i = linkA.indexOf(e.target);
            linkA.map(lin => lin.classList.remove('link-active'));
            linkA[i].classList.add('link-active');
        }
    })
}
linksHeaderCss();
