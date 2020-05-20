function backgroundColors(){
    for (let i = 0; i <= 2000; i++) {
        const div = document.createElement("div");
        div.classList.add("boxSection"); 
        let gs = document.querySelector('.generalSection');
        gs.appendChild(div);
    }
}
backgroundColors();