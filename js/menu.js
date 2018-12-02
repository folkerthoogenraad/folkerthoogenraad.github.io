var menuOpen = false;

const menuButtonId = "menu_button";
const menuId = "menu";

function toggleMenu(){
    setMenu(!menuOpen);
}

function setMenu(open){
    menuOpen = open;

    var el = document.getElementById(menuId);

    el.style.transition = "transform 0.3s ease";

    if(open){
        el.style.transform = "translateX(100%)";
    }else{
        el.style.transform = "translateX(0%)";
    }
}


window.addEventListener('load', ()=>{

    window.addEventListener('resize', () => setMenu(false));
    window.addEventListener('click', () => this.setMenu(false));
    window.addEventListener("hashchange",() => this.setMenu(false), false);

    document.getElementById(menuButtonId).addEventListener('click', (event) => {this.toggleMenu(); event.stopPropagation();}); 
    document.getElementById(menuId).addEventListener('click', (event) => { event.stopPropagation();}); 
});