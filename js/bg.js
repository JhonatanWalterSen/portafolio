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


function isotopoFilter() {
    $(".imgbox").isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows'
    });
    $(".filterbox ul li a").click(function () {
        $(".filterbox ul li a").removeClass("activefilter")
       $(this).addClass("activefilter"); 
    });
}
isotopoFilter();