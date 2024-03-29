function scrollHeader(){
    const up = document.querySelector('.up');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(scrolled >= 350){
            up.style.display ="block";
            up.style.background="#ffce00";
        }else{
            up.style.display ="none";
            up.style.background="transparent";
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


function datosPortafolio() {
    fetch('portafolio.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        let html='';
        // console.log(datos.portafolioMobile)
        datos.portafolio.forEach(portafolio => {
            const {titulo,descripcion,href,slug,imagen,tecnologias} = portafolio

            html += `
                        <div class="contain__portafolio">
                            <div class="panels__photo-Desc">
                                <img src="img/${imagen}">
                                <div>
                                    <p class="ptitle text-center" >${titulo}</p>
                                    <div class="d-flex justify-content-around pb-2">
                                        <button class="btn btn-primary ptitle" type="button" data-toggle="collapse" data-target="#${slug}" aria-expanded="false" aria-controls="${slug}">
                                            Tecnologías
                                        </button>
                                        <a href="${href}" target="_blank" alt="${titulo}" class="btn bg-amarillo font-titi" >
                                            Ver Proyecto
                                        </a>
                                    </div>
                                    <div class="collapse" id="${slug}">
                                    <div class="contenido-detalle-proyecto">
                                        <div>
                                            <p>${descripcion}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        });
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
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3 class="titleSkill">${servicios.titulo}</h3>
                                <p>${servicios.descripcion}</p>
                                <p>${servicios.descripcion2}</p>
                                <p>${servicios.descripcion3}</p>
                                <p>${servicios.descripcion4}</p>
                            </div>
                        </div>
                    </div>
            `;
        });
        document.querySelector('#containerCards').innerHTML = html;
    })
}

function datosPortafolioReact() {
    fetch('portafolio.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then((datos) =>{
        let html='';

        datos.reactJs.forEach(reactJs => {
            html += `
                        <div class="contain__portafolio">
                            <div class="panels__photo-Desc">
                                <a href="${reactJs.href}" target="_blank" alt="${reactJs.titulo}"><img src="img/${reactJs.imagen}"></a>
                                <div class="detalles__proyecto">
                                    <p class="ptitle">${reactJs.titulo}</p>
                                    <p class="pdesc">${reactJs.descripcion}</p>
                                </div>
                            </div>
                        </div>
            `;
        });
        document.querySelector('#reactJs').innerHTML = html;
    })
}
datosPortafolioReact()
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
