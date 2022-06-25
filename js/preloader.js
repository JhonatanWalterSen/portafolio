let preload = () => {
    const fatherblocks = document.querySelectorAll('.preloader .fatherblocks .block');
    
// down, left, up , right
let interval = 0;
fatherblocks.forEach((block, i) => {
    setTimeout(() => {
        animate(block, i);
    }, interval);
    interval +=500;
});

    function animate(block, index){
        let position = index;
        setInterval(() =>{
            switch(position){
                case 0:
                    block.style.top = "40px";
                    position=3;
                    break;
                case 1:
                    block.style.left = "40px";
                    position=0;
                    break;
                case 2:
                    block.style.top = "0px";
                    position=1;
                    break;
                case 3:
                    block.style.left = "0px";
                    position=2;
                    break;
            }
        }, 1500)
    }
}

preload();

const preloader = document.querySelector('.preloader');
function finisedLoading(){
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
}


    // Cuando la pagina carga
window.onload = function (){
    finisedLoading();
}

// window.onload = function () {
//     setTimeout(() =>{
//         finisedLoading();
//     },5000)
// }

